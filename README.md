# LeadAnchor — Stage 1 Mock GUI

This is the interactive prototype for LeadAnchor, built with React, Vite, and Tailwind CSS.
It is a purely frontend, static web app with zero backend and no database.

## Features
- **Mobile First**: Designed for a 375px viewport, scaling up to 1024px.
- **Design System**: Fully implemented tokens (Navy, Emerald, Amber, Red).
- **Navigation**: Uses Hash Router so it can be deployed statically anywhere.
- **Demo Mode**: A floating bottom-right chip that walks you through the core investor demo path.

## Local Development
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Open `http://localhost:5173`

## Deployment to Vercel (Free Tier)
Since this uses Vite and React Router with Hash Routing, it is extremely easy to deploy.

### Option 1: Vercel CLI (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Login to Vercel: `vercel login`
3. Run the following command in the project root:
   ```bash
   vercel --prod
   ```
4. Follow the prompts. It will automatically detect the Vite setup and deploy.

### Option 2: GitHub Integration
1. Push this code to a new GitHub repository.
2. Go to your [Vercel Dashboard](https://vercel.com/new).
3. Import your GitHub repository.
4. Leave all settings as default (Framework Preset: Vite).
5. Click **Deploy**.

### Option 3: Drag and Drop
1. Run `npm run build` locally. This creates a `dist` folder.
2. Go to your [Vercel Dashboard](https://vercel.com/new).
3. Drag the `dist` folder directly into the designated area.
4. It will immediately deploy a static site.
