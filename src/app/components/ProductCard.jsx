// src/app/components/ProductCard.jsx
import { CldImage } from "next-cloudinary";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
      <div className="w-full aspect-[70/104] overflow-hidden">
        <CldImage
          src={product.imageUrl}
          alt={`${product.sku} - ${product.color}`}
          width={300}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="py-3 px-4">
        <h3 className="text-gray-800 text-lg font-semibold tracking-wide">
          {product.sku} - {product.color}
        </h3>
      </div>
    </div>
  );
}
