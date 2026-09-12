GROWLANCER AGENCY — EASY EDIT SYSTEM

Main website: index.html
Easy settings: config.js
Assets: assets/

IMPORTANT:
1) Upload ALL files together to GitHub Pages. Keep config.js beside index.html.
2) To change Logo, Social links, payment numbers/logos, service icons, packages/prices, demos or reviews, edit config.js only.
3) Put image files in assets/ (or change the path in config.js).
4) Google Sheets Web App URL remains inside index.html and is already connected.

EXAMPLES:
- Logo: SITE_CONFIG.brand.logo
- Facebook: SITE_CONFIG.social.facebook.url + enabled:true
- bKash number: SITE_CONFIG.sendMoney.bKash.number
- Service icon: SITE_CONFIG.services['Website Service'].iconImage
- Demo URL: SITE_CONFIG.services['Website Service'].demo.url and enabled:true
- Demo gallery: set demo.type='images', enabled:true, and add image paths in demo.images
- Package price: SITE_CONFIG.services['Website Service'].packages

If you change Code.gs for Google Sheets, redeploy the Apps Script Web App as a new version.
