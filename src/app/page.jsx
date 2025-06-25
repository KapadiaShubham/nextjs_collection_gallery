// src/app/page.jsx
import ProductGallery from './components/ProductGallery';
import { getAllProducts } from '@/lib/getProducts';

export default async function Home() {
  const products = await getAllProducts();
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 pt-16 mt-10 via-purple-50 to-blue-50">
      <section className="relative h-[55vh] flex items-center justify-center text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight drop-shadow-md">
            Discover Fashion That Moves You
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Style. Elegance. Confidence — All in One Place.
          </p>
          <a
  href="#collection"
  className="mt-6 inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
>
  Explore Collection
</a>

        </div>
      </section>

      <ProductGallery id="collection" title='New Arrivals' products={products} />

      <footer className="bg-gradient-to-r from-pink-100 to-purple-100 text-center py-6 text-sm text-gray-700 mt-20">
        © 2025 Dhunki Fashion. Crafted with ✨ & Tailwind CSS.
      </footer>
    </main>
  );
}
