
import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <a href={product.href} className="group relative block overflow-hidden rounded-lg shadow-lg">
    <img 
      src={product.imageUrl} 
      alt={product.name} 
      className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <h3 className="text-2xl font-bold text-white">{product.name}</h3>
      <p className="text-gray-300 mt-1">{product.description}</p>
      <div className="mt-4 text-[#D10411] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn More &rarr;
      </div>
    </div>
  </a>
);

const ProductGrid: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Our Premium Automotive Solutions</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            From protection to personalization, discover the 3M difference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
