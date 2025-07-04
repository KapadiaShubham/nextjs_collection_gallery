// src/lib/getProducts.js
export async function getAllProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    next: { revalidate: 60*60*24 }, // Revalidate every N seconds
    // cache: "no-store", // Important if you want fresh data every time
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}