import {
  faEye,
  faHeart,
  faShuffle,
  faStar,
  faStarHalfAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import "tailwindcss/tailwind.css"; // Import directly in JavaScript entry point
interface ProductCardProps {
  imgSrcDefault: string;
  imgSrcHover: string;
  productLink: string;
  categoryLink: string;
  category: string;
  productName: string;
  price: string;
  oldPrice?: string;
  badgeText?: string;
  rating?: number; // Rating as a percentage, e.g., 90 for 90%
}

const ProductCard: FC<ProductCardProps> = ({
  imgSrcDefault,
  imgSrcHover,
  productLink,
  categoryLink,
  category,
  productName,
  price,
  oldPrice,
  badgeText,
  rating = 90, // Default rating of 90%
}) => {
  // Calculate number of full, half, and empty stars
  const fullStars = Math.floor(rating / 20); // 5-star system, so each star represents 20%
  const halfStar = rating % 20 >= 10 ? 1 : 0; // If remainder is 10 or more, show half star
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
      <div className="product-cart-wrap mb-30">
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
            <Link href={productLink}>
              <Image
                className="default-img"
                src={imgSrcDefault}
                alt={productName}
                width={400}
                height={400}
                layout="responsive"
              />
              <Image
                className="hover-img"
                src={imgSrcHover}
                alt={productName}
                width={400}
                height={400}
                layout="responsive"
              />
            </Link>
          </div>
          <div className="product-action-1">
            <Link
              href={categoryLink}
              aria-label="Quick view"
              className="action-btn hover-up"
              data-bs-toggle="modal"
              data-bs-target="#quickViewModal"
            >
              <FontAwesomeIcon icon={faEye} />
            </Link>
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
            <Link href={productLink}>{productName}</Link>
          </h2>

          {/* Rating Section */}
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
            <span>{price}</span>
            {oldPrice && <span className="old-price">{oldPrice}</span>}
          </div>
          <div className="product-action-1 show ">
            <Link
              aria-label="Add To Cart"
              className="action-btn hover-up"
              href="shop-cart"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fi-rs-shopping-bag-add"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
