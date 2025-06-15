'use client';

import ProductCard from './ProductCard';

// const products = [
//   'https://res.cloudinary.com/drtnydjni/image/upload/v1748404526/dress6_swrkzw.jpg',
//   "https://res.cloudinary.com/drtnydjni/image/upload/v1748404525/dress2_vqtf4y.jpg",
//   "https://res.cloudinary.com/drtnydjni/image/upload/v1748404525/dress3_efose6.jpg",
//   "https://res.cloudinary.com/drtnydjni/image/upload/v1748404520/dress5_old2q6.jpg",
//   "https://res.cloudinary.com/drtnydjni/image/upload/v1748404520/dress7_ecsjjf.jpg",
//   "https://res.cloudinary.com/drtnydjni/image/upload/v1748404504/dress4_qeu6p0.jpg",
//   "https://res.cloudinary.com/drtnydjni/image/upload/v1748404502/dress1_zu60oa.jpg",
//   "https://res.cloudinary.com/drtnydjni/image/upload/v1748404498/dress8_xbistp.jpg",
//   // "https://res.cloudinary.com/drtnydjni/image/upload/v1748404493/dress9_mayjbp.jpg",
// ]

      


export default function ProductGallery({ title, products }) {

  return (
    <section className="py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">Find your perfect outfit from our elegant styles</p>
      </div>

      <div className='p-1 md:p-3 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </section>
  );
}
