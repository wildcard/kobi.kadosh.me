#!/usr/bin/env node

/**
 * This script fixes CSS module exports for Gatsby v5 compatibility
 * It runs through all .module.scss files and:
 * 1. Extracts CSS class names including nested BEM-style classes
 * 2. Creates proper :export declarations
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all module SCSS files 
const moduleFiles = glob.sync('src/**/*.module.scss');

console.log(`Found ${moduleFiles.length} SCSS module files to process`);

// Process each file
moduleFiles.forEach(filePath => {
  console.log(`Processing ${filePath}`);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if the file already has proper exports
  if (content.includes(':export {') && !content.includes('___')) {
    const exportSection = content.substring(content.indexOf(':export {'));
    
    // Check if the export section has the correct format (no triple underscores)
    if (!exportSection.includes('___')) {
      console.log(`✓ ${filePath} already has proper exports`);
      return;
    }
  }
  
  // Extract all class names using regex
  // This finds both top-level classes and BEM-style nested classes
  const classRegex = /\.([\w-]+)(?:\s*{|\s*&)/g;
  const nestedClassRegex = /&([-_][\w-]+)/g;
  
  const classes = new Set();
  let match;
  
  // Find top-level classes
  while ((match = classRegex.exec(content)) !== null) {
    classes.add(match[1]);
  }
  
  // Build export section
  const exports = {};
  
  // Process each class to find nested classes too
  Array.from(classes).forEach(className => {
    // Add the base class
    exports[className] = className;
    
    // Find the start of the class definition
    const classDefStart = content.indexOf(`.${className}`);
    if (classDefStart === -1) return;
    
    // Get the class block (handle nested braces correctly)
    let braceCount = 0;
    let classDefEnd = classDefStart;
    let foundOpeningBrace = false;
    
    for (let i = classDefStart; i < content.length; i++) {
      if (content[i] === '{') {
        braceCount++;
        foundOpeningBrace = true;
      } else if (content[i] === '}') {
        braceCount--;
        if (foundOpeningBrace && braceCount === 0) {
          classDefEnd = i + 1;
          break;
        }
      }
    }
    
    const classBlock = content.substring(classDefStart, classDefEnd);
    
    // Find nested classes using the &- or &_ pattern (BEM-style)
    let nestedMatch;
    while ((nestedMatch = nestedClassRegex.exec(classBlock)) !== null) {
      const suffix = nestedMatch[1]; // Like -header or _title
      const nestedClassName = `${className}${suffix}`;
      exports[nestedClassName] = nestedClassName;
      
      // Now find sub-nested classes (e.g. &-item-link)
      const nestedBlockStart = classBlock.indexOf(nestedMatch[0]);
      if (nestedBlockStart === -1) continue;
      
      // Extract the nested block similarly
      let nestedBraceCount = 0;
      let nestedBlockEnd = nestedBlockStart;
      let foundNestedOpeningBrace = false;
      
      for (let i = nestedBlockStart; i < classBlock.length; i++) {
        if (classBlock[i] === '{') {
          nestedBraceCount++;
          foundNestedOpeningBrace = true;
        } else if (classBlock[i] === '}') {
          nestedBraceCount--;
          if (foundNestedOpeningBrace && nestedBraceCount === 0) {
            nestedBlockEnd = i + 1;
            break;
          }
        }
      }
      
      const nestedBlock = classBlock.substring(nestedBlockStart, nestedBlockEnd);
      
      // Find sub-nested classes
      let subNestedMatch;
      const subNestedRegex = /&([-_][\w-]+)/g;
      while ((subNestedMatch = subNestedRegex.exec(nestedBlock)) !== null) {
        const subSuffix = subNestedMatch[1];
        const subNestedClassName = `${nestedClassName}${subSuffix}`;
        exports[subNestedClassName] = subNestedClassName;
      }
    }
  });
  
  // Generate the new export section
  let exportSection = '\n\n:export {';
  Object.entries(exports).forEach(([key, value]) => {
    exportSection += `\n  ${key}: ${value};`;
  });
  exportSection += '\n}';
  
  // Remove any existing export section
  let newContent = content;
  if (content.includes(':export {')) {
    newContent = content.substring(0, content.indexOf(':export {'));
  }
  
  // Add the new export section
  newContent += exportSection;
  
  // Write the updated file
  fs.writeFileSync(filePath, newContent);
  console.log(`✅ Updated ${filePath} with ${Object.keys(exports).length} exports`);
});

console.log(`\nProcessed ${moduleFiles.length} SCSS module files`);