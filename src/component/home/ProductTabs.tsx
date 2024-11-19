"use client";
import Link from "next/link";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "../modal/ProductModal";

// Define types for tab and product objects
type Tab = {
  id: string;
  label: string;
};

type Product = {
  id: number;
  imgSrcDefault: string;
  imgSrcHover: string;
  categoryLink: string;
  category: string;
  productName: string;
  price: number;
  oldPrice: number;
  badgeText: string;
  rating: number;
};

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab-one");

  // Tab data with types
  const tabs: Tab[] = [
    { id: "tab-one", label: "Featured" },
    { id: "tab-two", label: "Popular" },
    { id: "tab-three", label: "New added" },
  ];

  // Product data with types
  const products: Record<string, Product[]> = {
    "tab-one": [
      {
        id: 1,
        imgSrcDefault: "/imgs/shop/product-1-1.jpg",
        imgSrcHover: "/imgs/shop/product-1-2.jpg",
        categoryLink: "/shop-grid-right",
        category: "Clothing",
        productName: "Colorful Pattern Shirts",
        price: 238,
        oldPrice: 245,
        badgeText: "Hot",
        rating: 90,
      },
      {
        id: 2,
        imgSrcDefault: "/imgs/shop/product-2-1.jpg",
        imgSrcHover: "/imgs/shop/product-2-2.jpg",
        categoryLink: "/shop-grid-right",
        category: "Clothing",
        productName: "Colorful Pattern Shirts",
        price: 238.85,
        oldPrice: 245.8,
        badgeText: "New",
        rating: 90,
      },
      {
        id: 3,
        imgSrcDefault: "/imgs/shop/product-3-1.jpg",
        imgSrcHover: "/imgs/shop/product-3-2.jpg",
        categoryLink: "/shop-grid-right",
        category: "Clothing",
        productName: "Colorful Pattern Shirts",
        price: 238.85,
        oldPrice: 245.8,
        badgeText: "Hot",
        rating: 90,
      },
      // Additional products for "Featured" with unique IDs
    ],
    "tab-two": [
      {
        id: 4,
        imgSrcDefault: "/imgs/shop/product-4-1.jpg",
        imgSrcHover: "/imgs/shop/product-4-2.jpg",
        categoryLink: "/shop-grid-right",
        category: "Clothing",
        productName: "Plain Color Pocket Shirts",
        price: 138.85,
        oldPrice: 255.8,
        badgeText: "New",
        rating: 80,
      },
      {
        id: 5,
        imgSrcDefault: "/imgs/shop/product-5-1.jpg",
        imgSrcHover: "/imgs/shop/product-5-2.jpg",
        categoryLink: "/shop-grid-right",
        category: "Clothing",
        productName: "Plain Color Pocket Shirts",
        price: 138.85,
        oldPrice: 255.8,
        badgeText: "New",
        rating: 80,
      },
      {
        id: 6,
        imgSrcDefault: "/imgs/shop/product-6-1.jpg",
        imgSrcHover: "/imgs/shop/product-6-2.jpg",
        categoryLink: "/shop-grid-right",
        category: "Clothing",
        productName: "Plain Color Pocket Shirts",
        price: 138.85,
        oldPrice: 255.8,
        badgeText: "New",
        rating: 80,
      },
      // Additional products for "Popular" with unique IDs
    ],
    "tab-three": [
      {
        id: 7,
        imgSrcDefault: "/imgs/shop/product-7-1.jpg",
        imgSrcHover: "/imgs/shop/product-7-2.jpg",
        categoryLink: "/shop-grid-right",
        category: "Shirts",
        productName: "Vintage Floral Oil Shirts",
        price: 338.85,
        oldPrice: 445.8,
        badgeText: "Best Sell",
        rating: 70,
      },
      {
        id: 8,
        imgSrcDefault: "/imgs/shop/product-8-1.jpg",
        imgSrcHover: "/imgs/shop/product-8-2.jpg",
        categoryLink: "/shop-grid-right",
        category: "Shirts",
        productName: "Vintage Floral Oil Shirts",
        price: 338.85,
        oldPrice: 445.8,
        badgeText: "Best Sell",
        rating: 70,
      },
      {
        id: 9,
        imgSrcDefault: "/imgs/shop/product-9-1.jpg",
        imgSrcHover: "/imgs/shop/product-9-2.jpg",
        categoryLink: "/shop-grid-right",
        category: "Shirts",
        productName: "Vintage Floral Oil Shirts",
        price: 338.85,
        oldPrice: 445.8,
        badgeText: "Sale",
        rating: 70,
      },
      // Additional products for "New added" with unique IDs
    ],
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="product-tabs section-padding position-relative wow fadeIn animated">
      <div className="bg-square"></div>
      <div className="container">
        <div className="tab-header">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  id={`nav-${tab.id}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${tab.id}`}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          <Link href="/shop">
            <span className="view-more d-none d-md-flex">
              View More<i className="fi-rs-angle-double-small-right"></i>
            </span>
          </Link>
        </div>

        <div className="tab-content wow fadeIn animated" id="myTabContent">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${
                activeTab === tab.id ? "show active" : ""
              }`}
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`nav-${tab.id}`}
            >
              <div className="row product-grid-4">
                {products[tab.id].map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    imgSrcDefault={product.imgSrcDefault}
                    imgSrcHover={product.imgSrcHover}
                    categoryLink={product.categoryLink}
                    category={product.category}
                    productName={product.productName}
                    price={product.price}
                    oldPrice={product.oldPrice}
                    badgeText={product.badgeText}
                    rating={product.rating}
                  />
                ))}
              </div>
            </div>
          ))}
          <ProductModal />
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
