// import Image from "next/image";
import { CldImage } from "next-cloudinary";
// import Image from "next/image";

// "sku": "Dhunki 4121",
// "fabric": "Premium solid Georgette, inner Lycra",
// "color": "Black",
// "imageUrl": "https://res.cloudinary.com/drtnydjni/image/upload/v1748845353/Dhunki-4121-Black_nnmtcq.jpg",
// "specialty": "Attractive designer dress, stylish sleeve",
// "priceStr": "₹399×4=₹1596",
//       "price": 399,
// "sizes": "S(36) M(38) L(40) XL(42)",
// "sleeveType": "Short designer",
// "catalogue": "4 pcs",
// "gst5Percent": "Extra",
// "singleAvailable": "No"

export default function ProductCard({ product }) {
  return (<>
    <div className="group max-w-xs bg-white shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] cursor-pointer">
      <div className="w-full aspect-[70/104] overflow-hidden">
        <CldImage
          src={product.imageUrl}
          alt={`${product.sku} - ${product.color}`}
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
          {product.sku} - {product.color}
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
