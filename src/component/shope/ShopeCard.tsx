import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

// Define the props for the ProductCard component
interface ProductCardProps {
  productName: string;
  productCategory: string;
  productPrice: number;
  oldPrice?: number;
  rating: number;
  badgeText: string;
  imageUrl: string;
  hoverImageUrl: string;
}

const ShopeCard: FC<ProductCardProps> = ({
  productName,
  productCategory,
  productPrice,
  oldPrice,
  rating,
  badgeText,
  imageUrl,
  hoverImageUrl,
}) => {
  // Calculate number of full, half, and empty stars
  const fullStars = Math.floor(rating / 20); // 5-star system, so each star represents 20%
  const halfStar = rating % 20 >= 10 ? 1 : 0; // If remainder is 10 or more, show half star
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="col-lg-4 col-md-4 col-12 col-sm-6">
      <div className="product-cart-wrap mb-30">
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
            <Link href="/shop-product-right" passHref>
              <Image
                src={imageUrl}
                alt={`${productName} Image`}
                width={300}
                height={300}
                className="default-img"
              />
              <Image
                src={hoverImageUrl}
                alt={`${productName} Hover Image`}
                width={300}
                height={300}
                className="hover-img"
              />
            </Link>
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
              href="/shop-wishlist"
            >
              <i className="fi-rs-heart"></i>
            </a>
            <a
              aria-label="Compare"
              className="action-btn hover-up"
              href="/shop-compare"
            >
              <i className="fi-rs-shuffle"></i>
            </a>
          </div>
          <div className="product-badges product-badges-position product-badges-mrg">
            <span className={badgeText.toLowerCase()}>{badgeText}</span>
          </div>
        </div>
        <div className="product-content-wrap">
          <div className="product-category">
            <Link href="/shop-grid-right" passHref>
              {productCategory}
            </Link>
          </div>
          <h2>
            <Link href="/shop-product-right" passHref>
              {productName}
            </Link>
          </h2>
          <div className="flex items-center " title={`${rating}%`}>
            {/* Render full stars */}
            {Array(fullStars)
              .fill(0)
              .map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  style={{ color: "#ffb300" }} // Star color
                />
              ))}

            {/* Render half star if applicable */}
            {halfStar === 1 && (
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#ffb300" }} // Half-star color
              />
            )}

            {/* Render empty stars */}
            {Array(emptyStars)
              .fill(0)
              .map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  style={{ color: "#ccc" }} // Gray color for empty stars
                />
              ))}

            {/* Display the percentage */}
            <span style={{ marginLeft: "8px" }} className="ml-2 text-gray-600">
              {rating}%
            </span>
          </div>
          <div className="product-price">
            <span>${productPrice} </span>
            {oldPrice && <span className="old-price">${oldPrice}</span>}
          </div>
          <div className="product-action-1 show">
            <Link href="/shop-cart" passHref>
              <i className="fi-rs-shopping-bag-add"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopeCard;
