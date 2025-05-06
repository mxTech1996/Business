'use client'; // solo si estás usando App Router

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Initial Case Review',
    description:
      'After scheduling your consultation, our specialists will review your documentation and ask relevant questions to fully understand your legal needs and goals.',
  },
  {
    number: '02',
    title: 'Document Preparation',
    description:
      'We’ll assist you in preparing and reviewing all necessary legal documents, ensuring compliance and accuracy before any submissions or filings.',
  },
  {
    number: '03',
    title: 'Follow-up and Filing',
    description:
      'Our team will submit your documents to the appropriate agencies, track progress, and provide updates. You’ll receive ongoing support until resolution is complete.',
  },
];

export default function NextSteps() {
  return (
    <section
      id='next-steps'
      className='bg-[#1E2A2F] text-white py-16 px-6 md:px-20'
    >
      <div className='max-w-5xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl font-bold mb-4'
        >
          The Next Steps Are Simple
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-[#E2E8F0] mb-12'
        >
          Once you&#39;ve shared your case and needs, here&#39;s what comes next
          in your legal consultation journey. Our team is here to ensure
          clarity, precision, and peace of mind from start to finish.
        </motion.p>

        <div className='space-y-10 border-l-4 border-[#CBD5E1] pl-6'>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              className='flex items-start space-x-6'
            >
              <div className='flex-shrink-0 w-12 h-12 border-2 border-[#CBD5E1] text-white font-bold text-xl flex items-center justify-center'>
                {step.number}
              </div>
              <div>
                <h3 className='text-lg font-semibold'>{step.title}</h3>
                <p className='text-[#E2E8F0]'>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
