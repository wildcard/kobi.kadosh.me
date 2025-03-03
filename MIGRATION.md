# Gatsby Migration Documentation - March 2025

## Overview

This document details the comprehensive migration and compatibility fixes implemented since commit `ae303fb` to update and modernize the Gatsby-based personal website. The migration addresses several breaking changes in Gatsby v5+, Flow type syntax issues, and CSS module compatibility problems.

## 1. Node.js Environment Updates

### Node Version Upgrade
- Created `.nvmrc` file specifying Node v20.14.0 (Iron LTS)
- Updated Netlify configuration to use Node v20.14.0 and Yarn 1.22.19

### Deployment Configuration
- Added Vercel deployment support via `vercel.json` with:
  - Build command: `yarn build`
  - Output directory: `public`
  - Framework: `gatsby`
  - Security headers:
    - X-Content-Type-Options: nosniff
    - X-Frame-Options: DENY
    - X-XSS-Protection: 1; mode=block
- Updated Netlify CMS configuration for Vercel compatibility by adding repository information

## 2. Dependencies Update

### Package.json Updates
- Updated Node.js engine requirements to v20+
- Replaced `node-sass` with `sass` (modern implementation)
- Updated Gatsby to v5.12.12 from older v2/v3
- Updated React to v18.2.0
- Updated all development dependencies to compatible versions
- Removed Flow from the linting process to simplify development

## 3. GraphQL Query Syntax Updates

The GraphQL syntax in Gatsby v5 has changed significantly. Updated all queries to use the new field notation format:

### Sort Field Syntax
**Before:**
```javascript
sort: { order: DESC, fields: [frontmatter___date] }
```

**After:**
```javascript
sort: { frontmatter: { date: DESC } }
```

### Group Field Syntax
**Before:**
```javascript
group(field: frontmatter___tags)
```

**After:**
```javascript
group(field: {frontmatter: {tags: SELECT}})
```

Files updated include:
- gatsby-config.js
- gatsby/pagination/create-categories-pages.js
- gatsby/pagination/create-tags-pages.js
- Templates in src/templates/* (category-template.js, index-template.js, tag-template.js, etc.)

## 4. Flow Type System Updates

### Flow Import Syntax
Updated the way Flow types are imported across the codebase to match newer Flow versions:

**Before:**
```javascript
import { Entry, WidgetFor } from '../../types';
// Later used as types
```

**After:**
```javascript
import type { Entry, WidgetFor } from '../../types';
// Or in some cases:
import { type Entry, type WidgetFor } from '../../types';
```

### Return Type Annotations
Added explicit return type annotations to utility functions:

**Before:**
```javascript
const getContactHref = (name: string, contact: string) => {
  // Function implementation
}
```

**After:**
```javascript
const getContactHref = (name: string, contact: string): string => {
  // Function implementation
}
```

### Babel Configuration
Created a new `.babelrc` file to properly strip Flow types during build:
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-optional-chaining",
    ["@babel/plugin-transform-flow-strip-types", { "all": true }]
  ]
}
```

## 5. CSS Module Compatibility Fixes

### CSS Module Export Declarations
Created two utility scripts to update all SCSS module files:
- `scripts/update-css-modules/fix-all-scss-modules.js`: Adds CSS class exports to all SCSS module files
- `scripts/update-css-modules/update-module-files.js`: Updates module files with proper exports

Added `:export` declarations to each SCSS module file to explicitly export CSS classes:
```scss
// Example of added exports
:export {
  className: className;
  nested__element: nested__element;
}
```

### CSS Module Import Changes
Changed the way CSS modules are imported in components:

**Before:**
```javascript
import styles from './Component.module.scss';
// Used as: className={styles.componentName}
```

**After:**
```javascript
import * as styles from './Component.module.scss';
// Used as: className={styles['componentName']}
```

This change ensures compatibility with the newer CSS modules implementation in Gatsby v5, which requires namespace imports.

## 6. Configuration Changes

### Gatsby Configuration
- Updated `gatsby-config.js` to use the latest plugin versions
- Modified plugin configurations for compatibility:
  - Updated `gatsby-remark-relative-images` configuration
  - Added explicit options for SCSS module support

### Google Analytics
- Updated Google Analytics configuration in `config.js`
- Commented out development-specific configuration group

## 7. Development Environment Setup

Created a `CLAUDE.md` file with development commands and code style guidelines:

```markdown
# Development Commands
## Build & Development
- `yarn build` - Clean cache and build site
- `yarn develop` - Start development server

## Testing
- `yarn test` - Run all tests
- `yarn test:watch` - Run tests in watch mode
- `yarn test ${filename}` - Run specific test file

## Linting & Type Checking
- `yarn lint` - Run all linting
- `yarn lint:js` - Lint JavaScript
- `yarn lint:scss` - Lint SCSS
- `yarn flow` - Type checking

# Code Style Guidelines
- **JavaScript**: Follow Airbnb style guide
- **Types**: Use Flow for static typing
- **Imports**: Group imports (React, third-party, local)
- **Components**: Use functional components with hooks
- **Naming**: CamelCase for variables, PascalCase for components
- **CSS**: Use CSS modules with SCSS
- **Testing**: Jest snapshots for component testing
- **Error Handling**: Use try/catch with descriptive error messages
```

## 8. Known Issues

- Some non-critical CSS and Sass deprecation warnings may still appear during build but don't affect functionality
- The site has been tested to build successfully but thorough testing of all features is recommended

## 9. Future Improvements

- Consider upgrading to TypeScript instead of Flow for better type checking and ecosystem support
- Optimize image loading and processing for better performance
- Add automated testing workflow via GitHub Actions
- Consider replacing deprecated packages with more modern alternatives

## 10. Testing

After implementing all changes, the site successfully builds and runs with `yarn develop`. All pages load correctly with styling intact, and content renders as expected.