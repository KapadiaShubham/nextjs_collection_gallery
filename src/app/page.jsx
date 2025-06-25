import ProductGallery from './components/ProductGallery';
// import allProducts from './data/flattenedData.json';
import { getAllProducts } from '@/lib/getProducts';

export default async function Home() {
  const products = await getAllProducts();
  return (
    <>
      <ProductGallery title='New Arrivals' products={products} />
    </>
  );
}
