import ProductGallery from "./components/ProductGallery";
import allProducts from './data/temp_data.json';

export default function Home() {
  return (
    <>
    <ProductGallery title='New Arrivals' products={allProducts['Long Dress']}/>
    </>
  );
}
