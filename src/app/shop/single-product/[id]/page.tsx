"use client"
import ImageGallery from "@/component/shope/single-product/ImageGallery";
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
                    <div className="detail-info">
                      <h2 className="title-detail">
                        Colorful Pattern Shirts HD450
                      </h2>
                      <div className="product-detail-rating">
                        <div className="pro-details-brand">
                          <span>
                            {" "}
                            Brands: <a href="shop-grid-right.html">Bootstrap</a>
                          </span>
                        </div>
                        <div className="product-rate-cover text-end">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (25 reviews)
                          </span>
                        </div>
                      </div>
                      <div className="clearfix product-price-cover">
                        <div className="product-price primary-color float-left">
                          <ins>
                            <span className="text-brand">$120.00</span>
                          </ins>
                          <ins>
                            <span className="old-price font-md ml-15">
                              $200.00
                            </span>
                          </ins>
                          <span className="save-price  font-md color3 ml-15">
                            25% Off
                          </span>
                        </div>
                      </div>
                      <div className="bt-1 border-color-1 mt-15 mb-15"></div>
                      <div className="short-desc mb-30">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Aliquam rem officia, corrupti reiciendis minima
                          nisi modi, quasi, odio minus dolore impedit fuga eum
                          eligendi? Officia doloremque facere quia. Voluptatum,
                          accusantium!
                        </p>
                      </div>
                      <div className="product_sort_info font-xs mb-30">
                        <ul>
                          <li className="mb-10">
                            <i className="fi-rs-crown mr-5"></i> 1 Year AL
                            Jazeera Brand Warranty
                          </li>
                          <li className="mb-10">
                            <i className="fi-rs-refresh mr-5"></i> 30 Day Return
                            Policy
                          </li>
                          <li>
                            <i className="fi-rs-credit-card mr-5"></i> Cash on
                            Delivery available
                          </li>
                        </ul>
                      </div>
                      <div className="attr-detail attr-color mb-15">
                        <strong className="mr-10">Color</strong>
                        <ul className="list-filter color-filter">
                          <li>
                            <a href="#" data-color="Red">
                              <span className="product-color-red"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-color="Yellow">
                              <span className="product-color-yellow"></span>
                            </a>
                          </li>
                          <li className="active">
                            <a href="#" data-color="White">
                              <span className="product-color-white"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-color="Orange">
                              <span className="product-color-orange"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-color="Cyan">
                              <span className="product-color-cyan"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-color="Green">
                              <span className="product-color-green"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-color="Purple">
                              <span className="product-color-purple"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="attr-detail attr-size">
                        <strong className="mr-10">Size</strong>
                        <ul className="list-filter size-filter font-small">
                          <li>
                            <a href="#">S</a>
                          </li>
                          <li className="active">
                            <a href="#">M</a>
                          </li>
                          <li>
                            <a href="#">L</a>
                          </li>
                          <li>
                            <a href="#">XL</a>
                          </li>
                          <li>
                            <a href="#">XXL</a>
                          </li>
                        </ul>
                      </div>
                      <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                      <div className="detail-extralink">
                        <div className="detail-qty border radius">
                          <a href="#" className="qty-down">
                            <i className="fi-rs-angle-small-down"></i>
                          </a>
                          <span className="qty-val">1</span>
                          <a href="#" className="qty-up">
                            <i className="fi-rs-angle-small-up"></i>
                          </a>
                        </div>
                        <div className="product-extra-link2">
                          <button
                            type="submit"
                            className="button button-add-to-cart"
                          >
                            Add to cart
                          </button>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn hover-up"
                            href="shop-wishlist.html"
                          >
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn hover-up"
                            href="shop-compare.html"
                          >
                            <i className="fi-rs-shuffle"></i>
                          </a>
                        </div>
                      </div>
                      <ul className="product-meta font-xs color-grey mt-50">
                        <li className="mb-5">
                          SKU: <a href="#">FWM15VKT</a>
                        </li>
                        <li className="mb-5">
                          Tags:{" "}
                          <a href="#" rel="tag">
                            Cloth
                          </a>
                          ,{" "}
                          <a href="#" rel="tag">
                            Women
                          </a>
                          ,{" "}
                          <a href="#" rel="tag">
                            Dress
                          </a>{" "}
                        </li>
                        <li>
                          Availability:
                          <span className="in-stock text-success ml-5">
                            8 Items In Stock
                          </span>
                        </li>
                      </ul>
                    </div>
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
