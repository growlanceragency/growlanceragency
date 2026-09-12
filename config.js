const SITE_CONFIG = {
  brand: {
    name: 'Growlancer Agency',
    logo: 'assets/logo.jpg',
    favicon: 'assets/favicon.png'
  },

  social: {
    facebook: {
      enabled: true,
      url: 'https://www.facebook.com/growlanceragency',
      icon: 'assets/facebook.png',
      label: 'Facebook'
    },
    whatsapp: {
      enabled: true,
      url: 'https://wa.me/8801400101005',
      icon: 'assets/whatsapp.png',
      label: 'WhatsApp'
    },
    instagram: {
      enabled: false,
      url: '',
      icon: 'assets/instagram.png',
      label: 'Instagram'
    },
    email: {
      enabled: true,
      url: 'mailto:growlanceragency@gmail.com',
      icon: 'assets/email.png',
      label: 'Email'
    }
  },

  messageButton: {
    enabled: true,
    url: 'https://m.me/growlanceragency',
    label: 'Message'
  },

  sendMoney: {
    bKash: {
      enabled: true,
      number: '01400101005',
      logo: 'assets/bkash.png',
      fallbackIcon: 'bK'
    },
    Nagad: {
      enabled: true,
      number: '01400101005',
      logo: 'assets/nagad.png',
      fallbackIcon: 'N'
    },
    Rocket: {
      enabled: true,
      number: '01400101005',
      logo: 'assets/rocket.jpg',
      fallbackIcon: 'R'
    }
  },

  services: {
    'Facebook Page Setup': {
      id: 'service-page',
      number: 'SERVICE 01',
      icon: 'f',
      iconImage: 'assets/facebook-page.png',
      description: 'আপনার business page-কে professional ও ready-to-grow করার complete setup.',
      divider: '',
      demo: {
        enabled: false,
        type: 'url',
        url: '',
        title: 'Facebook Page Setup Demo',
        buttonText: 'Demo দেখুন ↗',
        images: []
      },
      packages: [
        {
          name: 'Basic',
          price: '৳750',
          subtitle: 'নতুন business / উদ্যোক্তার জন্য',
          suffix: 'starting'
        },
        {
          name: 'Premium',
          price: '৳1,200',
          subtitle: 'Growing business-এর জন্য',
          suffix: 'starting'
        },
        {
          name: 'Corporate',
          price: '৳2,000',
          subtitle: 'Brand / organization-এর জন্য',
          suffix: 'starting'
        }
      ],
      benefits: [
        'Professional Facebook Page Setup',
        'Logo & Cover Photo Setup',
        'About, Category & Contact Information',
        'Username, CTA & Basic Page Optimization',
        'Auto Reply & FAQ Setup',
        'SEO-friendly Page Configuration',
        'Free Technical Support'
      ]
    },

    'Website Service': {
      id: 'service-website',
      number: 'SERVICE 02',
      icon: '⌘',
      iconImage: 'assets/website.png',
      description: 'Clean, modern, responsive ও customer-friendly business website.',
      divider: 'WEBSITE SERVICE',
      demo: {
        enabled: false,
        type: 'url',
        url: '',
        title: 'Website Service Demo',
        buttonText: 'Demo দেখুন ↗',
        images: []
      },
      packages: [
        {
          name: 'Basic',
          price: '৳2,500',
          subtitle: 'Simple business website-এর জন্য',
          suffix: 'starting'
        },
        {
          name: 'Premium',
          price: '৳5,000',
          subtitle: 'Growing business-এর জন্য',
          suffix: 'starting'
        },
        {
          name: 'Corporate',
          price: 'Custom',
          subtitle: 'Advanced business website-এর জন্য',
          suffix: 'requirement based'
        }
      ],
      benefits: [
        'Modern & Professional Design',
        'Mobile, Tablet & Desktop Responsive',
        'Fast-loading & User-friendly Layout',
        'Business Information & Contact Section',
        'Social Media & CTA Integration',
        'Basic SEO-friendly Structure',
        'Free Technical Support'
      ]
    },

    'Social Media Poster Design': {
      id: 'service-design',
      number: 'SERVICE 03',
      icon: '✦',
      iconImage: 'assets/poster-design.png',
      description: 'একটি single design অথবা নিয়মিত monthly design package, আপনার প্রয়োজন অনুযায়ী।',
      divider: 'SOCIAL MEDIA POSTER DESIGN',
      demo: {
        enabled: false,
        type: 'images',
        url: '',
        title: 'Social Media Design Samples',
        buttonText: 'Demo দেখুন ↗',
        images: []
      },
      packages: [
        {
          name: 'Single Design',
          price: '৳250',
          subtitle: 'একটি professional social media design',
          suffix: 'per design',
          tabLabel: 'Single'
        },
        {
          name: 'Monthly Basic',
          price: '৳2,000',
          subtitle: 'Monthly content-এর জন্য',
          suffix: 'per month',
          tabLabel: 'Monthly'
        },
        {
          name: 'Monthly Premium',
          price: '৳3,500',
          subtitle: 'Regular brand content-এর জন্য',
          suffix: 'per month',
          tabLabel: 'Premium'
        }
      ],
      benefits: [
        'Professional Social Media Poster Design',
        'Brand-focused Creative Layout',
        'Facebook & Instagram-ready Design',
        'Custom Text, Image & Branding',
        'High-quality Export',
        'Revision Support',
        'Consistent Visual Style'
      ]
    },

    'Facebook BD Followers': {
      id: 'service-followers',
      number: 'SERVICE 04',
      icon: '+',
      iconImage: 'assets/followers.png',
      description: '1K থেকে 20K পর্যন্ত আপনার প্রয়োজনের quantity নির্বাচন করে custom order করুন।',
      divider: 'FACEBOOK BD FOLLOWERS',
      demo: {
        enabled: false,
        type: 'url',
        url: '',
        title: 'Facebook BD Followers Details',
        buttonText: 'Details দেখুন ↗',
        images: []
      },
      packages: [],
      followers: [
        ['1K', 199],
        ['2K', 349],
        ['3K', 499],
        ['4K', 649],
        ['5K', 799],
        ['6K', 949],
        ['7K', 1099],
        ['8K', 1249],
        ['9K', 1399],
        ['10K', 1549],
        ['11K', 1699],
        ['12K', 1849],
        ['13K', 1999],
        ['14K', 2149],
        ['15K', 2299],
        ['16K', 2449],
        ['17K', 2599],
        ['18K', 2749],
        ['19K', 2899],
        ['20K', 3049]
      ],
      benefits: [
        'Bangladeshi Facebook Followers',
        '1K থেকে 20K পর্যন্ত Quantity Selection',
        'Fast & Easy Order Process',
        'Quantity অনুযায়ী Price Auto Calculation',
        '100% Full Send Money Required'
      ]
    }
  },

  reviews: [
    {
      name: 'Client Review 01',
      text: 'Growlancer Agency-এর service ও communication দুটোই ভালো লেগেছে।',
      rating: 5,
      photo: ''
    },
    {
      name: 'Client Review 02',
      text: 'Page setup খুব সুন্দরভাবে complete করে দিয়েছে।',
      rating: 5,
      photo: ''
    },
    {
      name: 'Client Review 03',
      text: 'Design quality এবং response দুটোই satisfactory ছিল।',
      rating: 5,
      photo: ''
    },
    {
      name: 'Client Review 04',
      text: 'Order process সহজ এবং কাজ সময়মতো পেয়েছি।',
      rating: 5,
      photo: ''
    },
    {
      name: 'Client Review 05',
      text: 'Professional service, আবারও কাজ করাতে চাই।',
      rating: 5,
      photo: ''
    },
    {
      name: 'Client Review 06',
      text: 'Overall experience ভালো ছিল এবং support পেয়েছি।',
      rating: 5,
      photo: ''
    }
  ],

  website: {
    customerCount: 950,
    primaryColor: '#0C92FF'
  }
};
