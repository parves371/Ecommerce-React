"use server";

import data from "../data/singleproduct-details.json";

// Define the Product interface to match your data structure
interface Product {
  id: string;
  title: string; // Use title instead of name
  brand: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice: number;
  discount: number;
  description: string;
  warranty: string;
  returnPolicy: string;
  cashOnDelivery: boolean;
  colors: string[];
  sizes: string[];
  sku: string;
  tags: string[];
  stock: number;
}

// CartData array to store added products
export const CartData: Product[] = [];

// Function to add a product to the cart
export const addToCart = (id: number): Product => {
  // Find the product by ID
  const product = data.find((item) => item.id === String(id)) as
    | Product
    | undefined;

  // If product not found, throw an error
  if (!product) {
    throw new Error("Product not found");
  }

  // Add the product to the CartData array
  CartData.push(product);

  console.log(CartData);

  return product;
};
