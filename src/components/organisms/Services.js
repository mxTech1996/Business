'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const services = dataSite.services;
export default function LegalServicesSection() {
  return (
    <section
      id='services'
      className='bg-[#1E2A2F] text-white py-16 px-6 md:px-20'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl font-bold mb-10'
        >
          Legal Services We Offer
        </motion.h2>

        <div className='space-y-12'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className='md:flex md:items-center gap-8'
            >
              <div className='flex-shrink-0 w-full md:w-1/3 mb-4 md:mb-0'>
                <img
                  src={service.image}
                  alt={service.title}
                  className='rounded-lg shadow-md object-cover h-48 w-full'
                />
              </div>
              <div className='md:w-2/3'>
                <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                <p className='text-[#E2E8F0]'>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
