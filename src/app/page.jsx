import ProductGallery from "./components/ProductGallery";
import allProducts from './data/flattenedData.json';

export default function Home() {
  return (
    <>
    <ProductGallery title='New Arrivals' products={allProducts}/>
    </>
  );
}
