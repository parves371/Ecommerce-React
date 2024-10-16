"use client"
import Breadcrumb from "@/component/shope/Wishlist/Breadcrumb";
import WishlistTable from "@/component/shope/Wishlist/WishlistTableProps ";
import { useState } from "react";

const WishlistPage = () => {
  const [products, setProducts] = useState([
    {
      imageUrl: "/imgs/shop/product-1-1.jpg",
      productName: "J.Crew Mercantile Women's Short-Sleeve",
      productUrl: "/shop-product-right",
      price: 65.0,
      stockStatus: "In Stock",
      inStock: true,
      actionLabel: "Add to cart",
    },
    {
      imageUrl: "/imgs/shop/product-2-1.jpg",
      productName: "Amazon Essentials Women's Tank",
      productUrl: "/shop-product-right",
      price: 75.0,
      stockStatus: "In Stock",
      inStock: true,
      actionLabel: "Add to cart",
    },
    {
      imageUrl: "/imgs/shop/product-3-1.jpg",
      productName: "Amazon Brand - Daily Ritual Women's Jersey",
      productUrl: "/shop-product-right",
      price: 62.0,
      stockStatus: "Out of Stock",
      inStock: false,
      actionLabel: "Contact Us",
    },
  ]);

  const handleActionClick = (index: number) => {
    console.log(`Action clicked on product ${index}`);
  };

  const handleRemoveClick = (index: number) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <main className="main">
      <Breadcrumb
        links={[
          { label: "Home", url: "/" },
          { label: "Shop", url: "/shop" },
          { label: "Wishlist", url: "/shop/wishlist" },
        ]}
      />
      <section className="mt-50 mb-50">
        <div className="container">
          <WishlistTable
            products={products}
            onActionClick={handleActionClick}
            onRemoveClick={handleRemoveClick}
          />
        </div>
      </section>
    </main>
  );
};

export default WishlistPage;
