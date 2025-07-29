
import React from 'react';
import { NavLink, Product, TeamMember, ProductPageData, PortfolioItem, FAQItem, BlogPost, Testimonial } from './types';

// --- Icons for features (can be reused across pages) ---

const ShieldIcon = () => React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-10 w-10 text-[#D10411]",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
}, React.createElement('path', {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-8.618z"
}));

const SunIcon = () => React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-10 w-10 text-[#D10411]",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
}, React.createElement('path', {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 12a5 5 0 100-10 5 5 0 000 10z"
}));

const TempIcon = () => React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-10 w-10 text-[#D10411]",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
}, React.createElement('path', {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11 18h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM12 2a3 3 0 013 3v10a3 3 0 01-6 0V5a3 3 0 013-3z"
}));

const EyeIcon = () => React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-10 w-10 text-[#D10411]",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
},
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
);

const SparklesIcon = () => React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-10 w-10 text-[#D10411]",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
}, React.createElement('path', {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 3v4M3 5h4M17 3v4M15 5h4M5 17v4M3 19h4M17 17v4M15 19h4M12 9a3 3 0 11-6 0 3 3 0 016 0zM15 12a3 3 0 110 6 3 3 0 010-6z"
}));

// --- Navigation ---

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#/' },
  {
    label: 'Automotive Films',
    href: '#',
    subLinks: [
      { label: 'Window Film', href: '#/products/window-film' },
      { label: 'Paint Protection Film', href: '#/products/paint-protection-film' },
    ],
  },
  { label: 'Our Work', href: '#/portfolio' },
  { label: 'About Us', href: '#/about' },
  { label: 'Blog', href: '#/blog' },
  { label: 'FAQ', href: '#/faq' },
  { label: 'Contact Us', href: '#/contact' },
];

// --- Homepage Products ---

export const PRODUCTS: Product[] = [
  {
    name: '3M™ Automotive Window Film',
    description: 'Superior UV protection and heat rejection for a comfortable ride.',
    imageUrl: 'https://picsum.photos/seed/windowtint/800/600',
    href: '#/products/window-film',
  },
  {
    name: '3M™ Paint Protection Film',
    description: 'A durable, transparent layer to protect your paint from scratches and stains.',
    imageUrl: 'https://picsum.photos/seed/ppf/800/600',
    href: '#/products/paint-protection-film',
  },
  {
    name: '3M™ Car Wrap Film',
    description: 'Customize your vehicle with a wide range of colors and finishes.',
    imageUrl: 'https://picsum.photos/seed/carwrap/800/600',
    href: '#',
  },
  {
    name: '3M™ Car Care',
    description: 'Professional-grade products to keep your car looking its best.',
    imageUrl: 'https://picsum.photos/seed/carcare/800/600',
    href: '#',
  },
];

// --- About Us Page ---

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Alex Johnson',
    role: 'Lead Installer & PPF Specialist',
    imageUrl: 'https://picsum.photos/seed/team1/500/500',
    bio: 'With over 15 years in the industry, Alex is a master of precision. His attention to detail ensures every paint protection film application is flawless.'
  },
  {
    name: 'Maria Garcia',
    role: 'Vinyl Wrap Artist',
    imageUrl: 'https://picsum.photos/seed/team2/500/500',
    bio: 'Maria combines technical skill with a creative eye, turning vehicles into works of art with stunning vinyl wraps.'
  },
  {
    name: 'David Chen',
    role: 'Window Tinting Expert',
    imageUrl: 'https://picsum.photos/seed/team3/500/500',
    bio: 'David specializes in automotive window tinting, focusing on heat rejection and UV protection for the ultimate in-car comfort.'
  },
  {
    name: 'Sarah Wilson',
    role: 'Customer Relations Manager',
    imageUrl: 'https://picsum.photos/seed/team4/500/500',
    bio: 'Sarah is the friendly face of our Pro Shop, dedicated to ensuring every client has a seamless and satisfying experience from start to finish.'
  }
];

// --- Product Page Data ---

