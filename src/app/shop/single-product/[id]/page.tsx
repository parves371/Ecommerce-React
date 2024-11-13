"use client";
import ImageGallery from "@/component/shope/single-product/ImageGallery";
import ProductDetail from "@/component/shope/single-product/ProductDetail";
import Link from "next/link";
import React from "react";

interface Params {
  id: string;
}
const mainImages = [
  "/imgs/shop/product-16-2.jpg",
  "/imgs/shop/product-16-1.jpg",
  "/imgs/shop/product-16-3.jpg",
  "/imgs/shop/product-16-4.jpg",
  "/imgs/shop/product-16-5.jpg",
  "/imgs/shop/product-16-6.jpg",
  "/imgs/shop/product-16-7.jpg",
];

const thumbnails = [
  "/imgs/shop/thumbnail-3.jpg",
  "/imgs/shop/thumbnail-4.jpg",
  "/imgs/shop/thumbnail-5.jpg",
  "/imgs/shop/thumbnail-6.jpg",
  "/imgs/shop/thumbnail-7.jpg",
  "/imgs/shop/thumbnail-8.jpg",
  "/imgs/shop/thumbnail-9.jpg",
];
const Page = ({ params }: { params: Params }) => {
  console.log(params.id); // Log the `id` from the URL
  return (
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span></span> Fashion
            <span></span> Abstract Print Patchwork Dress
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
                    <ImageGallery
                      mainImages={mainImages}
                      thumbnails={thumbnails}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <ProductDetail
                      title="Colorful Pattern Shirts HD450"
                      brand="Bootstrap"
                      rating={90}
                      reviews={25}
                      price={120}
                      oldPrice={200}
                      discount={40}
                      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                      warranty="1 Year AL Jazeera Brand Warranty"
                      returnPolicy="30 Day Return Policy"
                      cashOnDelivery={true}
                      colors={[
                        "Red",
                        "Yellow",
                        "White",
                        "Orange",
                        "Cyan",
                        "Green",
                        "Purple",
                      ]}
                      sizes={["S", "M", "L", "XL", "XXL"]}
                      sku="FWM15VKT"
                      tags={["Cloth", "Women", "Dress"]}
                      stock={8}
                    />
                    {/* <!-- Detail Info --> */}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
