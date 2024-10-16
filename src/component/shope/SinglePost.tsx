import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

// Define the props for the SinglePost component
interface SinglePostProps {
  productName: string;
  productUrl: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const SinglePost: FC<SinglePostProps> = ({
  productName,
  productUrl,
  price,
  rating,
  imageUrl,
}) => {
  return (
    <div className="single-post clearfix">
      <div className="image">
        <Image
          src={imageUrl}
          alt={productName}
          width={100}
          height={100}
        />
      </div>
      <div className="content pt-10">
        <h5>
          <Link href={productUrl}>{productName}</Link>
        </h5>
        <p className="price mb-0 mt-5">${price.toFixed(2)}</p>
        <div className="product-rate">
          <div
            className="product-rating"
            style={{ width: `${rating}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
