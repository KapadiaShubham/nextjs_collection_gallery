// src/app/components/ProductGallery.jsx
'use client';
import ProductCard from './ProductCard';

export default function ProductGallery({id, title, products }) {
  return (
    <section id={id?id:'no_id'} className="py-16 px-4 md:px-12">
      <div className="text-center mt-10 mb-12">
        <h2 className="text-4xl font-bold text-gray-800 drop-shadow-sm">
          {title}
        </h2>
        <p className="text-gray-600 mt-2 text-lg">Find your perfect outfit from our elegant styles</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </section>
  );
}
