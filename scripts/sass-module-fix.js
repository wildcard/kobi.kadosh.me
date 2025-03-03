const fs = require('fs');
const path = require('path');

// Update all SCSS module files to use the correct format
const fixScssModules = () => {
  // Reset mixins to properly use @use for variables
  const mixinFiles = [
    '/Users/kobi/personal/kobi.kadosh.me/src/assets/scss/mixins/_breakpoints.scss',
    '/Users/kobi/personal/kobi.kadosh.me/src/assets/scss/mixins/_line-height.scss',
    '/Users/kobi/personal/kobi.kadosh.me/src/assets/scss/mixins/_margin.scss',
    '/Users/kobi/personal/kobi.kadosh.me/src/assets/scss/mixins/_padding.scss',
  ];

  mixinFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add @use statement at the top
    if (!content.includes('@use "../variables"')) {
      content = '@use "../variables" as vars;\n' + content;
    }
    
    // Replace variable references
    content = content
      .replace(/\$typographic-leading/g, 'vars.$typographic-leading')
      .replace(/\$layout-breakpoint-sm/g, 'vars.$layout-breakpoint-sm')
      .replace(/\$layout-breakpoint-md/g, 'vars.$layout-breakpoint-md')
      .replace(/\$layout-breakpoint-lg/g, 'vars.$layout-breakpoint-lg');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated mixin file: ${filePath}`);
  });
};

// Run the fix
fixScssModules();

console.log('SCSS module files have been updated!');