
import React from 'react';

const InfoIcon: React.FC<{ path: string }> = ({ path }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D10411]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
);


const Contact: React.FC = () => {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-48 flex items-center justify-center text-center">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/contact-hero/1920/1080')" }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We're here to answer your questions and help you schedule your next service.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="bg-black p-8 rounded-lg">
              <h2 className="text-3xl font-extrabold text-white">Contact Information</h2>
              <p className="mt-4 text-gray-400">
                Reach out to us via phone, email, or visit our shop during business hours.
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start space-x-4">
                  <InfoIcon path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM12 11a2 2 0 100-4 2 2 0 000 4z" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Our Address</h3>
                    <p className="text-gray-400">123 Automotive Ave, Suite 101<br/>Car City, ST 54321</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <InfoIcon path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email Us</h3>
                    <p className="text-gray-400">contact@p10x-proshop.com</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <InfoIcon path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   <div>
                    <h3 className="text-lg font-semibold text-white">Call Us</h3>
                    <p className="text-gray-400">(123) 456-7890</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <InfoIcon path="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                    <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-400">Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Contact Form */}
            <div className="bg-black p-8 rounded-lg">
              <h2 className="text-3xl font-extrabold text-white">Send Us a Message</h2>
              <p className="mt-4 text-gray-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form action="#" method="POST" className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input type="text" name="name" id="name" autoComplete="name" required className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#D10411]" placeholder="Full Name" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" name="email" id="email" autoComplete="email" required className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#D10411]" placeholder="Email Address" />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input type="tel" name="phone" id="phone" autoComplete="tel" className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#D10411]" placeholder="Phone Number (Optional)" />
                </div>
                 <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#D10411]" placeholder="Your Message"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-[#D10411] hover:bg-[#8a041f] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
