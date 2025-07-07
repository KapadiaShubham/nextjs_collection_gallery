// src/lib/getProducts.js
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export async function getAllProducts() {
  await connectDB(); // connect to MongoDB
  const products = await Product.find().sort({ createdAt: -1 }).lean(); // lean() = better performance
  return products;
}
