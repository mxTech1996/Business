'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const info = dataSite.info;

export default function MissionValuesSection() {
  return (
    <section id='know' className='bg-[#1E2A2F] text-white py-16 px-6 md:px-20'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl font-bold mb-10'
        >
          Our Mission, Values & Expertise
        </motion.h2>

        <div className='space-y-12'>
          {info.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className='border-l-4 border-[#CBD5E1] pl-6'
            >
              <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-[#E2E8F0] text-sm'>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
