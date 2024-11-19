import Image from "next/image";
import Link from "next/link";
import React from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Colorful Pattern Shirts",
    category: "Music",
    defaultImage: "/imgs/shop/product-2-1.jpg",
    hoverImage: "/imgs/shop/product-2-2.jpg",
    price: 238.85,
    oldPrice: 245.8,
    rating: 90,
    badge: "Hot",
  },
  {
    id: 2,
    name: "Cartoon Astronaut T-Shirts",
    category: "Music",
    defaultImage: "/imgs/shop/product-3-1.jpg",
    hoverImage: "/imgs/shop/product-3-2.jpg",
    price: 138.85,
    oldPrice: 255.8,
    rating: 50,
    badge: "New",
  },
  {
    id: 3,
    name: "Plain Striola Shirts",
    category: "Watch",
    defaultImage: "/imgs/shop/product-7-1.jpg",
    hoverImage: "/imgs/shop/product-7-2.jpg",
    price: 338.85,
    oldPrice: 445.8,
    rating: 95,
    badge: "Best Sell",
  },
  {
    id: 4,
    name: "Plain Striola Shirts",
    category: "Watch",
    defaultImage: "/imgs/shop/product-4-1.jpg",
    hoverImage: "/imgs/shop/product-4-2.jpg",
    price: 338.85,
    oldPrice: 445.8,
    rating: 95,
    badge: "Best Sell",
  },
  {
    id: 5,
    name: "Plain Striola Shirts",
    category: "Watch",
    defaultImage: "/imgs/shop/product-5-1.jpg",
    hoverImage: "/imgs/shop/product-5-2.jpg",
    price: 338.85,
    oldPrice: 445.8,
    rating: 95,
    badge: "Best Sell",
  },
];
const page = () => {
  return (
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span></span> Shop
          </div>

          <section className="mt-50 mb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="shop-product-fillter">
                    <div className="totall-product">
                      <p>
                        {" "}
                        We found <strong className="text-brand">
                          688
                        </strong>{" "}
                        items for you!
                      </p>
                    </div>
                    <div className="sort-by-product-area">
                      <div className="sort-by-cover mr-10">
                        <div className="sort-by-product-wrap">
                          <div className="sort-by">
                            <span>
                              <i className="fi-rs-apps"></i>Show:
                            </span>
                          </div>
                          <div className="sort-by-dropdown-wrap">
                            <span>
                              {" "}
                              50 <i className="fi-rs-angle-small-down"></i>
                            </span>
                          </div>
                        </div>
                        <div className="sort-by-dropdown">
                          <ul>
                            <li>
                              <Link className="active" href="#">
                                50
                              </Link>
                            </li>
                            <li>
                              <a href="#">100</a>
                            </li>
                            <li>
                              <a href="#">150</a>
                            </li>
                            <li>
                              <a href="#">200</a>
                            </li>
                            <li>
                              <a href="#">All</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="sort-by-cover">
                        <div className="sort-by-product-wrap">
                          <div className="sort-by">
                            <span>
                              <i className="fi-rs-apps-sort"></i>Sort by:
                            </span>
                          </div>
                          <div className="sort-by-dropdown-wrap">
                            <span>
                              {" "}
                              Featured{" "}
                              <i className="fi-rs-angle-small-down"></i>
                            </span>
                          </div>
                        </div>
                        <div className="sort-by-dropdown">
                          <ul>
                            <li>
                              <a className="active" href="#">
                                Featured
                              </a>
                            </li>
                            <li>
                              <a href="#">Price: Low to High</a>
                            </li>
                            <li>
                              <a href="#">Price: High to Low</a>
                            </li>
                            <li>
                              <a href="#">Release Date</a>
                            </li>
                            <li>
                              <a href="#">Avg. Rating</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ProductGrid products={sampleProducts} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default page;

type Product = {
  id: number;
  name: string;
  category: string;
  defaultImage: string;
  hoverImage: string;
  price: number;
  oldPrice?: number;
  rating: number; // as a percentage
  badge?: string; // e.g., "Hot", "New", "Best Sell"
};

type ProductGridProps = {
  products: Product[];
};

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="row product-grid-3">
      {products.map((product) => (
        <div key={product.id} className="col-lg-3 col-md-4">
          <div className="product-cart-wrap mb-30">
            <div className="product-img-action-wrap">
              <div className="product-img product-img-zoom">
                <a href="shop-product-right.html">
                  <Image
                    width={280}
                    height={280}
                    className="default-img"
                    src={product.defaultImage}
                    alt={product.name}
                  />
                  <Image
                    width={280}
                    height={280}
                    className="hover-img"
                    src={product.hoverImage}
                    alt={product.name}
                  />
                </a>
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
              {product.badge && (
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className={product.badge.toLowerCase()}>
                    {product.badge}
                  </span>
                </div>
              )}
            </div>
            <div className="product-content-wrap">
              <div className="product-category">
                <a href="shop-grid-right.html">{product.category}</a>
              </div>
              <h2>
                <a href="shop-product-right.html">{product.name}</a>
              </h2>
              <div className="rating-result" title={`${product.rating}%`}>
                <span>
                  <span>{product.rating}%</span>
                </span>
              </div>
              <div className="product-price">
                <span>${product.price.toFixed(2)} </span>
                {product.oldPrice && (
                  <span className="old-price">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="product-action-1 show">
                <a
                  aria-label="Add To Cart"
                  className="action-btn hover-up"
                  href="shop-cart.html"
                >
                  <i className="fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
