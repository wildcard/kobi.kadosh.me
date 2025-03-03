const fs = require('fs');
const path = require('path');

// List of files to update
const filesToUpdate = [
  '/Users/kobi/personal/kobi.kadosh.me/src/components/Page/Page.module.scss',
  '/Users/kobi/personal/kobi.kadosh.me/src/components/Pagination/Pagination.module.scss',
  '/Users/kobi/personal/kobi.kadosh.me/src/components/Post/Content/Content.module.scss',
  '/Users/kobi/personal/kobi.kadosh.me/src/components/Post/Meta/Meta.module.scss',
  '/Users/kobi/personal/kobi.kadosh.me/src/components/Sidebar/Sidebar.module.scss',
  '/Users/kobi/personal/kobi.kadosh.me/src/components/Sidebar/Contacts/Contacts.module.scss',
  '/Users/kobi/personal/kobi.kadosh.me/src/components/Post/Author/Author.module.scss',
  '/Users/kobi/personal/kobi.kadosh.me/src/components/Sidebar/Author/Author.module.scss',
  '/Users/kobi/personal/kobi.kadosh.me/src/components/Post/Tags/Tags.module.scss',
  '/Users/kobi/personal/kobi.kadosh.me/src/components/Post/Post.module.scss',
  '/Users/kobi/personal/kobi.kadosh.me/src/components/Feed/Feed.module.scss',
  '/Users/kobi/personal/kobi.kadosh.me/src/components/Sidebar/Menu/Menu.module.scss',
  '/Users/kobi/personal/kobi.kadosh.me/src/components/Sidebar/Copyright/Copyright.module.scss',
  '/Users/kobi/personal/kobi.kadosh.me/src/components/Layout/Layout.module.scss'
];

// Process each file
filesToUpdate.forEach(filePath => {
  try {
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Get directory depth to determine relative path
    const relativePath = path.relative(path.dirname(filePath), '/Users/kobi/personal/kobi.kadosh.me/src/assets/scss');
    const relativePath2 = relativePath.replace(/\\/g, '/');
    
    // Replace import statements with the new @use syntax
    const newContent = content
      .replace(
        /@import ['"].*?variables['"];(\s*)@import ['"].*?mixins['"];/gm, 
        `@use "${relativePath2}/variables" as vars;\n@use "${relativePath2}/mixins" as mix;`
      );
    
    // Update any references to variables and mixins
    const updatedContent = newContent
      .replace(/\$color-([a-zA-Z-]+)/g, 'vars.$color-$1')
      .replace(/\$layout-([a-zA-Z-]+)/g, 'vars.$layout-$1')
      .replace(/\$typographic-([a-zA-Z-]+)/g, 'vars.$typographic-$1')
      .replace(/\$button-([a-zA-Z-]+)/g, 'vars.$button-$1')
      .replace(/@include breakpoint/g, '@include mix.breakpoint')
      .replace(/@include margin/g, '@include mix.margin')
      .replace(/@include padding/g, '@include mix.padding')
      .replace(/@include line-height/g, '@include mix.line-height');
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated ${filePath}`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
});

console.log('All SCSS files updated successfully!');