'use client';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import Link from 'next/link';

const products = dataSite.products.slice(0, 3);
export default function ProductShowcase() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <section id='consulting' className='bg-[#F7F5F3] px-4 md:px-12 py-12'>
      <h1 className='text-4xl font-bold text-[#1F2937] mb-6'>Our Services</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {products.map((product, index) => {
          const isInCart = validateProductInCart(product.id);
          return (
            <div
              key={index}
              className='relative group overflow-hidden shadow-lg'
            >
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-full object-cover'
              />

              {/* Overlay only on hover */}
              <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white'>
                {product.name && (
                  <h3 className='text-lg font-semibold uppercase leading-snug'>
                    {product.name}
                  </h3>
                )}
                <p className='mt-2 text-sm underline flex items-center gap-2 group-hover:translate-x-0 transition-transform duration-300'>
                  <span className='text-[#94A3B8] group-hover:text-white transition-colors duration-300'>
                    {product.description.slice(0, 200)}...
                  </span>
                </p>
                {/* price */}

                {product.price && (
                  <p className='mt-2 text-sm font-semibold'>{product.price}</p>
                )}

                {/* Button  add to cart*/}

                <button
                  onClick={() => handleAddOrRemoveProduct(product.id)}
                  style={{ backgroundColor: isInCart ? '#94A3B8' : '#CBD5E1' }}
                  className='mt-4 bg-[#94A3B8] text-white px-4 py-2 rounded hover:bg-[#CBD5E1] transition duration-300'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Button to see all products */}
      <Link href='/products'>
        <div className='mt-8 text-center'>
          <button className='bg-[#94A3B8] text-white px-6 py-3 rounded hover:bg-[#CBD5E1] transition duration-300'>
            See All Services
          </button>
        </div>
      </Link>
    </section>
  );
}
