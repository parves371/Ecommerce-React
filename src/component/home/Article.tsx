import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  imageUrl: string;
  linkUrl: string;
  title: string;
  currentPrice: number;
  originalPrice?: number;
}
const Article: React.FC<ArticleProps> = ({
  imageUrl,
  linkUrl,
  title,
  currentPrice,
  originalPrice,
}) => (
  <article className="row align-items-center">
    <figure className="col-md-4 mb-0">
      <Link href={linkUrl} passHref>
        <div>
          <Image
            src={imageUrl}
            alt={title}
            width={86}
            height={86}
          />
        </div>
      </Link>
    </figure>
    <div className="col-md-8 mb-0">
      <h4 className="title-small">
        <Link href={linkUrl}>
          <div>{title}</div>
        </Link>
      </h4>
      <div className="product-price">
        <span>${currentPrice.toFixed(2)} </span>
        {originalPrice && (
          <span className="old-price">${originalPrice.toFixed(2)}</span>
        )}
      </div>
    </div>
  </article>
);

export default Article;
