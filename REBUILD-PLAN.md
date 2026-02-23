# Complete Website Rebuild Plan
## Noushin Bagherzadeh Sculpture Portfolio

**Date:** 2026-02-23  
**Status:** Planning Phase  
**Current Progress:** 2/6 pages complete (Homepage + Biographie)

---

## 📋 Site Inventory

### ✅ Completed Pages (2/6)
1. **Homepage (Accueil)** - `new-index.html`
   - Fullscreen swipe slideshow (3 images)
   - Auto-rotation every 4 seconds
   - Touch/mouse swipe navigation
   - Clean, minimal design

2. **Biography (À propos)** - `biographie.html`
   - High-res banner image
   - Two-column layout (Formation/Expositions)
   - 13 exhibition links (all working)
   - Responsive mobile design

### 🔨 Pages To Build (4/6)

3. **Exterior Gallery (Extérieure)** - `exterieur.html`
   - Photo count: ~15-20 outdoor sculpture images
   - Layout: Masonry grid gallery
   - Features: Lightbox viewer, lazy loading
   - Images to download: ~10-15MB total

4. **Interior Gallery (Intérieur)** - `interieur.html`
   - Photo count: ~36 indoor sculpture images
   - Layout: Same masonry grid as exterior
   - Features: Lightbox viewer, lazy loading
   - Images to download: ~15-20MB total

5. **Events (Événements)** - `evenements.html`
   - Sections: "Ongoing" and "Incoming" events
   - Current event: Féminin Pluriel (Nov 2025)
   - Layout: Event cards with date/location/details
   - Clean typography, easy to update

6. **Contact** - `contact.html`
   - Email: info@noushinbagherzadeh.be
   - Instagram: @noushinbagherzadeh
   - Optional: Simple contact form
   - Clean, minimal layout

---

## 🎯 Improvements Over Original

### Performance
- **Original:** 1-2MB page weight, 5-10s load time
- **Rebuild:** 50-200KB HTML/CSS/JS, <1s load time
- **Images:** Optimized WebP format where possible
- **No dependencies:** Zero WordPress plugins, zero database queries

### Code Quality
- **Original:** 500+ lines of nested Visual Composer shortcodes
- **Rebuild:** Clean semantic HTML5, modern CSS Grid/Flexbox
- **Maintainable:** Easy to update, no proprietary builder syntax
- **Accessible:** Proper ARIA labels, keyboard navigation

### Mobile Experience
- **Original:** Breaks layout on small screens, slow touch response
- **Rebuild:** Mobile-first responsive design, 60fps swipe gestures
- **Header:** Optimized spacing (35px padding vs cramped original)
- **Typography:** Scaled perfectly for all screen sizes

### Gallery Features (New!)
- **Lightbox:** Click to enlarge with smooth transitions
- **Lazy Loading:** Images load as you scroll (faster initial load)
- **Keyboard Navigation:** Arrow keys to browse
- **Swipe Gestures:** Native mobile photo browsing

---

## ⏱️ Time Estimate

### Development Breakdown
- **Exterior Gallery:** 45 minutes
  - Download 15-20 images (10 min)
  - Build masonry grid layout (15 min)
  - Implement lightbox viewer (15 min)
  - Test + optimize (5 min)

- **Interior Gallery:** 60 minutes
  - Download 36 images (15 min)
  - Build masonry grid layout (15 min)
  - Implement lightbox viewer (15 min)
  - Test + optimize (15 min)

- **Events Page:** 30 minutes
  - Extract event data (5 min)
  - Build event cards layout (15 min)
  - Make it easy to update (5 min)
  - Test responsive (5 min)

- **Contact Page:** 20 minutes
  - Simple layout with email/social (10 min)
  - Optional contact form (10 min)

- **Final Polish:** 25 minutes
  - Cross-browser testing (10 min)
  - Mobile device testing (10 min)
  - Final tweaks (5 min)

**Total Development Time:** ~3 hours

---

## 💰 Cost Estimate (API Tokens)

### Token Breakdown by Task

**Image Downloads:**
- Fetch gallery image URLs: ~5k tokens
- Download 50+ images via curl: 0 tokens (direct HTTP)
- Total: 5,000 tokens

**Gallery Pages (2x):**
- HTML generation: 15k tokens per page
- CSS for masonry + lightbox: 10k tokens (shared)
- JavaScript for lightbox: 8k tokens (shared)
- Testing/debugging: 5k tokens per page
- Total: 48,000 tokens

**Events Page:**
- HTML generation: 10k tokens
- Extract event data: 3k tokens
- CSS styling: 3k tokens
- Total: 16,000 tokens

**Contact Page:**
- HTML generation: 8k tokens
- Form implementation (optional): 5k tokens
- CSS styling: 2k tokens
- Total: 15,000 tokens

**Final Testing & Polish:**
- Cross-browser testing: 5k tokens
- Mobile testing: 5k tokens
- Final tweaks: 5k tokens
- Total: 15,000 tokens

**Grand Total: ~99,000 tokens (~$0.30 USD at Claude Sonnet 4.5 rates)**

*Note: This is conservative - actual usage may be lower if we use cached responses and efficient prompting.*

---

## 📦 Deliverables

### File Structure
```
noushin-rebuild/
├── new-index.html          ✅ (homepage)
├── biographie.html         ✅ (about page)
├── exterieur.html          🔨 (outdoor gallery)
├── interieur.html          🔨 (indoor gallery)
├── evenements.html         🔨 (events)
├── contact.html            🔨 (contact)
├── assets/
│   ├── css/
│   │   └── style.css       ✅ (shared styles)
│   ├── js/
│   │   ├── main.js         ✅ (navigation + slideshow)
│   │   └── lightbox.js     🔨 (gallery viewer)
│   └── img/
│       ├── slideshow/      ✅ (3 homepage images)
│       ├── bio/            ✅ (biography banner)
│       ├── exterior/       🔨 (15-20 outdoor photos)
│       └── interior/       🔨 (36 indoor photos)
└── README.md               ✅ (documentation)
```

### Quality Checklist
- [ ] All pages mobile-responsive
- [ ] Header consistent across all pages
- [ ] Gallery lightbox working smoothly
- [ ] All links functional
- [ ] Images optimized (WebP where possible)
- [ ] Lazy loading implemented
- [ ] Cross-browser tested (Chrome, Safari, Firefox)
- [ ] Touch gestures work on mobile
- [ ] Accessibility: keyboard navigation + ARIA labels
- [ ] Load time <2s on 4G connection

---

## 🚀 Execution Plan

### Phase 1: Galleries (90 min)
1. Download all images from original site
2. Build shared lightbox component
3. Create exterieur.html with masonry grid
4. Create interieur.html with masonry grid
5. Test gallery navigation and performance

### Phase 2: Info Pages (50 min)
6. Build evenements.html with event cards
7. Build contact.html with email/social
8. Test all navigation links

### Phase 3: Polish (25 min)
9. Cross-browser testing
10. Mobile device testing
11. Final optimizations

### Total: ~3 hours of focused work

---

## ✅ Approval Required

**Kian, please confirm:**
1. **Scope:** Build all 4 remaining pages (galleries, events, contact)
2. **Timeline:** ~3 hours of development time
3. **Cost:** ~99,000 tokens (~$0.30 USD)
4. **Features:** Lightbox galleries, lazy loading, responsive design
5. **Optional:** Add contact form? (adds 15 min + 5k tokens)

**Ready to proceed when you give the green light.**

---

*Generated: 2026-02-23 17:18 GMT+8*
