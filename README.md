# boetro.com

Welcome to the repository for my personal blog site, [boetro.com](https://boetro.com). This project is built using Next.js and is deployed on Cloudflare Pages. The blog features MDX for content, Tailwind CSS for styling, and various other modern web development tools and libraries.

## Table of Contents

- [Installation](#installation)
- [Running Locally](#running-locally)
- [Building for Production](#building-for-production)
- [Deploying to Cloudflare Pages](#deploying-to-cloudflare-pages)
- [License](#license)

## Installation

First, clone the repository and navigate into the project directory:

```bash
git clone https://github.com/yourusername/boetro.com.git
cd boetro.com
```

Then, install the dependencies using npm:

```bash
npm install
```

## Running Locally

To run the project locally, use the following command:

```bash
npm run dev
```

This will start the development server, and you can view the site at `http://localhost:3000`.

## Building for Production

To build the project for production, use the following command:

```bash
npm run build
```

This will create an optimized production build of the site.

## Deploying to Cloudflare Pages

To deploy the site to Cloudflare Pages, you can use the following commands:

1. **Preview Deployment:**

   ```bash
   npm run preview
   ```

   This command will build the project and start a local preview of the Cloudflare Pages deployment.

2. **Production Deployment:**

   ```bash
   npm run deploy
   ```

   This command will build the project and deploy it to Cloudflare Pages.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
