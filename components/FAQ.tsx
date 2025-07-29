
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { FAQItem } from '../types';

const AccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <h2>
        <button
          type="button"
          className="flex justify-between items-center w-full py-5 font-medium text-left text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="text-lg">{item.question}</span>
          <svg
            className={`w-6 h-6 shrink-0 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </h2>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
             <div className="pb-5 pr-4 text-gray-400">
                {item.answer}
            </div>
        </div>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-48 flex items-center justify-center text-center">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/faq-hero/1920/1080')" }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We have answers. Find information about our products, services, and processes.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {FAQS.map((faq, index) => (
                    <AccordionItem key={index} item={faq} />
                ))}
            </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
