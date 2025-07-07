// src/lib/getProducts.js
export async function getAllProducts() {
  console.log("BASE_URL:", process.env.NEXT_PUBLIC_BASE_URL);
  const res = await fetch(`${process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    next: { revalidate: 60*60*24 }, // Revalidate every N seconds
    // cache: "no-store", // Important if you want fresh data every time
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}