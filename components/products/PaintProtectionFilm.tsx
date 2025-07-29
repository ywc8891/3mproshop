
import React from 'react';
import { PPF_DATA, TESTIMONIALS } from '../../constants';
import Testimonials from '../Testimonials';

const PageHero: React.FC<{ title: string; subtitle: string; imageUrl: string }> = ({ title, subtitle, imageUrl }) => (
  <section className="relative py-32 sm:py-48 flex items-center justify-center text-center">
    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
    <div className="relative z-10 px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
        {title}
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  </section>
);

const PaintProtectionFilm: React.FC = () => {
  const { hero, features, gallery, description } = PPF_DATA;
  const ppfTestimonials = TESTIMONIALS.filter(t => t.productType === 'ppf');

  return (
    <main className="bg-black">
      <PageHero title={hero.title} subtitle={hero.subtitle} imageUrl={hero.imageUrl} />

      {/* Features Section */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Core Features</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Discover the advanced protective qualities of 3M's industry-leading PPF.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 bg-black rounded-lg">
                 <div className="flex justify-center items-center h-16 w-16 rounded-full bg-gray-900 mx-auto">
                    {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {description.title}
              </h2>
              {description.content.map((p, i) => (
                <p key={i} className="mt-6 text-lg text-gray-300">
                  {p}
                </p>
              ))}
            </div>
            <div className="flex justify-center">
              <img src={description.imageUrl} alt="3M Paint Protection Film Technology" className="rounded-lg shadow-2xl object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Flawless Installations</h2>
                  <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">See how our expert application makes the film disappear, leaving only protection.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {gallery.map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                          <img src={image} alt={`PPF example ${index + 1}`} className="w-full h-80 object-cover transform transition-transform duration-500 hover:scale-110"/>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={ppfTestimonials} />

      {/* CTA Section */}
       <section className="py-20 sm:py-28 bg-black text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Protect Your Paint Today</h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                  Preserve your vehicle's factory finish and maintain its value for years to come.
              </p>
              <a href="#/contact" className="mt-8 inline-block bg-[#D10411] text-white font-bold text-lg py-4 px-10 rounded-lg hover:bg-[#8a041f] transition-all duration-300 transform hover:scale-105">
                  Request a Consultation
              </a>
          </div>
      </section>
    </main>
  );
};

export default PaintProtectionFilm;
