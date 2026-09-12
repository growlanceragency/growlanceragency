/* =========================================================
   GROWLANCER AGENCY — EASY EDIT SETTINGS
   ---------------------------------------------------------
   এই ফাইল থেকেই website-এর Logo, Social Link, Icons,
   Send Money number/logo, Service, Package, Price, Demo,
   Reviews ইত্যাদি পরিবর্তন করুন। index.html edit করার দরকার নেই।
   ========================================================= */

const SITE_CONFIG = {
  brand: {
    name: 'Growlancer Agency',
    logo: 'assets/logo.jpg,
    favicon: 'assets/favicon.png'
  },

  // URL + enabled=true থাকলেই account দেখাবে। icon/logo optional; না থাকলে letter fallback দেখাবে.
  social: {
    facebook: { enabled: false, url: 'https://www.facebook.com/growlanceragency', icon: 'assets/facebook.png', label: 'Facebook' },
    whatsapp: { enabled: false, url: '09638-397712', icon: 'assets/whatsapp.png', label: 'WhatsApp' },
    instagram: { enabled: false, url: '', icon: 'assets/instagram.png', label: 'Instagram' },
    email: { enabled: false, url: 'growlanceragency@gmail.com', icon: 'assets/email.png', label: 'Email' }
  },

  sendMoney: {
    bKash: { enabled: true, number: '01400101005', logo: 'assets/bkash.png', fallbackIcon: 'bK' },
    Nagad: { enabled: true, number: '01400101005', logo: 'assets/nagad.png', fallbackIcon: 'N' },
    Rocket: { enabled: true, number: '01400101005', logo: 'assets/rocket.jpg', fallbackIcon: 'R' }
  },

  services: {
    'Facebook Page Setup': {
      id: 'service-page', number: 'SERVICE 01', icon: 'f', iconImage: 'assets/facebook-page.png',
      description: 'আপনার business page-কে professional ও ready-to-grow করার complete setup.',
      divider: '',
      demo: { enabled: false, type: 'url', url: '', title: 'Facebook Page Setup Demo', buttonText: 'Demo দেখুন ↗', images: [] },
      packages: [
        { name: 'Basic', price: '৳750', subtitle: 'নতুন business / উদ্যোক্তার জন্য', suffix: 'starting' },
        { name: 'Premium', price: '৳1,200', subtitle: 'Growing business-এর জন্য', suffix: 'starting' },
        { name: 'Corporate', price: '৳2,000', subtitle: 'Brand / organization-এর জন্য', suffix: 'starting' }
      ],
      benefits: ['Professional Page Setup', 'Logo & Cover Setup', 'About & Basic Information', 'CTA & Category Setup', 'Basic SEO Optimization']
    },

    'Website Service': {
      id: 'service-website', number: 'SERVICE 02', icon: '⌘', iconImage: 'assets/website.png',
      description: 'Clean, modern, responsive ও customer-friendly business website.',
      divider: 'WEBSITE SERVICE',
      demo: { enabled: false, type: 'url', url: '', title: 'Website Service Demo', buttonText: 'Demo দেখুন ↗', images: [] },
      packages: [
        { name: 'Basic', price: '৳2,500', subtitle: 'Simple business website-এর জন্য', suffix: 'starting' },
        { name: 'Premium', price: '৳5,000', subtitle: 'Growing business-এর জন্য', suffix: 'starting' },
        { name: 'Corporate', price: 'Custom', subtitle: 'Advanced business website-এর জন্য', suffix: 'requirement based' }
      ],
      benefits: ['Responsive Website', 'Professional Modern Design', 'Mobile Friendly Layout', 'Essential Business Sections', 'Basic Support']
    },

    'Social Media Poster Design': {
      id: 'service-design', number: 'SERVICE 03', icon: '✦', iconImage: 'assets/poster-design.png',
      description: 'একটি single design অথবা নিয়মিত monthly design package, আপনার প্রয়োজন অনুযায়ী।',
      divider: 'SOCIAL MEDIA POSTER DESIGN',
      demo: { enabled: false, type: 'images', url: '', title: 'Social Media Design Samples', buttonText: 'Demo দেখুন ↗', images: [] },
      packages: [
        { name: 'Single Design', price: '৳250', subtitle: 'একটি professional social media design', suffix: 'per design', tabLabel: 'Single' },
        { name: 'Monthly Basic', price: '৳2,000', subtitle: 'Monthly content-এর জন্য', suffix: 'per month', tabLabel: 'Monthly' },
        { name: 'Monthly Premium', price: '৳3,500', subtitle: 'Regular brand content-এর জন্য', suffix: 'per month', tabLabel: 'Premium' }
      ],
      benefits: ['Professional Poster Design', 'Brand-based Creative', 'Social Media Ready Size', 'Clean Typography & Layout', 'Revision Support']
    },

    'Facebook BD Followers': {
      id: 'service-followers', number: 'SERVICE 04', icon: '+', iconImage: 'assets/followers.png',
      description: '1K থেকে 20K পর্যন্ত আপনার প্রয়োজনের quantity নির্বাচন করে custom order করুন।',
      divider: 'FACEBOOK BD FOLLOWERS',
      demo: { enabled: false, type: 'url', url: '', title: 'Facebook BD Followers Details', buttonText: 'Details দেখুন ↗', images: [] },
      packages: [],
      followers: [
        ['1K','৳199'],['2K','৳349'],['3K','৳499'],['4K','৳649'],['5K','৳799'],['6K','৳949'],['7K','৳1,099'],['8K','৳1,249'],['9K','৳1,399'],['10K','৳1,549'],['11K','৳1,699'],['12K','৳1,849'],['13K','৳1,999'],['14K','৳2,149'],['15K','৳2,299'],['16K','৳2,449'],['17K','৳2,599'],['18K','৳2,749'],['19K','৳2,899'],['20K','৳3,049']
      ],
      benefits: ['1K থেকে 20K quantity', 'Page Link দেওয়ার সুবিধা', 'Quantity অনুযায়ী price', 'Custom requirement দেওয়ার option', 'Order-এর আগে details confirm']
    }
  },

  reviews: [
    {name:'Client Name 01', role:'Business Owner', profile:'', text:'Page setup থেকে order পর্যন্ত পুরো process-টা খুব সহজ ছিল। কাজটাও clean ও professional হয়েছে।'},
    {name:'Client Name 02', role:'Entrepreneur', profile:'', text:'Package আগে থেকেই পরিষ্কার ছিল, তাই নিজের প্রয়োজন অনুযায়ী option বেছে নিতে পেরেছি।'},
    {name:'Client Name 03', role:'Business Owner', profile:'', text:'Design service নেওয়ার সময় requirement দেওয়ার ব্যবস্থা এবং communication খুব convenient লেগেছে।'},
    {name:'Client Name 04', role:'Online Business Owner', profile:'', text:'কাজের presentation, communication এবং delivery process সবকিছুই বেশ organised লেগেছে।'},
    {name:'Client Name 05', role:'Entrepreneur', profile:'', text:'নিজের business-এর প্রয়োজন অনুযায়ী service নেওয়া সহজ হয়েছে এবং পুরো experience ভালো ছিল।'},
    {name:'Client Name 06', role:'Business Owner', profile:'', text:'Professional support এবং পরিষ্কার package information থাকার কারণে সিদ্ধান্ত নিতে সুবিধা হয়েছে।'}
  ],

  website: {
    customerCount: 950,
    primaryColor: '#0C92FF'
  }
};
