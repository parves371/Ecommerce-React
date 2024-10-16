// components/Banner.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  imageUrl: string;
  linkUrl: string;
  title: string;
  subtitle: string;
}

const Banner5: React.FC<BannerProps> = ({
  imageUrl,
  linkUrl,
  title,
  subtitle,
}) => (
  <div
    className="banner-img banner-1 wow fadeIn animated"
    style={{ width: "100%" }}
  >
    <Image src={imageUrl} alt="" width={300} height={300} layout="responsive" />
    <div className="banner-text">
      <span>{subtitle}</span>
      <h4>{title}</h4>
      <Link href={linkUrl}>
        <div>
          Shop Now <i className="fi-rs-arrow-right"></i>
        </div>
      </Link>
    </div>
  </div>
);

export default Banner5;
