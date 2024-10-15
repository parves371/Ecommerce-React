"use client";
import Link from "next/link";
import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductTabs = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("tab-one");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="product-tabs section-padding position-relative wow fadeIn animated">
      <div className="bg-square"></div>
      <div className="container">
        <div className="tab-header">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "tab-one" ? "active" : ""
                }`}
                id="nav-tab-one"
                data-bs-toggle="tab"
                data-bs-target="#tab-one"
                type="button"
                role="tab"
                aria-controls="tab-one"
                aria-selected={activeTab === "tab-one"}
                onClick={() => handleTabClick("tab-one")}
              >
                Featured
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "tab-two" ? "active" : ""
                }`}
                id="nav-tab-two"
                data-bs-toggle="tab"
                data-bs-target="#tab-two"
                type="button"
                role="tab"
                aria-controls="tab-two"
                aria-selected={activeTab === "tab-two"}
                onClick={() => handleTabClick("tab-two")}
              >
                Popular
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "tab-three" ? "active" : ""
                }`}
                id="nav-tab-three"
                data-bs-toggle="tab"
                data-bs-target="#tab-three"
                type="button"
                role="tab"
                aria-controls="tab-three"
                aria-selected={activeTab === "tab-three"}
                onClick={() => handleTabClick("tab-three")}
              >
                New added
              </button>
            </li>
          </ul>

          {/* No <a> tag inside Link */}
          <Link href="/shop">
            <span className="view-more d-none d-md-flex">
              View More<i className="fi-rs-angle-double-small-right"></i>
            </span>
          </Link>
        </div>
        <div className="tab-content wow fadeIn animated" id="myTabContent">
          {/* Featured Tab */}
          <div
            className="tab-pane fade show active"
            id="tab-one"
            role="tabpanel"
            aria-labelledby="tab-one"
          >
            <div className="row product-grid-4">
              <ProductCard
                imgSrcDefault="/imgs/shop/product-1-1.jpg"
                imgSrcHover="/imgs/shop/product-1-2.jpg"
                productLink="/shop-product-right"
                categoryLink="/shop-grid-right"
                category="Clothing"
                productName="Colorful Pattern Shirts"
                price="$238.85"
                oldPrice="$245.80"
                badgeText="Hot"
                rating={90}
              />
              <ProductCard
                imgSrcDefault="/imgs/shop/product-2-1.jpg"
                imgSrcHover="/imgs/shop/product-2-2.jpg"
                productLink="/shop-product-right"
                categoryLink="/shop-grid-right"
                category="Clothing"
                productName="Plain Color Pocket Shirts"
                price="$138.85"
                oldPrice="$255.80"
                badgeText="New"
                rating={80}
              />
              <ProductCard
                imgSrcDefault="/imgs/shop/product-3-1.jpg"
                imgSrcHover="/imgs/shop/product-3-2.jpg"
                productLink="/shop-product-right"
                categoryLink="/shop-grid-right"
                category="Shirts"
                productName="Vintage Floral Oil Shirts"
                price="$338.85"
                oldPrice="$445.80"
                badgeText="Best Sell"
                rating={70}
              />
              <ProductCard
                imgSrcDefault="/imgs/shop/product-4-1.jpg"
                imgSrcHover="/imgs/shop/product-4-2.jpg"
                productLink="/shop-product-right"
                categoryLink="/shop-grid-right"
                category="Clothing"
                productName="Colorful Hawaiian Shirts"
                price="$123.85"
                oldPrice="$235.80"
                badgeText="Sale"
                rating={60}
              />
              {/* Add more ProductCard components as needed */}
            </div>
          </div>
          {/* Popular Tab */}
          <div
            className="tab-pane fade"
            id="tab-two"
            role="tabpanel"
            aria-labelledby="tab-two"
          >
            <div className="row product-grid-4">
              <ProductCard
                imgSrcDefault="/imgs/shop/product-1-1.jpg"
                imgSrcHover="/imgs/shop/product-1-2.jpg"
                productLink="/shop-product-right"
                categoryLink="/shop-grid-right"
                category="Clothing"
                productName="Colorful Pattern Shirts"
                price="$238.85"
                oldPrice="$245.80"
                badgeText="Hot"
                rating={90}
              />
              <ProductCard
                imgSrcDefault="/imgs/shop/product-2-1.jpg"
                imgSrcHover="/imgs/shop/product-2-2.jpg"
                productLink="/shop-product-right"
                categoryLink="/shop-grid-right"
                category="Clothing"
                productName="Plain Color Pocket Shirts"
                price="$138.85"
                oldPrice="$255.80"
                badgeText="New"
                rating={80}
              />
              <ProductCard
                imgSrcDefault="/imgs/shop/product-3-1.jpg"
                imgSrcHover="/imgs/shop/product-3-2.jpg"
                productLink="/shop-product-right"
                categoryLink="/shop-grid-right"
                category="Shirts"
                productName="Vintage Floral Oil Shirts"
                price="$338.85"
                oldPrice="$445.80"
                badgeText="Best Sell"
                rating={70}
              />
              <ProductCard
                imgSrcDefault="/imgs/shop/product-4-1.jpg"
                imgSrcHover="/imgs/shop/product-4-2.jpg"
                productLink="/shop-product-right"
                categoryLink="/shop-grid-right"
                category="Clothing"
                productName="Colorful Hawaiian Shirts"
                price="$123.85"
                oldPrice="$235.80"
                badgeText="Sale"
                rating={60}
              />
              {/* Add more ProductCard components as needed */}
            </div>
          </div>
          {/* New Arrivals Tab */}
          <div
            className="tab-pane fade"
            id="tab-three"
            role="tabpanel"
            aria-labelledby="tab-three"
          >
            <div className="row product-grid-4">
              <ProductCard
                imgSrcDefault="/imgs/shop/product-1-1.jpg"
                imgSrcHover="/imgs/shop/product-1-2.jpg"
                productLink="/shop-product-right"
                categoryLink="/shop-grid-right"
                category="Clothing"
                productName="Colorful Pattern Shirts"
                price="$238.85"
                oldPrice="$245.80"
                badgeText="Hot"
                rating={90}
              />
              <ProductCard
                imgSrcDefault="/imgs/shop/product-2-1.jpg"
                imgSrcHover="/imgs/shop/product-2-2.jpg"
                productLink="/shop-product-right"
                categoryLink="/shop-grid-right"
                category="Clothing"
                productName="Plain Color Pocket Shirts"
                price="$138.85"
                oldPrice="$255.80"
                badgeText="New"
                rating={80}
              />
              <ProductCard
                imgSrcDefault="/imgs/shop/product-3-1.jpg"
                imgSrcHover="/imgs/shop/product-3-2.jpg"
                productLink="/shop-product-right"
                categoryLink="/shop-grid-right"
                category="Shirts"
                productName="Vintage Floral Oil Shirts"
                price="$338.85"
                oldPrice="$445.80"
                badgeText="Best Sell"
                rating={70}
              />
              <ProductCard
                imgSrcDefault="/imgs/shop/product-4-1.jpg"
                imgSrcHover="/imgs/shop/product-4-2.jpg"
                productLink="/shop-product-right"
                categoryLink="/shop-grid-right"
                category="Clothing"
                productName="Colorful Hawaiian Shirts"
                price="$123.85"
                oldPrice="$235.80"
                badgeText="Sale"
                rating={60}
              />
              {/* Add more ProductCard components as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