export const WINDOW_FILM_DATA: ProductPageData = {
  hero: {
    title: '3M™ Automotive Window Film',
    subtitle: 'Advanced technology for superior comfort, privacy, and protection.',
    imageUrl: 'https://picsum.photos/seed/windowfilm-hero/1920/1080',
  },
  features: [
    { icon: React.createElement(SunIcon), title: '99% UV Rejection', description: 'Blocks harmful UV rays, protecting you and your car\'s interior from sun damage.' },
    { icon: React.createElement(TempIcon), title: 'Significant Heat Reduction', description: 'Reduces heat buildup, keeping your cabin cooler and improving fuel efficiency.' },
    { icon: React.createElement(EyeIcon), title: 'Reduced Glare & Increased Privacy', description: 'Enhances driving comfort by reducing glare and adds a sleek, private look to your vehicle.' },
    { icon: React.createElement(ShieldIcon), title: 'Durable Scratch Resistance', description: 'Features a tough coating that resists scratches and ensures long-lasting clarity.' },
  ],
  gallery: [
    'https://picsum.photos/seed/wfgallery1/800/600',
    'https://picsum.photos/seed/wfgallery2/800/600',
    'https://picsum.photos/seed/wfgallery3/800/600',
  ],
  description: {
    title: 'Engineered for Performance',
    content: [
      '3M Automotive Window Films are designed to enhance your driving experience. Backed by decades of optical science, these films are non-metallized to ensure they don’t interfere with electronics, satellite radio, GPS, or mobile devices.',
      'From the Crystalline Series that offers supreme heat rejection without changing your car\'s appearance, to the Ceramic IR Series for excellent infrared heat rejection, there’s a 3M film to meet your needs.'
    ],
    imageUrl: 'https://picsum.photos/seed/wf-tech/800/600',
  },
};

export const PPF_DATA: ProductPageData = {
  hero: {
    title: '3M™ Paint Protection Film',
    subtitle: 'The ultimate defense for your vehicle\'s finish against the hazards of the road.',
    imageUrl: 'https://picsum.photos/seed/ppf-hero/1920/1080',
  },
  features: [
    { icon: React.createElement(ShieldIcon), title: 'Impact & Scratch Protection', description: 'Guards your paint against rock chips, scratches, bug acids, and other road debris.' },
    { icon: React.createElement(SparklesIcon), title: 'Self-Healing Technology', description: 'Minor scratches and scuffs disappear with heat from the sun or your engine.' },
    { icon: React.createElement(SunIcon), title: 'UV-Resistant & Non-Yellowing', description: 'Resists yellowing and cracking, ensuring the film remains optically clear for years.' },
    { icon: React.createElement(EyeIcon), title: 'Enhanced Finish & Clarity', description: 'Maintains the brilliance of your original paint with a high-gloss, virtually invisible finish.' },
  ],
  gallery: [
    'https://picsum.photos/seed/ppfgallery1/800/600',
    'https://picsum.photos/seed/ppfgallery2/800/600',
    'https://picsum.photos/seed/ppfgallery3/800/600',
  ],
  description: {
    title: 'Invisible Armor for Your Car',
    content: [
      '3M™ Paint Protection Film (PPF) is a tough, durable, and transparent urethane film that acts as a sacrificial layer for your vehicle\'s painted surfaces. It is precision-cut by computer to fit your vehicle\'s specific panels.',
      'Applied to high-impact areas like the hood, fenders, and mirrors, it provides a barrier that absorbs damage, preserving your factory paint and boosting your car\'s resale value.'
    ],
    imageUrl: 'https://picsum.photos/seed/ppf-tech/800/600',
  },
};

// --- Portfolio Page ---
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
    {
        beforeImageUrl: 'https://picsum.photos/seed/p1before/800/600',
        afterImageUrl: 'https://picsum.photos/seed/p1after/800/600',
        title: 'Porsche 911 GT3 - Full Body PPF',
        description: 'Complete coverage with 3M™ Paint Protection Film for ultimate track-day peace of mind. The film is virtually invisible, preserving the original Python Green color.'
    },
    {
        beforeImageUrl: 'https://picsum.photos/seed/p2before/800/600',
        afterImageUrl: 'https://picsum.photos/seed/p2after/800/600',
        title: 'Tesla Model Y - Ceramic IR Tint',
        description: '3M™ Crystalline Series window film applied to all glass surfaces for maximum heat rejection and UV protection, enhancing comfort without sacrificing visibility.'
    },
    {
        beforeImageUrl: 'https://picsum.photos/seed/p3before/800/600',
        afterImageUrl: 'https://picsum.photos/seed/p3after/800/600',
        title: 'Mercedes G-Wagon - Satin Black Wrap',
        description: 'A full vehicle wrap using 3M™ Wrap Film Series 2080 in a stunning Satin Black, transforming the look from classic gloss to modern stealth.'
    },
    {
        beforeImageUrl: 'https://picsum.photos/seed/p4before/800/600',
        afterImageUrl: 'https://picsum.photos/seed/p4after/800/600',
        title: 'Ford Bronco - Custom Graphics & PPF',
        description: 'A combination of custom-designed vinyl graphics and high-impact area PPF for a personalized, adventure-ready look that\'s also protected.'
    }
];


