
import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
  <div className="bg-[#0a0a0a] rounded-lg shadow-lg overflow-hidden">
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="relative">
        <img src={item.beforeImageUrl} alt={item.title + ' before'} className="w-full h-64 object-cover" />
        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">Before</div>
      </div>
      <div className="relative">
        <img src={item.afterImageUrl} alt={item.title + ' after'} className="w-full h-64 object-cover" />
         <div className="absolute top-2 left-2 bg-[#D10411] text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">After</div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white">{item.title}</h3>
      <p className="mt-2 text-gray-400">{item.description}</p>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-48 flex items-center justify-center text-center">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/portfolio-hero/1920/1080')" }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Our Craftsmanship in Action
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore a showcase of our recent projects and witness the transformations we deliver.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <PortfolioCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
