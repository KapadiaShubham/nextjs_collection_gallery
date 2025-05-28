// app/gallery/page.tsx
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});



async function fetchImages(): Promise<string[]> {
  try {
    const result = await cloudinary.search
      .expression("resource_type:image")
      .sort_by("created_at", "desc")
      .max_results(10)
      .execute();

    const images = result.resources.map((img: any) => img.secure_url);
    console.log("Server Fetched Images:", images); // 👀 Shows in server logs
    return images;
  } catch (err) {
    console.error("Cloudinary fetch error:", err);
    return [];
  }
}

export default async function GalleryPage() {
  const images = await fetchImages();

  return (
    <div>
      <h1>Cloudinary Images (App Router)</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`img-${index}`}
            style={{ width: "200px", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
}
