
import { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
  subLinks?: NavLink[];
}

export interface Product {
  name: string;
  description: string;
  imageUrl: string;
  href: string;
}

export interface Feature {
    icon: ReactNode;
    title: string;
    description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface ProductFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ProductPageData {
  hero: {
    title: string;
    subtitle: string;
    imageUrl: string;
  };
  features: ProductFeature[];
  gallery: string[];
  description: {
    title: string;
    content: string[];
    imageUrl: string;
  };
}

export interface PortfolioItem {
  beforeImageUrl: string;
  afterImageUrl: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  title: string;
  date: string;
  author: string;
  imageUrl: string;
  excerpt: string;
  href: string;
}

export interface Testimonial {
  name: string;
  vehicle: string;
  imageUrl: string;
  quote: string;
  productType: 'window-film' | 'ppf';
}
