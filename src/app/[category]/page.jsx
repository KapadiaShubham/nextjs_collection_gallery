// src/app/[category]/page.jsx
import ProductGallery from '../components/ProductGallery';
import { getAllProducts } from '@/lib/getProducts';
import { notFound } from "next/navigation";

const CATEGORY_MAP = {
  "kurtis": {
    title: "Elegant Kurtis",
    description: "Step into grace with our handpicked collection of stunning kurtis.",
    filter: (product) => product.type === "Kurti",
  },
  "western-wear": {
    title: "Western Wear",
    description: "Unleash your bold side with the latest trends in western fashion.",
    filter: (product) => product.type === "Western Wear",
  },
  "long-dress": {
    title: "Gorgeous Long Dresses",
    description: "Flowy silhouettes and elegant patterns — discover your perfect long dress.",
    filter: (product) => product.type === "Long Dress",
  },
  "tshirts-tops": {
    title: "Trendy T-Shirts & Tops",
    description: "Casual or classy — our tops redefine effortless style.",
    filter: (product) => product.type === "T-Shirts & Tops",
  }
};

export async function generateMetadata({ params }) {
  const { category } = await params;
  if (!CATEGORY_MAP[category]) {
    return { title: "Page Not Found" };
  }
  return { title: CATEGORY_MAP[category].title };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const config = CATEGORY_MAP[category];

  if (!config) notFound();

  const allProducts = await getAllProducts();
  const filteredProducts = allProducts.filter(config.filter);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pt-40 mt-6 pb-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 drop-shadow-md">
          {config.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          {config.description}
        </p>
        <div className="mt-6 border-t border-dashed border-gray-300 w-24 mx-auto"></div>
      </div>

      <ProductGallery title="Our Collection" products={filteredProducts} />

      <footer className="text-center text-sm text-gray-700 mt-16 mb-8">
        © 2025 Dhunki Fashion — Category: {config.title}
      </footer>
    </main>
  );
}
