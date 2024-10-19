// components/ComparisonTable.tsx
import Image from "next/image";
import React from "react";
// data.ts
export interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  stockStatus: string;
  weight: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "J.Crew Mercantile Women's Short",
    price: "$45.00",
    rating: 80,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    images: ["/imgs/shop/product-2-1.jpg"],
    colors: ["Orange", "Cyan", "Green", "Purple"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stockStatus: "In Stock",
    weight: "320 gram",
  },
  {
    id: 2,
    name: "Amazon Essentials Women's Tanks",
    price: "$55.00",
    rating: 70,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    images: ["/imgs/shop/product-1-1.jpg"],
    colors: ["Red", "Cyan", "Green", "Purple"],
    sizes: ["S", "XL", "XXL"],
    stockStatus: "Out of stock",
    weight: "370 gram",
  },
  {
    id: 3,
    name: "Amazon Brand - Daily Ritual Wom",
    price: "$68.00",
    rating: 90,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    images: ["/imgs/shop/product-3-1.jpg"],
    colors: ["Red", "Yellow", "Orange"],
    sizes: ["M", "L", "XL", "XXL"],
    stockStatus: "In Stock",
    weight: "380 gram",
  },
];

const ComparisonTable: React.FC = () => {
  return (
    <div className="table-responsive">
      <table className="table text-center">
        <tbody>
          <tr className="pr_image">
            <td className="text-muted font-md fw-600">Preview</td>
            {products.map((product) => (
              <td key={product.id} className="row_img">
                <Image
                  width={376}
                  height={376}
                  src={product.images[0]}
                  alt="compare-img"
                />
              </td>
            ))}
          </tr>
          <tr className="pr_title">
            <td className="text-muted font-md fw-600">Name</td>
            {products.map((product) => (
              <td key={product.id} className="product_name">
                <h5>
                  <a href="shop-product-full.html">{product.name}</a>
                </h5>
              </td>
            ))}
          </tr>
          <tr className="pr_price">
            <td className="text-muted font-md fw-600">Price</td>
            {products.map((product) => (
              <td key={product.id} className="product_price">
                <span className="price">{product.price}</span>
              </td>
            ))}
          </tr>
          <tr className="pr_rating">
            <td className="text-muted font-md fw-600">Rating</td>
            {products.map((product) => (
              <td key={product.id}>
                <div className="rating_wrap">
                  <div className="product-rate d-inline-block">
                    <div
                      className="product-rating"
                      style={{ width: `${product.rating}%` }}
                    ></div>
                  </div>
                  <span className="rating_num">
                    ({Math.floor(Math.random() * 200)})
                  </span>
                </div>
              </td>
            ))}
          </tr>
          <tr className="description">
            <td className="text-muted font-md fw-600">Description</td>
            {products.map((product) => (
              <td key={product.id} className="row_text font-xs">
                <p>{product.description}</p>
              </td>
            ))}
          </tr>
          <tr className="pr_color">
            <td className="text-muted font-md fw-600">Color</td>
            {products.map((product) => (
              <td key={product.id} className="row_color">
                <ul className="list-filter color-filter">
                  {product.colors.map((color, index) => (
                    <li key={index}>
                      <a href="#" data-color={color}>
                        <span
                          className={`product-color-${color.toLowerCase()}`}
                        ></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <tr className="pr_size">
            <td className="text-muted font-md fw-600">Sizes Available</td>
            {products.map((product) => (
              <td key={product.id} className="row_size">
                <ul className="list-filter size-filter mt-15 font-small">
                  {product.sizes.map((size, index) => (
                    <li key={index}>
                      <a href="#">{size}</a>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <tr className="pr_stock">
            <td className="text-muted font-md fw-600">Stock status</td>
            {products.map((product) => (
              <td key={product.id} className="row_stock">
                <span>{product.stockStatus}</span>
              </td>
            ))}
          </tr>
          <tr className="pr_weight">
            <td className="text-muted font-md fw-600">Weight</td>
            {products.map((product) => (
              <td key={product.id} className="row_weight">
                {product.weight}
              </td>
            ))}
          </tr>
          <tr className="pr_dimensions">
            <td className="text-muted font-md fw-600">Dimensions</td>
            {products.map((product) => (
              <td key={product.id} className="row_dimensions">
                N/A
              </td>
            ))}
          </tr>
          <tr className="pr_add_to_cart">
            <td className="text-muted font-md fw-600">Buy now</td>
            {products.map((product) => (
              <td key={product.id} className="row_btn">
                <button className="btn btn-sm">
                  <i className="fi-rs-shopping-bag mr-5"></i>Add to cart
                </button>
              </td>
            ))}
          </tr>
          <tr className="pr_remove text-muted">
            <td className="text-muted font-md fw-600"></td>
            {products.map((product) => (
              <td key={product.id} className="row_remove">
                <a href="#">
                  <i className="fi-rs-trash mr-5"></i>
                  <span>Remove</span>
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
