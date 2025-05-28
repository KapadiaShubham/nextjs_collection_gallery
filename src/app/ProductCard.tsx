import Image from "next/image";

interface ProductCardProps {
  src: string;
  idx: number;
}

export default function ProductCard({ src, idx }: ProductCardProps) {
  return (<>
    {/* <div
      className="transition-transform duration-300 hover:scale-105 overflow-hidden rounded-lg shadow-md"
    >
      <Image
        src={src}
        alt={`Dress ${idx + 1}`}
        width={200}
        height={400}
        className="object-cover h-full rounded-lg"
      />
    </div> */}
    {/* <div
      className="w-[calc(25%-0.5rem)] aspect-[3/4] transition-transform duration-300 hover:scale-105 overflow-hidden rounded-lg shadow-md"
    >
      <Image
        src={src}
        alt={`Dress ${idx + 1}`}
        width={200}
        height={400}
        // fill
        className="object-cover h-full rounded-lg"
      />
    </div> */}
    <div className="flex items-center aspect-[70/100] justify-center overflow-hidden transition-transform duration-300 hover:scale-105">
      <Image
        src={src}
        alt={`Dress ${idx + 1}`}
        width={200}
        height={400}
        className="rounded-lg w-full object-cover h-full"
      />
    </div>
  </>
  );
}
