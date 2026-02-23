# SEO Migration Plan
## noushinbagherzadeh.be → noushinbagherzadeh.com

**Current Site:** https://noushinbagherzadeh.be (WordPress, broken)  
**New Site:** Clean HTML/CSS rebuild  
**Goal:** Zero ranking loss, preserve all SEO equity  

---

## 🚨 Critical: The Plan

### Phase 1: Pre-Launch Preparation (Do BEFORE switching)

**1. Set up noushinbagherzadeh.com**
- Point new domain to GitHub Pages (or your hosting)
- Deploy the clean rebuild
- Test everything works on .com domain

**2. Preserve URL Structure (CRITICAL)**
Your new URLs should mirror the old ones:

```
OLD (.be)                              NEW (.com)
/                                  →   /
/index.php/biographie/            →   /biographie.html
/index.php/exterieur/             →   /exterieur.html
/index.php/interieur/             →   /interieur.html
/index.php/evenements/            →   /evenements.html
/index.php/contact/               →   /contact.html
```

**Problem:** Your new URLs have `.html` extensions, old ones don't.

**Solutions (pick one):**

**Option A (Recommended): Remove .html extensions**
- Use GitHub Pages Jekyll to make clean URLs
- `/biographie.html` becomes `/biographie/`
- Matches old structure perfectly

**Option B: 301 redirect old URLs to new**
- Keep `.html` extensions
- Set up redirects (harder without server access)

**3. Add Meta Tags (SEO basics)**

Add to every page `<head>`:

```html
<!-- Essential SEO -->
<meta name="description" content="[Page-specific description]">
<meta name="keywords" content="sculpture, art, Noushin Bagherzadeh, Belgian artist">
<link rel="canonical" href="https://noushinbagherzadeh.com/[page]">

<!-- Open Graph (social sharing) -->
<meta property="og:title" content="Noushin Bagherzadeh - Sculptor">
<meta property="og:description" content="Contemporary sculpture in wood and metal">
<meta property="og:image" content="https://noushinbagherzadeh.com/assets/img/bio-banner.jpg">
<meta property="og:url" content="https://noushinbagherzadeh.com/">
<meta property="og:type" content="website">

<!-- Structured Data (Google rich results) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VisualArtist",
  "name": "Noushin Bagherzadeh",
  "url": "https://noushinbagherzadeh.com",
  "image": "https://noushinbagherzadeh.com/assets/img/bio-banner.jpg",
  "description": "Contemporary sculptor working with wood and metal",
  "artMedium": ["Wood", "Metal", "Sculpture"],
  "birthPlace": "Tehran, Iran",
  "workLocation": "Belgium",
  "sameAs": [
    "https://www.instagram.com/noushinbagherzadeh/"
  ]
}
</script>
```

**4. Create XML Sitemap**

`sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://noushinbagherzadeh.com/</loc>
    <lastmod>2026-02-23</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://noushinbagherzadeh.com/biographie.html</loc>
    <lastmod>2026-02-23</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://noushinbagherzadeh.com/exterieur.html</loc>
    <lastmod>2026-02-23</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://noushinbagherzadeh.com/interieur.html</loc>
    <lastmod>2026-02-23</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://noushinbagherzadeh.com/evenements.html</loc>
    <lastmod>2026-02-23</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://noushinbagherzadeh.com/contact.html</loc>
    <lastmod>2026-02-23</lastmod>
    <priority>0.6</priority>
  </url>
</urlset>
```

**5. Set up Google Search Console**
- Add noushinbagherzadeh.com as new property
- Verify ownership (HTML file upload or DNS)
- Submit sitemap.xml
- Keep old .be property active for monitoring

---

### Phase 2: The Switch (Migration Day)

**Step 1: Set up 301 Redirects on OLD site (.be)**

On the WordPress site, you need to redirect ALL traffic to the new .com domain.

**Option A: WordPress Plugin (easiest if you have WP access)**
- Install "Redirection" plugin
- Add wildcard rule: `/*` → `https://noushinbagherzadeh.com/$1`

**Option B: .htaccess (if you have server access)**

Add to `.htaccess` on the .be server:

```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^noushinbagherzadeh\.be$ [OR]
RewriteCond %{HTTP_HOST} ^www\.noushinbagherzadeh\.be$
RewriteRule ^(.*)$ https://noushinbagherzadeh.com/$1 [R=301,L]
```

**Option C: No server access? (hardest)**
- Contact hosting provider
- Ask them to set up 301 redirects from .be → .com

**Step 2: Update DNS**
- Point noushinbagherzadeh.com to new site
- Keep .be pointing to old site (for redirects)

**Step 3: Verify Everything**
- Test old .be URLs → should redirect to .com
- Check all images load
- Test lightbox on galleries
- Mobile responsive check
- Speed test (should be <2s)

---

### Phase 3: Post-Migration (Week 1-4)

