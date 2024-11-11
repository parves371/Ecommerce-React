import Image from "next/image";
import React from "react";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  rating: number; // as a percentage
};

type ProductSidebarProps = {
  title: string;
  products: Product[];
};

const ProductSidebar: React.FC<ProductSidebarProps> = ({ title, products }) => {
  return (
    <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
      <div className="widget-header position-relative mb-20 pb-10">
        <h5 className="widget-title mb-10">{title}</h5>
        <div className="bt-1 border-color-1"></div>
      </div>

      {products.map((product) => (
        <div key={product.id} className="single-post clearfix">
          <div className="image">
            <Image
              width={80}
              height={80}
              src={product.imageUrl}
              alt={product.name}
            />
          </div>
          <div className="content pt-10">
            <h6>
              <a href={`shop-product-detail.html?productId=${product.id}`}>
                {product.name}
              </a>
            </h6>
            <p className="price mb-0 mt-5">${product.price.toFixed(2)}</p>
            <div className="product-rate">
              <div
                className="product-rating"
                style={{ width: `${product.rating}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSidebar;
