// import Image from "next/image";
import { CldImage } from "next-cloudinary";

interface ProductCardProps {
  src: string;
  idx: number;
}

export default function ProductCard({ src, idx }: ProductCardProps) {
  return (<>
    <div className="flex items-center aspect-[70/100] justify-center overflow-hidden transition-transform duration-300 hover:scale-105">
      <CldImage
        src={src}
        alt={`Dress ${idx + 1}`}
        width={200}
        height={400}
        className="rounded-lg w-fit object-cover h-full"
      />
    </div>
  </>
  );
}
