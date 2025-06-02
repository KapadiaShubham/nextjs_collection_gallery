import ProductGallery from "../components/ProductGallery";
import allProducts from '../data/temp_data.json';

export default function TshirtTops() {
  return (
    <>
      <ProductGallery title="T-shirt & Tops" products={allProducts['Long Dress']}/>
    </>
  );
}
