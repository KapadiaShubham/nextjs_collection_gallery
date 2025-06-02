/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import ProductCard from './ProductCard';

type ProductImages = {
  color: string;
  image_urls: string[];
};

type Product = {
  SKU: string;
  Fabric: string;
  Specialty: string;
  Colors: number;
  Images: ProductImages[];
  Price: string;
  Sizes: string[];
  "Sleeve Type": string;
  Catalogue: string;
  "GST 5%": string;
  "Single Available": string;
};

type ProductCategoryData = {
  [category: string]: Product[];
};

type ProductGalleryProps = {
  title: string;
  products: Product[];
};


// const products = [
//   'https://res.cloudinary.com/drtnydjni/image/upload/v1748404526/dress6_swrkzw.jpg',
//   "https://res.cloudinary.com/drtnydjni/image/upload/v1748404525/dress2_vqtf4y.jpg",
//   "https://res.cloudinary.com/drtnydjni/image/upload/v1748404525/dress3_efose6.jpg",
//   "https://res.cloudinary.com/drtnydjni/image/upload/v1748404520/dress5_old2q6.jpg",
//   "https://res.cloudinary.com/drtnydjni/image/upload/v1748404520/dress7_ecsjjf.jpg",
//   "https://res.cloudinary.com/drtnydjni/image/upload/v1748404504/dress4_qeu6p0.jpg",
//   "https://res.cloudinary.com/drtnydjni/image/upload/v1748404502/dress1_zu60oa.jpg",
//   "https://res.cloudinary.com/drtnydjni/image/upload/v1748404498/dress8_xbistp.jpg",
//   // "https://res.cloudinary.com/drtnydjni/image/upload/v1748404493/dress9_mayjbp.jpg",
// ]

export default function ProductGallery({ title, products }: ProductGalleryProps) {

  const productVariants = products.flatMap((product) =>
    product.Images.map((image) => ({
      // ...product,
      SKU:product.SKU,
      Fabric:product.Fabric,
      Specialty:product.Specialty,
      Colors:product.Colors,
      Price:product.Price,
      Sizes:product.Sizes,
      "Sleeve Type":product["Sleeve Type"],
      Catalogue:product.Catalogue,
      "GST 5%":product["GST 5%"],
      "Single Available":product["Single Available"],
      colorName: image.color,
      image_urls: image.image_urls
    }))
  );

  return (
    <section className="py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">Find your perfect outfit from our elegant styles</p>
      </div>

      <div className='p-2 md:p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10'>
        {productVariants.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </section>
  );
}
