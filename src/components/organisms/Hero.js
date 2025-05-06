'use client';
import { dataSite } from '@/data';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-20'>
      <div className='space-y-6'>
        <h1 className='text-4xl font-bold text-[#1F2937]'>GET STARTED</h1>
        <p className='text-[#4B5563]'>{dataSite.description}</p>
        <p className='text-[#4B5563]'>{dataSite.subtitle}</p>
        <div className='space-y-3'>
          <Link href='/products'>
            <button className='w-full border-2 border-[#CBD5E1] px-6 py-3 text-sm font-semibold hover:bg-[#E2E8F0] transition'>
              I’M LOOKING FOR LEGAL ADVICE
            </button>
          </Link>
          <Link href='/more-information'>
            <button className='w-full border-2 border-[#CBD5E1] px-6 py-3 text-sm font-semibold hover:bg-[#E2E8F0] transition'>
              Contact us
            </button>
          </Link>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <img
          src={dataSite.image_hero}
          alt='Legal consultant talking to client'
          className='rounded-lg shadow-md max-h-[400px] object-cover'
        />
      </div>
    </section>
  );
};
export default Hero;
