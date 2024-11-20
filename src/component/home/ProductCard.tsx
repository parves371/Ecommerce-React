"use client";

import { addToCart } from "@/lib/features/cart/cartSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/lib/hooks";
import {
  faEye,
  faHeart,
  faShuffle,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import QuikView from "../modal/Quickview";

interface ProductCardProps {
  imgSrcDefault: string;
  imgSrcHover: string;
  categoryLink: string;
  category: string;
  productName: string;
  price: number;
  oldPrice?: number;
  badgeText?: string;
  rating?: number; // Rating as a percentage
  id: number ;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  imgSrcDefault,
  imgSrcHover,
  categoryLink,
  category,
  productName,
  price,
  oldPrice,
  badgeText,
  rating = 90,
}) => {
  const fullStars = Math.floor(rating / 20);
  const halfStar = rating % 20 >= 10 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addCart = () => {
    const product = {
      id,
      title: productName,
      price,
      quantity: 1,
      imgSrcDefault,
    };
    dispatch(addToCart(product));
    toast.success(`${productName} added to cart!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <>
      {/* Quick View Modal */}
      <QuikView isOpen={isModalOpen} onClose={closeModal} id={id} />

      <div className="col-lg-3 col-md-4 col-6">
        <div className="product-cart-wrap mb-30">
          <div className="product-img-action-wrap">
            <div className="product-img product-img-zoom">
              <Link href={`/product/${id}`}>
                <Image
                  className="default-img"
                  src={imgSrcDefault}
                  alt={`${productName} Default`}
                  width={400}
                  height={400}
                />
                <Image
                  className="hover-img"
                  src={imgSrcHover}
                  alt={`${productName} Hover`}
                  width={400}
                  height={400}
                />
              </Link>
            </div>
            <div className="product-action-1">
              <button
                onClick={openModal}
                aria-label="Quick view"
                className="action-btn hover-up"
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
              <Link
                href="shop-wishlist.html"
                aria-label="Add To Wishlist"
                className="action-btn hover-up"
              >
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <Link
                href="shop-compare.html"
                aria-label="Compare"
                className="action-btn hover-up"
              >
                <FontAwesomeIcon icon={faShuffle} />
              </Link>
            </div>

            {badgeText && (
              <div className="product-badges product-badges-position product-badges-mrg">
                <span className={badgeText.toLowerCase()}>{badgeText}</span>
              </div>
            )}
          </div>

          <div className="product-content-wrap">
            <div className="product-category">
              <Link href={categoryLink}>{category}</Link>
            </div>
            <h2>
              <Link href={`/product/${id}`}>{productName}</Link>
            </h2>

            {/* Rating Section */}
            <div className="flex items-center" title={`${rating}%`}>
              {Array(fullStars)
                .fill(0)
                .map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} style={{ color: "#ffb300" }} />
                ))}
              {halfStar === 1 && <FontAwesomeIcon icon={faStarHalfAlt} style={{ color: "#ffb300" }} />}
              {Array(emptyStars)
                .fill(0)
                .map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} style={{ color: "#ccc" }} />
                ))}
              <span style={{ marginLeft: "8px" }}>{rating}%</span>
            </div>

            <div className="product-price">
              <span>${price.toFixed(2)}</span>
              {oldPrice && <span className="old-price">${oldPrice.toFixed(2)}</span>}
            </div>

            <div className="product-action-1 show">
              <button
                aria-label="Add To Cart"
                className="action-btn hover-up"
                onClick={addCart}
              >
                <i className="fi-rs-shopping-bag-add"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
