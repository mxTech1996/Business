'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='bg-[#FAF9F7] text-[#1F2937]'>
      {/* Top Navbar */}
      <nav className='bg-[#FAF9F7] border-b border-gray-200'>
        <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
          {/* Left links */}
          <div className='flex space-x-6 font-medium text-sm'>
            <a href='/#services'>Services</a>
            <a href='/#testimonials'>Testimonials</a>
          </div>

          {/* Logo */}
          <div className='absolute left-1/2 transform -translate-x-1/2'>
            <span className='text-lg font-bold tracking-wide'>
              Business Expert Dann
            </span>
          </div>

          {/* Right links */}
          <div className='flex space-x-4 items-center text-sm'>
            <Link href='/my-cart'>
              <button className='bg-[#94A3B8] text-white px-4 py-2 rounded font-semibold tracking-wide text-sm'>
                Go to Cart
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Blue Bottom Bar with Buttons */}
      <div className='bg-[#94A3B8] py-4 px-6'>
        <div className='max-w-7xl mx-auto flex flex-wrap justify-center gap-4'>
          {[
            { name: 'Contact us', link: '/more-information' },
            { name: 'Know us', link: '/#know' },
            { name: 'Consulting', link: '/#consulting' },
            { name: 'Next steps', link: '/#next-steps' },
          ].map((label) => (
            <Link key={label.name} href={label.link}>
              <button className='hover:bg-white hover:text-[#1F2937] border border-white text-white px-4 py-2 text-sm font-medium rounded hover:bg-[#cbd5e1]/10 transition'>
                {label.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
