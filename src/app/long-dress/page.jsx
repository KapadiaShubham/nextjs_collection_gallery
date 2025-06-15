import ProductGallery from "../components/ProductGallery";
import allProducts from '../data/temp_data.json';

export default function LongDress() {
  return (
    <>
      <ProductGallery title='Long Dress' products={allProducts['Long Dress']}/>
    </>
  );
}
