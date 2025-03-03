const fs = require('fs');
const path = require('path');

// Get all SCSS module files
const componentsDir = path.join(__dirname, '../../src/components');
const moduleFiles = [];

// Helper to find module files recursively
function findModuleFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    
    if (fs.statSync(filePath).isDirectory()) {
      findModuleFiles(filePath);
    } else if (file.endsWith('.module.scss')) {
      moduleFiles.push(filePath);
    }
  });
}

findModuleFiles(componentsDir);

// Process each module file
moduleFiles.forEach(filePath => {
  console.log(`Processing ${filePath}`);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Define CSS class names from file contents
  const classRegex = /\.([a-zA-Z0-9_-]+)(?:\s*{|\s*&)/g;
  const classes = new Set();
  let match;
  
  while ((match = classRegex.exec(content)) !== null) {
    classes.add(match[1]);
  }
  
  // Create a map of CSS class names
  const cssClasses = {};
  
  // Extract nested class names using regex
  const nestedClassRegex = /&[_-]([a-zA-Z0-9_-]+)/g;
  
  classes.forEach(className => {
    cssClasses[className] = className;
    
    // Find section for this class
    const classSection = content.substring(content.indexOf(`.${className}`));
    const endBrace = classSection.indexOf('}');
    const classDef = classSection.substring(0, endBrace);
    
    // Find nested classes
    let nestedMatch;
    while ((nestedMatch = nestedClassRegex.exec(classDef)) !== null) {
      const nestedName = `${className}__${nestedMatch[1]}`;
      const jsKey = `${className}__${nestedMatch[1]}`.replace(/-/g, '_');
      cssClasses[jsKey] = nestedName;
      
      // Look for deeper nesting
      const nestedSection = classDef.substring(classDef.indexOf(`&${nestedMatch[0]}`));
      const nestedEndBrace = nestedSection.indexOf('}');
      const nestedDef = nestedSection.substring(0, nestedEndBrace);
      
      // Find doubly-nested classes
      const doubleNestedRegex = /&[_-]([a-zA-Z0-9_-]+)/g;
      let doubleNestedMatch;
      
      while ((doubleNestedMatch = doubleNestedRegex.exec(nestedDef)) !== null) {
        const doubleNestedName = `${nestedName}__${doubleNestedMatch[1]}`;
        const doubleJsKey = `${nestedName}__${doubleNestedMatch[1]}`.replace(/-/g, '_');
        cssClasses[doubleJsKey] = doubleNestedName;
      }
    }
  });
  
  // Generate the export section
  let exportSection = '\n\n:export {';
  Object.entries(cssClasses).forEach(([key, value]) => {
    exportSection += `\n  ${key}: ${value};`;
  });
  exportSection += '\n}';
  
  // Add export section if it doesn't exist
  if (!content.includes(':export')) {
    const newContent = content + exportSection;
    fs.writeFileSync(filePath, newContent);
    console.log(`✅ Updated ${filePath}`);
  } else {
    console.log(`⏭️ Skipping ${filePath} - already has exports`);
  }
});

console.log(`\nProcessed ${moduleFiles.length} SCSS module files`);