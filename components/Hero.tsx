
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/luxcar/1920/1080')" }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tight">
          The Professional Standard in Automotive Care
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          Experience unparalleled quality and performance with 3M™ products, installed by our network of authorized professionals.
        </p>
        <a 
          href="#"
          className="inline-block bg-[#D10411] text-white font-bold text-lg py-4 px-10 rounded-lg hover:bg-[#8a041f] transition-all duration-300 transform hover:scale-105"
        >
          Explore Our Products
        </a>
      </div>
    </section>
  );
};

export default Hero;
