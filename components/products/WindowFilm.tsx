
import React from 'react';
import { WINDOW_FILM_DATA, TESTIMONIALS } from '../../constants';
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

const WindowFilm: React.FC = () => {
  const { hero, features, gallery, description } = WINDOW_FILM_DATA;
  const filmTestimonials = TESTIMONIALS.filter(t => t.productType === 'window-film');

  return (
    <main className="bg-black">
      <PageHero title={hero.title} subtitle={hero.subtitle} imageUrl={hero.imageUrl} />

      {/* Features Section */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Key Benefits</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Experience the comfort and protection of 3M's advanced window film technology.
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
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {description.title}
              </h2>
              {description.content.map((p, i) => (
                <p key={i} className="mt-6 text-lg text-gray-300">
                  {p}
                </p>
              ))}
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img src={description.imageUrl} alt="3M Window Film Technology" className="rounded-lg shadow-2xl object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">In Application</h2>
                  <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">See the sleek finish and enhanced privacy on a variety of vehicles.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {gallery.map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                          <img src={image} alt={`Window film example ${index + 1}`} className="w-full h-80 object-cover transform transition-transform duration-500 hover:scale-110"/>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={filmTestimonials} />

       {/* CTA Section */}
       <section className="py-20 sm:py-28 bg-black text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to Upgrade Your Ride?</h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                  Protect your investment and enhance your driving experience with 3M Automotive Window Film.
              </p>
              <a href="#/contact" className="mt-8 inline-block bg-[#D10411] text-white font-bold text-lg py-4 px-10 rounded-lg hover:bg-[#8a041f] transition-all duration-300 transform hover:scale-105">
                  Get a Free Quote
              </a>
          </div>
      </section>
    </main>
  );
};

export default WindowFilm;
