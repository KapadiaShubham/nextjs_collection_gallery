// src/app/[category]/page.jsx
import ProductGallery from '../components/ProductGallery';
import { getAllProducts } from '@/lib/getProducts';
import { notFound } from "next/navigation";

// Step 1: Define valid categories and configs
const CATEGORY_MAP = {
  "kurtis": {
    title: "Kurtis",
    filter: (product) => product.type === "Kurti",
  },
  "western-wear": {
    title: "Western Wear",
    filter: (product) => product.type === "Western Wear",
  },
  "long-dress": {
    title: "Long Dress",
    filter: (product) => product.type === "Long Dress",
  },
  "tshirts-tops": {
    title: "T-Shirts & Tops",
    filter: (product) => product.type === "T-Shirts & Tops",
  }
};

export async function generateMetadata({ params }) {
  const { category } = await params; // ✅ Await the params
  if (!CATEGORY_MAP[category]) {
    return { title: "Page Not Found" };
  }
  return { title: CATEGORY_MAP[category].title };
}


export default async function CategoryPage({ params }) {
  const { category } = await params; // ✅ Await the params

  const config = CATEGORY_MAP[category];
  if (!config) {
    notFound(); // Shows default 404 page
  }

  
  const allProducts = await getAllProducts();
  const filteredProducts = allProducts.filter(config.filter);

  // if(category === "long-dress") {
  //   console.log("Long Dress category accessed");
  //   console.log("Filtered Products:", filteredProducts);
  // }

  return (
    <>
      <ProductGallery title={config.title} products={filteredProducts} />
    </>
  );
}
