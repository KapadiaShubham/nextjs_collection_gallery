// import ProductGallery from "../components/ProductGallery";
// import allProducts from '../data/temp_data.json';

export default function Kurtis() {
  const title = 'Kurtis';
  return (
    <>
      {/* <ProductGallery title='Kurtis' products={allProducts['Long Dress']}/> */}
      <section className="py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600 mt-2">Find your perfect outfit from our elegant styles</p>
        </div>
      </section>
    </>
  );
}