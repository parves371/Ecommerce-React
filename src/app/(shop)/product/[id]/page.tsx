"use client";
import ImageGallery from "@/component/shope/single-product/ImageGallery";
import ProductDetail from "@/component/shope/single-product/ProductDetail";
import ProductTabs from "@/component/shope/single-product/product-tab/ProductTabs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import singleProduct from "@/../data/singleproduct-details.json";

// Define the shape of each product in the JSON file
interface Product {
  id: number;
  imgSrcDefault: string;
  mainImages: string[];
  thumbnails: string[];
  title: string;
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

// Define the shape of the route parameters
interface Params {
  id: string;
}

// Main images and thumbnails for the ImageGallery component

const Page: React.FC<{ params: Params }> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);

  console.log({ product });

  useEffect(() => {
    const productData = singleProduct.find((item) => item.id === params.id) as
      | Product
      | undefined;

    if (productData) {
      setProduct(productData);
    }
  }, [params.id]);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span></span> Fashion
            <span></span> {product.title}
          </div>
        </div>
      </div>

      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="product-detail accordion-detail">
                <div className="row mb-50">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    {/* Image slider */}
                    <ImageGallery
                      mainImages={product.mainImages}
                      thumbnails={product.thumbnails}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <ProductDetail
                      id={product.id}
                      imgSrcDefault={product.imgSrcDefault}
                      title={product.title}
                      brand={product.brand}
                      rating={product.rating}
                      reviews={product.reviews}
                      price={product.price}
                      oldPrice={product.oldPrice}
                      discount={product.discount}
                      description={product.description}
                      warranty={product.warranty}
                      returnPolicy={product.returnPolicy}
                      cashOnDelivery={product.cashOnDelivery}
                      colors={product.colors}
                      sizes={product.sizes}
                      sku={product.sku}
                      tags={product.tags}
                      stock={product.stock}
                    />
                    {/* Detail Information */}
                  </div>
                </div>
                <ProductTabs id={product.id} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
