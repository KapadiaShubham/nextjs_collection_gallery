import ProductGallery from "../components/ProductGallery";
import allProducts from '../data/temp_data.json';

export default function WesternWear() {
  return (
    <>
    <ProductGallery title='Western Wear' products={allProducts['Long Dress']}/>
    </>
  );
}
