'use client';

import { dataSite } from '@/data';

const testimonials = dataSite.references;

// Función para generar color por nombre
const getBackgroundColor = (name) => {
  const colors = [
    'bg-[#E0F2FE]',
    'bg-[#FEF3C7]',
    'bg-[#FCE7F3]',
    'bg-[#DCFCE7]',
    'bg-[#FDE68A]',
    'bg-[#DDD6FE]',
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

export default function TestimonialsSection() {
  return (
    <section id='testimonials' className='bg-[#F7F5F3] py-16 px-6 md:px-20'>
      <div className='max-w-6xl mx-auto text-center mb-12'>
        <h2 className='text-3xl font-bold text-[#1F2937] mb-4'>
          What Our Clients Say
        </h2>
        <p className='text-[#4B5563] text-md'>
          Hear from people we’ve helped with their legal paperwork and
          consulting needs.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-6 '>
        {testimonials.map((testimonial, index) => {
          const initials = testimonial.name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .substring(0, 2)
            .toUpperCase();

          const showImage =
            testimonial.image && testimonial.image.trim() !== '';

          return (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-left flex flex-col items-start group'
            >
              <div className='flex items-center mb-4'>
                {showImage ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-12 h-12 rounded-full object-cover mr-4 border border-gray-200'
                  />
                ) : (
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-[#1F2937] mr-4 ${getBackgroundColor(
                      testimonial.name
                    )}`}
                  >
                    {initials}
                  </div>
                )}
                <h3 className='text-lg font-semibold text-[#1F2937]'>
                  {testimonial.name}
                </h3>
              </div>
              <p className='text-sm text-[#4B5563] group-hover:text-[#1F2937] transition-colors'>
                “{testimonial.description}”
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
