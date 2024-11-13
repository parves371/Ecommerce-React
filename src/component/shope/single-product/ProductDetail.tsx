// components/ProductDetail.tsx
import Link from "next/link";
import React, { useState } from "react";

interface ProductDetailProps {
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

const ProductDetail: React.FC<ProductDetailProps> = ({
  title,
  brand,
  rating,
  reviews,
  price,
  oldPrice,
  discount,
  description,
  warranty,
  returnPolicy,
  cashOnDelivery,
  colors,
  sizes,
  sku,
  tags,
  stock,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  return (
    <div className="detail-info">
      <h2 className="title-detail">{title}</h2>
      <div className="product-detail-rating">
        <div className="pro-details-brand">
          <span>
            Brands: <Link href="#">{brand}</Link>
          </span>
        </div>
        <div className="product-rate-cover text-end">
          <div className="product-rate d-inline-block">
            <div
              className="product-rating"
              style={{ width: `${rating}%` }}
            ></div>
          </div>
          <span className="font-small ml-5 text-muted">
            ({reviews} reviews)
          </span>
        </div>
      </div>
      <div className="clearfix product-price-cover">
        <div className="product-price primary-color float-left">
          <ins>
            <span className="text-brand">${price.toFixed(2)}</span>
          </ins>
          <ins>
            <span className="old-price font-md ml-15">
              ${oldPrice.toFixed(2)}
            </span>
          </ins>
          <span className="save-price font-md color3 ml-15">
            {discount}% Off
          </span>
        </div>
      </div>
      <div className="bt-1 border-color-1 mt-15 mb-15"></div>
      <div className="short-desc mb-30">
        <p>{description}</p>
      </div>
      <div className="product_sort_info font-xs mb-30">
        <ul>
          <li className="mb-10">
            <i className="fi-rs-crown mr-5"></i> {warranty}
          </li>
          <li className="mb-10">
            <i className="fi-rs-refresh mr-5"></i> {returnPolicy}
          </li>
          {cashOnDelivery && (
            <li>
              <i className="fi-rs-credit-card mr-5"></i> Cash on Delivery
              available
            </li>
          )}
        </ul>
      </div>
      <div className="attr-detail attr-color mb-15">
        <strong className="mr-10">Color</strong>
        <ul className="list-filter color-filter">
          {colors.map((color) => (
            <li key={color} className={selectedColor === color ? "active" : ""}>
              <Link
                href="#"
                onClick={() => setSelectedColor(color)}
                data-color={color}
              >
                <span className={`product-color-${color.toLowerCase()}`}></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="attr-detail attr-size">
        <strong className="mr-10">Size</strong>
        <ul className="list-filter size-filter font-small">
          {sizes.map((size) => (
            <li key={size} className={selectedSize === size ? "active" : ""}>
              <Link href="#" onClick={() => setSelectedSize(size)}>
                {size}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bt-1 border-color-1 mt-30 mb-30"></div>
      <div className="detail-extralink">
        <div className="detail-qty border radius">
          <Link
            href="#"
            className="qty-down"
            onClick={() => handleQuantityChange("decrement")}
          >
            <i className="fi-rs-angle-small-down"></i>
          </Link>
          <span className="qty-val">{quantity}</span>
          <Link
            href="#"
            className="qty-up"
            onClick={() => handleQuantityChange("increment")}
          >
            <i className="fi-rs-angle-small-up"></i>
          </Link>
        </div>
        <div className="product-extra-link2">
          <button type="button" className="button button-add-to-cart">
            Add to cart
          </button>
          <Link
            aria-label="Add To Wishlist"
            className="action-btn hover-up"
            href="#"
          >
            <i className="fi-rs-heart"></i>
          </Link>
          <Link aria-label="Compare" className="action-btn hover-up" href="#">
            <i className="fi-rs-shuffle"></i>
          </Link>
        </div>
      </div>
      <ul className="product-meta font-xs color-grey mt-50">
        <li className="mb-5">
          SKU: <a href="#">{sku}</a>
        </li>
        <li className="mb-5">
          Tags:{" "}
          {tags.map((tag, index) => (
            <React.Fragment key={tag}>
              <a href="#" rel="tag">
                {tag}
              </a>
              {index < tags.length - 1 ? ", " : ""}
            </React.Fragment>
          ))}
        </li>
        <li>
          Availability:
          <span className="in-stock text-success ml-5">
            {stock} Items In Stock
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetail;
