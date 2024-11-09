import Image from 'next/image';
import React from 'react';

interface ProductProps {
  productName: string;
  productCategory: string;
  price: string;
  oldPrice: string;
  imageUrl: string;
  hoverImageUrl: string;
  description: string;
  rating: number;
}

const ProductCard: React.FC<ProductProps> = ({
  productName,
  productCategory,
  price,
  oldPrice,
  imageUrl,
  hoverImageUrl,
  description,
  rating,
}) => {
  return (
    <div className="product-cart-wrap">
      <div className="product-img-action-wrap">
        <div className="product-img product-img-zoom">
          <div className="product-img-inner">
            <a href="shop-product-right.html">
              <Image width={293} height={293} className="default-img" src={imageUrl} alt={productName} />
              <Image width={293} height={293} className="hover-img" src={hoverImageUrl} alt={productName} />
            </a>
          </div>
        </div>
        <div className="product-action-1">
          <a
            aria-label="Quick view"
            className="action-btn hover-up"
            data-bs-toggle="modal"
            data-bs-target="#quickViewModal"
          >
            <i className="fi-rs-search"></i>
          </a>
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
        <div className="product-badges product-badges-position product-badges-mrg">
          <span className="hot">Hot</span>
        </div>
      </div>
      <div className="product-content-wrap">
        <div className="product-category">
          <a href="shop-grid-right.html">{productCategory}</a>
        </div>
        <h2>
          <a href="shop-product-right.html">{productName}</a>
        </h2>
        <div className="product-price">
          <span>{price}</span>
          <span className="old-price">{oldPrice}</span>
        </div>
        <p className="mt-15">{description}</p>
        <div className="product-action-1 show">
          <a aria-label="Buy now" className="action-btn" href="shop-cart.html">
            <i className="fi-rs-shopping-bag-add"></i>Add to Cart
          </a>
          <div className="rating-result" title={`${rating}%`}>
            <span>
              <span>{rating}%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
