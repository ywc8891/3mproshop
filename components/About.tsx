
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="text-center">
    <img className="mx-auto h-48 w-48 rounded-full object-cover shadow-lg" src={member.imageUrl} alt={`Photo of ${member.name}`} />
    <h3 className="mt-6 text-xl font-semibold text-white">{member.name}</h3>
    <p className="text-base font-semibold text-[#D10411]">{member.role}</p>
    <p className="mt-2 text-gray-400 text-sm">{member.bio}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-48 flex items-center justify-center text-center">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/workshop/1920/1080')" }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Driven by Passion, Defined by Quality
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Learn about the philosophy and the people behind the 3M Pro Shop experience.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Our Mission: The Pinnacle of Automotive Care
              </h2>
              <p className="mt-6 text-lg text-gray-300">
                As a premier 3M Pro Shop managed by the experts at P10X, our mission is to deliver an unparalleled standard of automotive enhancement and protection. We believe that every vehicle deserves the best, which is why we exclusively use world-class 3M products, from protective films to aesthetic wraps.
              </p>
              <p className="mt-4 text-lg text-gray-300">
                Our foundation is built on a deep-rooted passion for cars and an unwavering commitment to craftsmanship. We don't just install products; we provide peace of mind, ensuring every job is completed with meticulous attention to detail by certified professionals.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://picsum.photos/seed/detail/800/600" 
                alt="Installer applying film with precision"
                className="rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Meet the Experts</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Our team is composed of industry veterans and passionate artists dedicated to their craft.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default About;
