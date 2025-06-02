// import Image from "next/image";
import { CldImage } from "next-cloudinary";

type Product = {
  SKU: string;
  Fabric: string;
  Specialty: string;
  Colors: number;
  // Images: ProductImages[];
  Price: string;
  Sizes: string[];
  "Sleeve Type": string;
  Catalogue: string;
  "GST 5%": string;
  "Single Available": string;
  colorName: string;
  image_urls: string[];
};

type ProductCardProps = {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (<>
    <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] cursor-pointer">
      <div className="w-full aspect-[70/104]">
        <CldImage
          src={product.image_urls[0]}
          alt={`${product.SKU} - ${product.colorName}`}
          width={200}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-gray-900 font-semibold text-lg mb-2">Product Name</h2>
        <p className="text-indigo-600 font-bold text-xl mb-4">$99.99</p>
        <h3 className="text-gray-900 mb-2">Color:__, Fabric:__</h3>
        {/* <button
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Add to Cart
        </button> */}
      </div>
    </div>
  </>
  );
}