// --- FAQ Page ---
export const FAQS: FAQItem[] = [
  {
    question: 'What is Paint Protection Film (PPF)?',
    answer: 'Paint Protection Film is a transparent, urethane-based film applied to a vehicle\'s painted surfaces. It acts as a protective barrier against rock chips, scratches, insect stains, and other environmental damage, preserving your factory paint job.'
  },
  {
    question: 'How long does 3M PPF and Window Tint last?',
    answer: 'Professionally installed 3M™ Paint Protection Films and Automotive Window Films are backed by a comprehensive 10-year warranty. They are designed to be durable, long-lasting, and resistant to yellowing, cracking, and peeling.'
  },
  {
    question: 'Why are 3M products more expensive than other options?',
    answer: 'The price reflects the value of superior technology, extensive research and development, and stringent quality control. With 3M, you\'re investing in a product that offers proven performance, industry-leading durability, and is backed by one of the most robust warranties available. Choosing 3M means choosing peace of mind and long-term value over short-term savings.'
  },
  {
    question: 'Can the film be removed? Will it damage the paint?',
    answer: 'Yes, the film can be safely removed by a professional installer. When removed, it will not damage the OEM paint underneath. In fact, the paint will have been preserved in its original condition.'
  },
  {
    question: 'How do I care for my vehicle after installation?',
    answer: 'Care is simple. We recommend waiting a few days before washing your car. After that, you can wash and wax it as you normally would. For PPF, the self-healing top coat will remove minor scratches over time with exposure to heat.'
  }
];

// --- Blog Page ---
export const BLOG_POSTS: BlogPost[] = [
    {
        title: 'PPF vs. Ceramic Coating: Which is Right for You?',
        date: 'October 26, 2023',
        author: 'Alex Johnson',
        imageUrl: 'https://picsum.photos/seed/blog1/800/600',
        excerpt: 'We break down the pros and cons of the two most popular paint protection methods to help you make an informed decision for your vehicle.',
        href: '#'
    },
    {
        title: 'The Science Behind 3M\'s Crystalline Window Film',
        date: 'October 15, 2023',
        author: 'David Chen',
        imageUrl: 'https://picsum.photos/seed/blog2/800/600',
        excerpt: 'Discover the multi-layer optical film technology that allows Crystalline films to reject more heat than many darker films, without changing your car\'s appearance.',
        href: '#'
    },
    {
        title: 'Top 5 Misconceptions About Vinyl Car Wraps',
        date: 'September 30, 2023',
        author: 'Maria Garcia',
        imageUrl: 'https://picsum.photos/seed/blog3/800/600',
        excerpt: 'Thinking about wrapping your car? We debunk common myths about durability, paint safety, and maintenance.',
        href: '#'
    },
    {
        title: 'Why a Professional Installation Matters',
        date: 'September 18, 2023',
        author: 'Alex Johnson',
        imageUrl: 'https://picsum.photos/seed/blog4/800/600',
        excerpt: 'The quality of your film is only as good as the installation. Learn why choosing a certified 3M Pro Shop is critical for a flawless, long-lasting result.',
        href: '#'
    }
];

// --- Testimonials ---
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Jennifer L.',
    vehicle: 'Tesla Model 3',
    imageUrl: 'https://picsum.photos/seed/testimonial1/100/100',
    quote: 'The 3M Crystalline film is incredible. My car stays so much cooler in the sun, and the clarity is perfect. The installation was quick and flawless. Highly recommend!',
    productType: 'window-film',
  },
  {
    name: 'Mark T.',
    vehicle: 'Ford F-150',
    imageUrl: 'https://picsum.photos/seed/testimonial2/100/100',
    quote: 'I was worried about rock chips on my new truck, but the 3M PPF has given me total peace of mind. You can\'t even tell it\'s there. The team did an amazing job.',
    productType: 'ppf',
  },
  {
    name: 'David R.',
    vehicle: 'Porsche 911',
    imageUrl: 'https://picsum.photos/seed/testimonial3/100/100',
    quote: 'For a high-value car, only the best will do. The full front-end PPF application was meticulous. It\'s invisible protection against road debris. Worth every penny.',
    productType: 'ppf',
  },
  {
    name: 'Samantha B.',
    vehicle: 'Honda CR-V',
    imageUrl: 'https://picsum.photos/seed/testimonial4/100/100',
    quote: 'The window tint makes a huge difference for privacy and keeps the car from getting scorching hot for my kids in the back. The service was friendly and professional.',
    productType: 'window-film',
  }
];
