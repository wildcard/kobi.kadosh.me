const fs = require('fs');
const path = require('path');

// Find all .module.scss files
function findModuleFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findModuleFiles(filePath, fileList);
    } else if (file.endsWith('.module.scss')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Update module file to add CSS exports
function updateModuleFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if the file already has :export
  if (content.includes(':export')) {
    console.log(`Skipping ${filePath} (already has exports)`);
    return;
  }

  // Parse the file to find CSS classes
  const classRegex = /\.([a-zA-Z0-9_-]+)(?:\s*{|\s*&)/g;
  const nestedClassRegex = /&[_-]([a-zA-Z0-9_-]+)/g;
  
  let match;
  const classes = new Set();
  
  // Find top-level classes
  while ((match = classRegex.exec(content)) !== null) {
    classes.add(match[1]);
  }

  // Build export section
  let exportSection = '\n:export {';
  
  classes.forEach(className => {
    // Add the class itself
    exportSection += `\n  ${className}: ${className};`;
    
    // Find nested classes
    const classContent = content.substring(content.indexOf(`.${className}`));
    const endIndex = classContent.indexOf('}');
    const classBlock = classContent.substring(0, endIndex);
    
    let nestedMatch;
    while ((nestedMatch = nestedClassRegex.exec(classBlock)) !== null) {
      const nestedClass = `${className}__${nestedMatch[1]}`;
      exportSection += `\n  ${nestedClass.replace(/-/g, '_')}: ${nestedClass};`;
    }
  });
  
  exportSection += '\n}';
  
  // Append export section to the file
  const updatedContent = content + exportSection;
  fs.writeFileSync(filePath, updatedContent);
  console.log(`Updated ${filePath}`);
}

// Process all module files in src directory
const moduleFiles = findModuleFiles(path.join(__dirname, '../../src'));
moduleFiles.forEach(updateModuleFile);

console.log(`Updated ${moduleFiles.length} module files`);