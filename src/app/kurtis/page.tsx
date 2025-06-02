import ProductGallery from "../components/ProductGallery";
import allProducts from '../data/temp_data.json';

export default function Kurtis() {
  return (
    <>
      <ProductGallery title='Kurtis' products={allProducts['Long Dress']}/>
    </>
  );
}