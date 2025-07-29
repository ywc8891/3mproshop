
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { NavLink } from '../types';
import Logo from './Logo';

const NavItem: React.FC<{ link: NavLink; inMobileMenu?: boolean; closeMobileMenu?: () => void }> = ({ link, inMobileMenu, closeMobileMenu }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const hasSublinks = link.subLinks && link.subLinks.length > 0;

  const handleMouseEnter = () => {
    if (!inMobileMenu) setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (!inMobileMenu) setDropdownOpen(false);
  };

  if (inMobileMenu) {
    return (
      <div className="text-center">
        <a href={link.href} onClick={!hasSublinks ? closeMobileMenu : (e) => e.preventDefault()} className="text-2xl font-bold text-white hover:text-[#D10411] transition-colors">
          {link.label}
        </a>
        {hasSublinks && (
          <div className="flex flex-col space-y-4 mt-4">
            {link.subLinks?.map(subLink => (
              <a key={subLink.label} href={subLink.href} onClick={closeMobileMenu} className="text-xl font-medium text-gray-300 hover:text-white">
                {subLink.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center">
        {link.label}
        {hasSublinks && (
          <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </a>
      {hasSublinks && isDropdownOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-black/90 backdrop-blur-sm border border-gray-800 rounded-md shadow-lg py-1 z-10">
          {link.subLinks?.map((subLink) => (
            <a key={subLink.label} href={subLink.href} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
              {subLink.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#/" className="flex-shrink-0">
              <Logo className="h-16 w-auto" />
            </a>
            <nav className="hidden lg:flex lg:space-x-8">
              {NAV_LINKS.map((link) => (
                <NavItem key={link.label} link={link} />
              ))}
            </nav>
            <div className="flex items-center">
              <a href="#" className="hidden sm:inline-block bg-[#D10411] hover:bg-[#8a041f] text-white font-bold py-2 px-6 rounded-md transition-colors duration-300">
                Get a Quote
              </a>
              <button onClick={toggleMenu} className="lg:hidden ml-4 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black bg-opacity-95 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto`}
      >
        <div className="flex flex-col items-center justify-center min-h-full pt-28 pb-12 px-4">
            <nav className="flex flex-col items-center space-y-8">
                {NAV_LINKS.map((link) => (
                  <NavItem key={link.label} link={link} inMobileMenu={true} closeMobileMenu={toggleMenu} />
                ))}
            </nav>
            <a href="#" onClick={toggleMenu} className="mt-12 bg-[#D10411] hover:bg-[#8a041f] text-white font-bold py-3 px-8 rounded-md transition-colors duration-300">
                Get a Quote
            </a>
        </div>
      </div>
    </>
  );
};

export default Header;