# Levi's Portfolio

A responsive personal portfolio built with React and Vite. The site gives visitors
a place to learn about my background, education, services, projects, and ways to
get in touch.

## Features

- Responsive, easy-to-navigate layout
- Home, About, Education, Projects, Services, and Contact pages
- Client-side navigation with React Router
- Portfolio content and project work presented in a clean, professional UI

## Tech Stack

- React 19
- React Router
- Vite
- JavaScript, HTML, and CSS

## Run Locally

From the `client` directory:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run lint     # Check the project with ESLint
npm run build    # Create a production build
npm run preview  # Preview the production build locally
```

## Deployment

This project is configured for Vercel. Set the project root to the directory
containing `package.json`. Vercel will use `npm run build` as the build command
and `dist` as the output directory from `vercel.json`.

The project also includes the equivalent Netlify configuration in
`netlify.toml`.