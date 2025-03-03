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