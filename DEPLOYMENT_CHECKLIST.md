# LeadAnchor Mock GUI — Deployment Checklist

## Pre-deploy
- [x] HashRouter confirmed in main.jsx (implemented in App.jsx routing)
- [x] base: './' in vite.config.js
- [x] vercel.json created with rewrite rule
- [x] npm run build passes with zero errors
- [x] npx serve dist tested locally

## Deploy
- [ ] GitHub repo created and pushed
- [ ] Vercel project linked to repo
- [ ] Build settings confirmed (Vite / dist)
- [ ] Production URL live and shared with team

## Post-deploy verification
- [ ] Home screen loads
- [ ] All bottom nav tabs navigate correctly
- [ ] Demo Mode path completes end-to-end
- [ ] Loads correctly on iPhone Safari (375px)
- [ ] Loads correctly on Android Chrome (360px)
- [ ] Loads correctly on desktop Chrome (1280px)

## Share with team
Production URL: ______________________________
Demo Mode note: Tap the floating "Demo Mode" chip
               to walk through the investor path.
Feedback form:  ______________________________
