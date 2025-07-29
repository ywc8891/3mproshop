
import React from 'react';
import Logo from './Logo';

const SocialIcon: React.FC<{ href: string; iconPath: string; label: string }> = ({ href, iconPath, label }) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors">
    <span className="sr-only">{label}</span>
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={iconPath} />
    </svg>
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16">
          <div className="lg:col-span-4">
            <Logo className="h-20 w-auto" />
            <p className="mt-4 text-sm text-gray-400">
              Your trusted source for authorized 3M Automotive products and professional installation.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Products</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#/products/window-film" className="text-base hover:text-white">Window Film</a></li>
                <li><a href="#/products/paint-protection-film" className="text-base hover:text-white">Paint Protection</a></li>
                <li><a href="#" className="text-base hover:text-white">Car Wraps</a></li>
                <li><a href="#" className="text-base hover:text-white">Car Care</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#/about" className="text-base hover:text-white">About Us</a></li>
                <li><a href="#/portfolio" className="text-base hover:text-white">Our Work</a></li>
                <li><a href="#/blog" className="text-base hover:text-white">Blog</a></li>
                <li><a href="#/contact" className="text-base hover:text-white">Contact Us</a></li>
              </ul>
            </div>
             <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#/faq" className="text-base hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-base hover:text-white">Warranty Info</a></li>
                <li><a href="#" className="text-base hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-base text-[#03c] hover:underline">3M Official Site</a></li>
              </ul>
            </div>
            <div className="flex items-start space-x-6">
                <SocialIcon href="#" label="Facebook" iconPath="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                <SocialIcon href="#" label="Instagram" iconPath="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85.07zm0-2.163C8.84 0 8.421.012 7.148.07 2.897.222.222 2.897.07 7.148.012 8.421 0 8.84 0 12s.012 3.579.07 4.85c.152 4.252 2.827 6.927 7.078 7.078 1.27.058 1.689.07 4.852.07s3.582-.012 4.852-.07c4.252-.151 6.927-2.826 7.078-7.078.058-1.27.07-1.689.07-4.852s-.012-3.582-.07-4.852C21.103 2.827 18.428.152 14.178.07 12.906.012 12.487 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-center">
            &copy; {new Date().getFullYear()} 3M Pro Shop. All Rights Reserved. Managed by P10X.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;