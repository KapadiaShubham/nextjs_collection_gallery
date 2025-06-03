// import Image from "next/image";
import { CldImage } from "next-cloudinary";
// import Image from "next/image";

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
    <div className="group max-w-xs bg-white shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] cursor-pointer">
      <div className="w-full aspect-[70/104] overflow-hidden">
        <CldImage
          src={product.image_urls[0]}
          alt={`${product.SKU} - ${product.colorName}`}
          width={200}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-103"
        />
        {/* <Image
          src={product.image_urls[0]}
          alt={`${product.SKU} - ${product.colorName}`}
          width={200}
          height={400}
          className="w-full h-full object-cover"
        /> */}
      </div>
      <div className="py-2 px-4">
        <span className="text-neutral-800 font-medium text-base sm:text-lg tracking-wide">
          {product.SKU} - {product.colorName}
        </span>
        {/* <p className="text-indigo-600 font-bold text-xl mb-4">{product.Price}</p> */}
        {/* <h3 className="text-gray-900 mb-2">{product.colorName}</h3> */}
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
