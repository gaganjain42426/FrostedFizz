## 🚀 Quick Start Commands

### First Time Setup
```bash
cd "c:\Users\dell\Documents\Frosted Fizz Website"
npm install
```

### Start Development Server
```bash
npm run dev
```
**Then open:** http://localhost:3000

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📋 Pre-Deployment Checklist

Before deploying to production, make sure to:

- [ ] Update WhatsApp number in `src/components/FloatingActionButton.jsx`
- [ ] Connect contact form to your backend/email service
- [ ] Add your favicon to `public` folder
- [ ] Update meta tags in `index.html` for SEO
- [ ] Test all pages on mobile devices
- [ ] Test all links and navigation
- [ ] Test contact form submission
- [ ] Optimize images if needed
- [ ] Set up analytics (Google Analytics, etc.)

---

## 🌐 Deployment Options

### Vercel (Recommended - Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Netlify (Free)
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy`
3. Follow prompts

### GitHub Pages
1. Install gh-pages: `npm i -gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/frosted-fizz",
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

---

## 🔧 Common Tasks

### Add a New Page
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
   ```jsx
   <Route path="/newpage" element={<NewPage />} />
   ```
3. Add link in `src/components/Header.jsx`

### Update Colors
Edit `tailwind.config.js` → `theme.extend.colors`

### Add New Menu Item
Edit `src/pages/Menu.jsx` → `menuItems` array

### Modify Contact Form
Edit `src/pages/EventInquiry.jsx` → `handleSubmit` function

---

## 📞 Support

For questions or help, refer to:
- README.md - Full documentation
- PROJECT_SUMMARY.md - Complete project overview
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
