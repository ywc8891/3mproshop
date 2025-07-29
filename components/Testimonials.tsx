
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialsProps {
    testimonials: Testimonial[];
    title?: string;
    subtitle?: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-black p-8 rounded-lg shadow-lg flex flex-col items-center text-center h-full">
        <img className="h-20 w-20 rounded-full object-cover" src={testimonial.imageUrl} alt={`Photo of ${testimonial.name}`} />
        <blockquote className="mt-6 text-gray-300 italic flex-grow">
            <p>"{testimonial.quote}"</p>
        </blockquote>
        <footer className="mt-4">
            <p className="font-semibold text-white">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.vehicle}</p>
        </footer>
    </div>
);


const Testimonials: React.FC<TestimonialsProps> = ({ 
    testimonials,
    title = "What Our Customers Say",
    subtitle = "Real feedback from satisfied clients who trust us with their vehicles."
}) => {
    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    return (
        <section className="py-20 sm:py-28 bg-[#0a0a0a]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
