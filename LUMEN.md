# Lumen Gatsby Theme

<p align="center">
  <img alt="Lumen" title="Lumen" src="https://github.com/alxshelepenok/gatsby-starter-lumen/blob/gatsby-v2/.github/logo.png" width="140">
</p>

A minimal, lightweight and mobile-first Gatsby starter for creating blogs. This site is based on the [Lumen](https://github.com/alxshelepenok/gatsby-starter-lumen) Gatsby starter, and has been updated to use Gatsby v5.

## Features

- **Modern Stack**: Built with Gatsby v5, React 18, and modern JavaScript
- **Mobile-First**: Responsive design that works great on all devices
- **Typography**: Beautiful typography inspired by [matejlatin/Gutenberg](https://github.com/matejlatin/Gutenberg)
- **Syntax Highlighting**: Code blocks enhanced with PrismJS
- **Content Organization**: Archive organized by tags and categories with pagination
- **CMS Integration**: Netlify CMS for content management
- **Analytics**: Google Analytics integration
- **Comments**: Disqus for post comments
- **Static Type Checking**: Flow for type safety
- **Deployment Ready**: Configured for Netlify and Vercel deployment

## Development

### Requirements
- Node.js >= 20.0.0
- Yarn or npm

### Setup
```bash
# Install dependencies
yarn

# Start development server
yarn develop
```

The site will be available at `http://localhost:8000`. The GraphQL playground can be accessed at `http://localhost:8000/___graphql`.

### Build
```bash
# Create a production build
yarn build

# Serve the production build locally
gatsby serve
```

### Testing and Code Quality
```bash
# Run tests
yarn test

# Run linters
yarn lint
```

## Deployment

### Netlify
The site is ready to deploy on Netlify with the included `netlify.toml` configuration.

### Vercel
For Vercel deployment, use the included `vercel.json` configuration.

### GitHub Pages
To deploy to GitHub Pages:
1. Update `pathPrefix` in `config.js` with your repository name
2. Run `yarn deploy`

## Folder Structure

```
└── content            # Blog posts and pages
    ├── pages          # Static pages
    └── posts          # Blog posts
└── static             # Static assets
    ├── admin          # Netlify CMS config
    └── media          # Images and media files
└── src                # Source code
    ├── assets         # Stylesheets and assets
    ├── components     # React components
    ├── templates      # Page templates
    ├── utils          # Utility functions
    └── cms            # CMS configuration
```

## Credits

This starter is based on [Lumen](https://github.com/alxshelepenok/gatsby-starter-lumen), created by Alexander Shelepenok.

## License
The MIT License (MIT)