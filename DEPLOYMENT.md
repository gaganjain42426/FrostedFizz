# 🚀 Deployment Guide - Frosted Fizz Website

## Quick Deploy Options

### Option 1: Vercel (Recommended) ⭐
**Why Vercel?**
- Free hosting for React apps
- Automatic HTTPS
- Global CDN
- GitHub integration
- Zero configuration needed

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy" (Vercel auto-detects Vite)
7. Done! Your site is live

**Build Settings (Auto-detected):**
```
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

---

### Option 2: Netlify
**Steps:**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub
5. Select repository
6. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Deploy!

---

### Option 3: GitHub Pages
**Steps:**
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/frosted-fizz",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/frosted-fizz/', // Your repo name
     server: {
       port: 3000,
       open: true
     }
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Go to repo Settings → Pages
   - Source: gh-pages branch
   - Save

---

## Pre-Deployment Checklist ✅

### 1. Update Contact Information
- [ ] WhatsApp number in `src/components/FloatingActionButton.jsx`
- [ ] Social media links in `src/components/Footer.jsx`
- [ ] Contact form backend/email service

### 2. SEO & Meta Tags
Edit `index.html`:
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Update these -->
  <title>Frosted Fizz - Premium Event Catering in Jaipur</title>
  <meta name="description" content="Frosted Fizz offers premium dessert and beverage catering for weddings, birthdays, and corporate events in Jaipur. Book your event today!" />
  <meta name="keywords" content="event catering, dessert catering, jaipur, wedding catering, birthday party" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourdomain.com/" />
  <meta property="og:title" content="Frosted Fizz - Premium Event Catering" />
  <meta property="og:description" content="Premium dessert and beverage catering for your special events" />
  <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://yourdomain.com/" />
  <meta property="twitter:title" content="Frosted Fizz - Premium Event Catering" />
  <meta property="twitter:description" content="Premium dessert and beverage catering for your special events" />
  <meta property="twitter:image" content="https://yourdomain.com/og-image.jpg" />
</head>
```

### 3. Add Favicon
1. Create favicons at [favicon.io](https://favicon.io)
2. Place in `public/` folder
3. Update `index.html`:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

### 4. Analytics (Optional)
Add Google Analytics to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 5. Environment Variables
Create `.env` file for API keys:
```env
VITE_WHATSAPP_NUMBER=+919876543210
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

Update code to use env vars:
```javascript
// In FloatingActionButton.jsx
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '910000000000'
```

### 6. Performance Optimization
Already optimized! But you can:
- Compress images (use [tinypng.com](https://tinypng.com))
- Add lazy loading for images
- Enable React production mode (automatic in build)

### 7. Test Build Locally
```bash
npm run build
npm run preview
```
Visit http://localhost:4173 to test production build

---

## Domain Setup

### Custom Domain on Vercel
1. Go to project settings
2. Click "Domains"
3. Add your domain (e.g., frostedfizz.com)
4. Update DNS records:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Custom Domain on Netlify
1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Follow DNS instructions

---

## Post-Deployment

### Test Everything
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images load
- [ ] Forms submit
- [ ] WhatsApp button works
- [ ] Mobile responsive
- [ ] Dark mode (if enabled)

### Monitor
- Set up uptime monitoring (UptimeRobot)
- Check Google Search Console
- Monitor analytics

### Backup
- Keep GitHub repo as backup
- Document any custom changes
- Save build artifacts

---

## Updating Your Site

### Make Changes
```bash
# 1. Make your changes
# 2. Test locally
npm run dev

# 3. Build
npm run build

# 4. Push to GitHub
git add .
git commit -m "Update content"
git push
```

### Auto-Deploy
- Vercel/Netlify will auto-deploy on push to main branch
- No manual deployment needed!

---

## Troubleshooting

### Build Fails
- Check `npm run build` output
- Ensure all dependencies installed
- Check for TypeScript/ESLint errors

### Images Not Loading
- Verify image URLs are correct
- Check CORS settings
- Ensure images are accessible

### Blank Page After Deploy
- Check browser console for errors
- Verify base URL in vite.config.js
- Check routing configuration

### Form Not Working
- Add form backend (EmailJS, Formspree, or custom API)
- Check CORS settings
- Verify environment variables

---

## Form Backend Options

### Option 1: EmailJS (Easiest)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Update EventInquiry.jsx:
```javascript
import emailjs from '@emailjs/browser'

const handleSubmit = (e) => {
  e.preventDefault()
  emailjs.send('service_id', 'template_id', formData, 'public_key')
    .then(() => alert('Message sent!'))
    .catch((err) => console.error(err))
}
```

### Option 2: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Get form endpoint
3. Update form action:
```html
<form action="https://formspree.io/f/your-id" method="POST">
```

### Option 3: Custom API
Build your own backend with Node.js/Express

---

## Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **React Docs:** https://react.dev
- **Vite Docs:** https://vitejs.dev

---

## Your Site URLs After Deployment

- **Vercel:** https://frosted-fizz.vercel.app
- **Netlify:** https://frosted-fizz.netlify.app
- **Custom Domain:** https://www.frostedfizz.com

---

🎉 **Ready to deploy? Pick an option above and your site will be live in minutes!**
