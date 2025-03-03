# Decap CMS Upgrade Guide

This document provides instructions for upgrading from Netlify CMS to Decap CMS, which is the officially recommended successor.

## Background

Netlify CMS has been renamed to Decap CMS and is no longer actively maintained under the old name. The project has moved to a new GitHub repository and npm package names. While the current version of Netlify CMS works fine, it's recommended to upgrade to Decap CMS for future updates and security fixes.

## Upgrade Steps

1. **Remove the old Netlify CMS packages:**
   ```bash
   yarn remove netlify-cms-app gatsby-plugin-netlify-cms
   ```

2. **Install the new Decap CMS packages:**
   ```bash
   yarn add decap-cms-app gatsby-plugin-decap-cms
   ```

3. **Update the imports in src/cms/index.js:**
   ```javascript
   // Change this:
   import CMS from 'netlify-cms-app';

   // To this:
   import CMS from 'decap-cms-app';
   ```

4. **Update the gatsby-config.js file:**
   ```javascript
   // Change this:
   {
     resolve: 'gatsby-plugin-netlify-cms',
     options: {
       modulePath: `${__dirname}/src/cms/index.js`,
     }
   },

   // To this:
   {
     resolve: 'gatsby-plugin-decap-cms',
     options: {
       modulePath: `${__dirname}/src/cms/index.js`,
     }
   },
   ```

5. **Update config.yml (if needed):**
   - No changes are typically needed for the config.yml file
   - The API and configuration format remain the same
   - The CMS will continue to work with Git Gateway, GitHub, GitLab, and other backends

6. **Fix Flow type errors:**
   - If you encounter any Flow type errors during the upgrade, ensure you're using the modern Flow import syntax:
   ```javascript
   // Change this:
   import type { Entry, WidgetFor } from '../../types';
   
   // To this:
   import { type Entry, type WidgetFor } from '../../types';
   ```

7. **Test the CMS admin interface:**
   - Build and run the site: `yarn build && yarn serve`
   - Navigate to the /admin/ route to verify the CMS works correctly
   - Test content creation and editing

## API Changes

The API between Netlify CMS and Decap CMS is intended to be compatible, so you shouldn't need to update any other code. The goal of the rename is to maintain compatibility while moving the project to new maintainers.

## Benefits of Upgrading

1. **Active Development:** Decap CMS is actively maintained with regular updates
2. **Security Fixes:** Future security patches will only be available for Decap CMS
3. **New Features:** New features will be developed for Decap CMS only
4. **Community Support:** The community has migrated to Decap CMS

## Troubleshooting

If you encounter any issues during the upgrade:

1. Check the console for specific error messages
2. Make sure all imports are updated to the new package names
3. Clear cache directories (.cache, public, node_modules/.cache) and rebuild
4. Verify that the CMS preview templates are compatible with the new version

## References

- [Decap CMS GitHub Repository](https://github.com/decaporg/decap-cms)
- [Decap CMS Documentation](https://decapcms.org/)
- [Migration Guide from Netlify CMS](https://decapcms.org/docs/migrating-from-netlify-cms/)
- [Gatsby Plugin for Decap CMS](https://www.npmjs.com/package/gatsby-plugin-decap-cms)

🤖 Generated with [Claude Code](https://claude.ai/code)
Co-Authored-By: Claude <noreply@anthropic.com>