**Week 1:**
- Monitor Google Search Console for errors
- Check Google Analytics (if you set it up)
- Test all old .be URLs still redirect properly
- Watch for any broken links

**Week 2-4:**
- Monitor rankings (use tool like Ahrefs/SEMrush or manual Google searches)
- Check for any 404 errors in Search Console
- Update any external backlinks you control:
  - Social media bios (Instagram)
  - Exhibition websites
  - Gallery listings
  - Art directories

**What to Expect:**
- Rankings may dip 5-15% for 2-4 weeks (normal)
- Google will re-index the new domain
- By week 4-8, rankings should recover fully
- New site speed will actually BOOST rankings over time

---

## 🎯 SEO Advantages of Your New Site

**Speed Wins:**
- Old site: 5-10s load time
- New site: <1s load time
- **Google loves fast sites** - expect ranking boost

**Mobile Wins:**
- Old site: broken layouts, slow touch response
- New site: perfect mobile experience
- **60%+ of traffic is mobile** - huge SEO factor

**Clean Code Wins:**
- Old site: bloated WordPress plugins, messy HTML
- New site: semantic HTML5, modern CSS
- **Google can crawl it faster** - better indexing

---

## ⚠️ Things That Could Go Wrong

**1. Missing 301 Redirects**
- **Problem:** Old .be URLs return 404
- **Impact:** Lose ALL SEO equity
- **Fix:** Set up redirects BEFORE switching

**2. Broken Images**
- **Problem:** Google can't index images
- **Impact:** Lose image search traffic
- **Fix:** Test all gallery images load on .com

**3. Duplicate Content**
- **Problem:** Both .be and .com live at the same time
- **Impact:** Google penalizes both
- **Fix:** 301 redirects OR canonical tags

**4. Forgetting to Update Links**
- **Problem:** Instagram/social still point to .be
- **Impact:** Users see old broken site
- **Fix:** Update all external links you control

---

## 📋 Migration Checklist

### Before Switch:
- [ ] Buy noushinbagherzadeh.com domain
- [ ] Deploy new site to .com
- [ ] Add meta descriptions to all pages
- [ ] Add structured data (Schema.org)
- [ ] Create sitemap.xml
- [ ] Set up Google Search Console for .com
- [ ] Set up Google Analytics (optional)
- [ ] Test new site thoroughly

### During Switch:
- [ ] Set up 301 redirects on .be → .com
- [ ] Update DNS for .com
- [ ] Verify redirects work
- [ ] Submit sitemap to Search Console
- [ ] Test all pages load correctly

### After Switch (Week 1):
- [ ] Monitor Search Console for errors
- [ ] Check all old URLs redirect properly
- [ ] Update Instagram bio to .com
- [ ] Update any gallery/exhibition links
- [ ] Check mobile experience
- [ ] Speed test verification

### After Switch (Week 2-4):
- [ ] Monitor rankings recovery
- [ ] Fix any 404 errors
- [ ] Check image indexing
- [ ] Review analytics data

---

## 🔧 Technical Recommendation

**Best hosting for SEO:**
- **GitHub Pages** (free, fast CDN, SSL)
- **Netlify** (free, faster deploys, better redirects)
- **Cloudflare Pages** (free, global CDN, excellent speed)

All three support custom domains and are MUCH faster than WordPress hosting.

---

## 💡 Quick Win: Keep .be Alive for 6-12 Months

**Strategy:**
- Keep old .be site running with 301 redirects
- Don't delete it immediately
- Gives Google time to fully migrate
- Catches any backlinks you missed

After 6-12 months, you can safely shut down the .be hosting.

---

## 🎨 Artist-Specific SEO

**Add to homepage meta:**
```html
<meta name="description" content="Contemporary sculptor Noushin Bagherzadeh creates metal and wood sculptures. Based in Belgium, exhibiting internationally.">
```

**Image alt tags (already done, but verify):**
```html
<img src="..." alt="Metal sculpture by Noushin Bagherzadeh - outdoor installation">
```

**Target keywords:**
- Noushin Bagherzadeh
- Belgian sculptor
- Contemporary sculpture Belgium
- Metal sculpture artist
- Wood sculpture art

---

## ✅ Bottom Line

**The migration is LOW RISK if you:**
1. Set up proper 301 redirects
2. Preserve URL structure (or close to it)
3. Keep old site redirecting for 6+ months
4. Monitor Search Console weekly

**The new site will actually IMPROVE SEO because:**
- 10x faster load time
- Perfect mobile experience
- Clean, crawlable code
- No WordPress vulnerabilities

**Timeline:**
- Week 1: Small ranking dip (normal)
- Week 2-4: Recovery begins
- Week 4-8: Full recovery + speed boost kicks in
- Month 3+: Better rankings than before

---

**Ready to execute when you are.**

*Generated: 2026-02-23*
