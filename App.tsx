
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import About from './components/About';
import WindowFilm from './components/products/WindowFilm';
import PaintProtectionFilm from './components/products/PaintProtectionFilm';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Blog from './components/Blog';


// A simple function to get the current route from the hash
const getRoute = () => window.location.hash || '#/';

function App(): React.ReactNode {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handleHashChange = () => {
      // Scroll to top on page change
      window.scrollTo(0, 0);
      setRoute(getRoute());
    };

    // Set initial route on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/about':
        return <About />;
      case '#/products/window-film':
        return <WindowFilm />;
      case '#/products/paint-protection-film':
        return <PaintProtectionFilm />;
      case '#/portfolio':
        return <Portfolio />;
      case '#/faq':
        return <FAQ />;
      case '#/contact':
        return <Contact />;
      case '#/blog':
        return <Blog />;
      case '#/':
      default:
        return (
          <main>
            <Hero />
            <ProductGrid />
            <WhyChooseUs />
          </main>
        );
    }
  };

  return (
    <div className="bg-black text-white font-sans antialiased">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;