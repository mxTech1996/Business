'use client';
import { dataSite } from '@/data';

const TopSection = () => {
  return (
    <section id='top' className='bg-[#1E2A2F] text-white py-16 px-6 md:px-20'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        {/* Left: Image with framed effect */}
        <div className='relative border-2 border-[#CBD5E1] p-2'>
          <img
            src={dataSite.image_hero2}
            alt='Legal Consultant'
            className='rounded shadow-md'
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className='text-3xl font-bold mb-6 leading-snug'>
            Trusted Guidance for
            <br /> Your Legal Processes
          </h2>
          <p className='text-[#E2E8F0] mb-4'>
            Whether you’re starting a new business, managing immigration
            paperwork, or resolving legal issues, our experienced consultants
            are here to guide you through every step of the process. We
            specialize in simplifying complex legal procedures so you can move
            forward with confidence.
          </p>
          <p className='text-[#E2E8F0] mb-4'>
            From document preparation to agency submissions and timelines, we’ll
            help you navigate every requirement efficiently and professionally.
            You’ll receive expert support and personalized attention tailored to
            your situation.
          </p>
          <p className='text-white font-medium mb-6'>
            Book your free consultation today or visit our office to discuss how
            we can help with your legal needs.
          </p>
          {/* <button className='border border-white px-6 py-3 font-semibold text-sm hover:bg-white hover:text-[#1E2A2F] transition rounded'>
            BOOK A CONSULTATION
          </button> */}
        </div>
      </div>
    </section>
  );
};
export default TopSection;
