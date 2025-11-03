# Frosted Fizz Website

A modern, responsive React website for Frosted Fizz - Event Catering service specializing in desserts and beverages for events.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for fast development and optimal performance
- **Responsive Design**: Fully responsive design that works on all devices
- **Dark Mode Support**: Built-in dark mode capability
- **Beautiful UI**: Styled with Tailwind CSS with custom color palette and animations
- **Multiple Pages**:
  - Home - Hero section with floating animations, services showcase, and statistics
  - About - Company journey, founder spotlight, and promises
  - Menu - Interactive grid of dessert and beverage offerings
  - Services - Event types, how it works, and event galleries
  - Gallery - Photo gallery with hover effects and client testimonials
  - Event Inquiry - Contact form for event bookings

## 🛠️ Technologies Used

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Poppins and Nunito fonts
- **Material Symbols** - Icon library

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

## 📁 Project Structure

```
frosted-fizz-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingActionButton.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── EventServices.jsx
│   │   ├── Gallery.jsx
│   │   └── EventInquiry.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Color Palette

- Primary: `#FF6AA6` (Pink)
- Secondary: `#66D6FF` (Blue)
- Accent: `#FF9ECC` (Light Pink)
- Navy: `#071740` (Dark Blue)
- Background Light: `#f8f5f7`
- Background Dark: `#230f17`

## 🔧 Customization

### Updating Colors
Edit `tailwind.config.js` to change the color scheme.

### Adding New Pages
1. Create a new component in `src/pages/`
2. Import and add a route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

### Modifying Fonts
Update the Google Fonts links in `index.html` and the font family in `tailwind.config.js`.

## 📱 WhatsApp Integration

The floating action button connects to WhatsApp. Update the phone number in:
```jsx
// src/components/FloatingActionButton.jsx
href="https://wa.me/910000000000"  // Change this number
```

## 🌐 Pages Overview

- **/** - Home page with hero, services, and statistics
- **/about** - Company story and team
- **/menu** - Menu items with images
- **/services** - Event services and how it works
- **/gallery** - Photo gallery and testimonials
- **/inquiry** - Event inquiry form

## 📄 License

© 2024 Frosted Fizz. All rights reserved.

## 🤝 Contributing

This is a client project. For any changes or improvements, please contact the development team.

## 📞 Support

For any queries regarding the website, please reach out via the contact form on the website or through WhatsApp.
