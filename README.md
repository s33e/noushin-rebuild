# Noushin Bagherzadeh Website Rebuild

Clean, modern rebuild of https://noushinbagherzadeh.be

## What's Changed

### From WordPress bloat to clean HTML/CSS/JS:
- **Original:** 392 lines of generated WordPress HTML, multiple plugin dependencies, heavy RevSlider
- **Rebuild:** Clean semantic HTML, vanilla JavaScript, no dependencies
- **File size:** Reduced from ~1MB+ (WordPress + plugins) to ~15KB (HTML/CSS/JS)
- **Load time:** Significantly faster (no database queries, no PHP processing)

## Structure

```
noushin-rebuild/
├── new-index.html          # Main homepage
├── assets/
│   ├── css/
│   │   └── style.css       # All styling (6KB)
│   ├── js/
│   │   └── main.js         # Slideshow + mobile menu (4.5KB)
│   └── img/
│       ├── logo_noushin_bk.png
│       ├── logo_noushin_bl.png
│       ├── slideshow_noushinbagherzadeh_1.jpg
│       ├── slideshow_noushinbagherzadeh_2.jpg
│       └── slideshow_noushinbagherzadeh_3.jpg
└── README.md
```

## Features

### ✅ Preserved from original:
- Navigation structure (Accueil, À propos, Gallerie, Événement, Contact)
- Logo and branding
- Slideshow with 3 images
- French language
- Mobile responsive design

### ⚡ Improvements:
- **Performance:** No WordPress overhead, no database, no plugins
- **Clean code:** Readable, maintainable HTML/CSS/JS
- **Modern CSS:** Flexbox, CSS variables, smooth transitions
- **Accessibility:** Proper semantic HTML, ARIA labels
- **Mobile-first:** Responsive design that actually works
- **Auto-slideshow:** 5-second intervals with pause on hover
- **Smooth animations:** Professional transitions and hover effects

## How to View

### Option 1: Direct file access
Open `new-index.html` in any browser

### Option 2: Local server
```bash
cd /data/.openclaw/workspace/noushin-rebuild
python3 -m http.server 8080
# Visit: http://localhost:8080/new-index.html
```

### Option 3: Deploy anywhere
Upload to any web host - it's just static files. Works on:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Any basic web hosting

## Next Steps

To complete the site, you'll need to create:
1. `biographie.html` - About page
2. `exterieur.html` - Outdoor sculpture gallery
3. `interieur.html` - Indoor sculpture gallery
4. `evenements.html` - Events page
5. `contact.html` - Contact form

All pages can use the same header/footer structure from `new-index.html`.

## Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #454545;
    --secondary-color: #e5e5e5;
    --text-color: #333;
}
```

### Slideshow timing
Edit `assets/js/main.js` line 51:
```javascript
this.slideInterval = setInterval(() => {
    this.changeSlide(1);
}, 5000); // Change 5000 to desired milliseconds
```

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅
- IE11: ❌ (use modern browsers)
