# Changelog

This document provides a comprehensive history of changes made to the personal blog site since forking the Lumen Gatsby starter template.

## Major Version Updates

### March 2025 - Modernization and Compatibility Update

- **Gatsby Version Upgrade**: Updated from Gatsby v2/v3 to Gatsby v5.12.12
- **Node.js Environment Update**: Upgraded to Node.js v20+ (from Node.js v12/v14)
- **CSS Module System Fixes**: Fixed compatibility issues with CSS modules in newer Gatsby versions
- **Sass Modernization**: Migrated from legacy Sass syntax to modern module system
- **Image API Migration**: Replaced deprecated gatsby-image with modern gatsby-plugin-image
- **Build System Updates**: Fixed numerous build and development environment issues

### Mid-2023 - Infrastructure and Platform Compatibility

- **Deployment Platform Support**: Added Vercel configuration alongside Netlify
- **CMS Updates**: Updated Netlify CMS configuration for cross-platform compatibility
- **Dependency Management**: Added Dependabot configuration for automated dependency updates

### 2022-2023 - Security and Maintenance

- **Security Patches**: Applied numerous security updates to dependencies
- **Performance Improvements**: Updated core packages for better loading performance
- **DevOps Improvements**: Streamlined build process and development workflow

## Technical Improvements

### CSS and Styling System

- **Module System Overhaul** (March 2025):
  - Fixed CSS module class name references in components
  - Updated component imports to use proper module syntax
  - Added explicit class exports to all SCSS module files
  - Resolved namespace conflicts in CSS modules

- **Sass Modernization** (March 2025):
  - Replaced deprecated `@import` with modern `@use`/`@forward` syntax
  - Updated color functions to use modern Sass color module
  - Fixed variable scope issues in Sass files
  - Added proper namespacing for imported Sass modules

### Code Structure and Type System

- **Flow Type System Updates** (March 2025):
  - Updated Flow type import syntax across the codebase
  - Added explicit return type annotations to utility functions
  - Updated Babel configuration for proper Flow type stripping
  - Fixed Flow errors in component definitions

- **GraphQL Query Updates** (March 2025):
  - Updated all GraphQL queries to use new field notation format
  - Fixed sort and filter syntax in queries
  - Updated pagination logic to match new GraphQL API

### Build and Development Environment

- **Documentation Improvements** (March 2025):
  - Created CLAUDE.md with development commands and code style guidelines
  - Updated README.md with modern tech stack information
  - Added detailed MIGRATION.md document
  - Preserved original Lumen documentation for reference

- **CI/CD and Deployment** (2023):
  - Added Vercel configuration with security headers
  - Updated Netlify build settings
  - Created consistent deployment workflow between platforms

## Content and Feature Updates

### Features and Functionality

- **SEO Improvements** (2022-2023):
  - Added canonical link plugin
  - Implemented proper sitemap generation
  - Enhanced meta tags for better social sharing

- **Media Handling** (2022):
  - Integrated better image optimization
  - Added Twitter embed support
  - Improved responsive image handling

### Content Management

- **Content Organization** (2022):
  - Removed template/example blog posts
  - Updated About and Contacts pages
  - Added redirects for improved URL structure

- **Authoring Experience** (2022):
  - Streamlined content publishing workflow
  - Enhanced markdown rendering capabilities
  - Improved code block and syntax highlighting

## UI and Design

- **Design Refinements** (2022):
  - Updated brand colors
  - Improved typography and readability
  - Enhanced responsive design behavior

- **User Experience** (2022):
  - Temporarily disabled sidebar menu for cleaner reading experience
  - Updated author photo and presentation
  - Improved social sharing preview images

## Dependency Updates

- **Core Framework Updates**:
  - React updated to v18.2.0
  - Gatsby updated to v5.12.12
  - Replaced node-sass with modern sass implementation

- **Development Dependencies**:
  - Updated ESLint and related plugins
  - Updated testing frameworks
  - Updated build tooling

- **Security Updates**:
  - Applied over 200 dependency updates addressing security vulnerabilities and performance issues
  - Maintained regular update schedule through Dependabot

## Known Issues and Future Work

- Some non-critical CSS and Sass deprecation warnings persist but don't affect functionality
- TypeScript migration could provide better type safety than current Flow implementation
- Automated testing workflow could be improved with GitHub Actions

---

## Original Template Changelog

Below is the changelog from the original Lumen Gatsby starter template.

### [3.0.3] - 2019-07-25
#### Added
- [Pull #321](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/321): Add title to <Icon /> for accessibility
- [Pull #319](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/319): Fixed invalid Telegram contact url
- [Pull #314](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/314): Hides the contact icon if empty in config
- [Pull #295](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/295): Add external link defaults for markdown
- [Pull #283](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/283): Add pathPrefix configuration
- [Pull #231](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/231): Add Twitter Card
- [Pull #210](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/210): Bug fixes
- [Pull #181](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/181): Add More Flow typings
- [Pull #178](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/178): Integrate Flow typing

### [3.0.1] - 2019-03-03
#### Added
- [Pull #118](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/118): feat: add gatsby-remark-autolink-headers support
- [Pull #99](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/99): Add lang="en" to <html>
- [Pull #95](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/95): Fixed url prop bug for <ReactDisqusComments />
- [Pull #94](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/94): Add isIndex prop to Sidebar in index-template
- [Pull #93](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/93): Upgrade React version to 16.8.1
- [Pull #89](https://github.com/alxshelepenok/gatsby-starter-lumen/pull/89): Removed .gatsby-highlight selectors 

### [3.0.0] - 2019-01-22
- Heavy refactoring
- Netlify CMS support
- Pagination support
- Reorganize content

---

*This changelog documents major changes and may not include every minor update or dependency bump.*

🤖 Generated with [Claude Code](https://claude.ai/code)
Co-Authored-By: Claude <noreply@anthropic.com>
