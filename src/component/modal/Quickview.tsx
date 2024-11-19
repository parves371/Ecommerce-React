import React from "react";
import { Modal } from "./Modal";
import Image from "next/image";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mainImages = [
  "/imgs/shop/product-16-1.jpg",
  "/imgs/shop/product-16-2.jpg",
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

export const QuikView: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="detail-gallery">
            <span className="zoom-icon">
              <i className="fi-rs-search"></i>
            </span>
            <div className="product-image-slider">
              {mainImages.map((src, idx) => (
                <figure key={idx} className="border-radius-10">
                  <Image
                    width={370}
                    height={433}
                    src={src}
                    alt={`Product image ${idx + 1}`}
                  />
                </figure>
              ))}
            </div>
            <div className="slider-nav-thumbnails pl-15 pr-15">
              {thumbnails.map((src, idx) => (
                <div key={idx}>
                  <Image
                    width={61}
                    height={61}
                    src={src}
                    alt={`Thumbnail ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="detail-info">
            <h3 className="title-detail mt-30">
              Colorful Pattern Shirts HD450
            </h3>
            <div className="product-detail-rating">
              <div className="pro-details-brand">
                <span>
                  Brands: <a href="#">Bootstrap</a>
                </span>
              </div>
              <div className="product-rate-cover text-end">
                <div className="product-rate d-inline-block">
                  <div
                    className="product-rating"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <span className="font-small ml-5 text-muted">(25 reviews)</span>
              </div>
            </div>
            <div className="clearfix product-price-cover">
              <div className="product-price primary-color float-left">
                <ins>
                  <span className="text-brand">$120.00</span>
                </ins>
                <ins>
                  <span className="old-price font-md ml-15">$200.00</span>
                </ins>
                <span className="save-price font-md color3 ml-15">25% Off</span>
              </div>
            </div>
            <div className="bt-1 border-color-1 mt-15 mb-15"></div>
            <div className="short-desc mb-30">
              <p className="font-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam rem officia, corrupti reiciendis minima nisi modi!
              </p>
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
              </ul>
            </div>
            <div className="bt-1 border-color-1 mt-30 mb-30"></div>
            <div className="detail-extralink">
              <div className="detail-qty border radius">
                <button className="qty-down">
                  <i className="fi-rs-angle-small-down"></i>
                </button>
                <span className="qty-val">1</span>
                <button className="qty-up">
                  <i className="fi-rs-angle-small-up"></i>
                </button>
              </div>
              <div className="product-extra-link2">
                <button type="button" className="button button-add-to-cart">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
