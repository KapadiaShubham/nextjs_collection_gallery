// app/api/products/route.js
import { getAllProducts } from '@/lib/getProducts';

export async function GET() {
  const products = await getAllProducts(); // reuse
  return Response.json(products);
}
