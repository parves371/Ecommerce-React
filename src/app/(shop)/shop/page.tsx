"use client";
import ShopeCard from "@/component/shope/ShopeCard";
import SinglePost from "@/component/shope/SinglePost";
import SortByProductArea from "@/component/shope/SortByProductArea";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

interface ColorsState {
  red: boolean;
  green: boolean;
  blue: boolean;
}

interface ConditionsState {
  new: boolean;
  refurbished: boolean;
  used: boolean;
}

const products = [
  {
    productName: "Colorful Pattern Shirts",
    productCategory: "Music",
    productPrice: 238.85,
    oldPrice: 245.8,
    rating: 90,
    badgeText: "Hot",
    imageUrl: "/imgs/shop/product-2-1.jpg",
    hoverImageUrl: "/imgs/shop/product-2-2.jpg",
    isHot: true,
  },
  {
    productName: "Stylish Jacket",
    productCategory: "Fashion",
    productPrice: 129.99,
    oldPrice: 159.99,
    rating: 85,
    badgeText: "New",
    imageUrl: "/imgs/shop/product-3-1.jpg",
    hoverImageUrl: "/imgs/shop/product-3-2.jpg",
    isHot: false,
  },
  {
    productName: "Modern Sneakers",
    productCategory: "Shoes",
    productPrice: 89.99,
    oldPrice: 99.99,
    rating: 80,
    badgeText: "Best Seller",
    imageUrl: "/imgs/shop/product-4-1.jpg",
    hoverImageUrl: "/imgs/shop/product-4-2.jpg",
    isHot: false,
  },
  // Add more products as needed
];
const ShopPage: React.FC = () => {
  const [priceRange, setPriceRange] = useState<string>("");
  const [colors, setColors] = useState<ColorsState>({
    red: false,
    green: false,
    blue: false,
  });
  const [conditions, setConditions] = useState<ConditionsState>({
    new: false,
    refurbished: false,
    used: false,
  });

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPriceRange(e.target.value);
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, checked } = e.target;
    setColors((prevColors) => ({
      ...prevColors,
      [id]: checked,
    }));
  };

  const handleConditionChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, checked } = e.target;
    setConditions((prevConditions) => ({
      ...prevConditions,
      [id]: checked,
    }));
  };

  const handleSubmit = (): void => {
    const selectedFilters = {
      priceRange,
      colors,
      conditions,
    };

    console.log("Filters Applied:", selectedFilters);
    // Handle the filtering logic or API request here
  };

  return (
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/" passHref>
              Home
            </Link>
            <span></span> Shop
          </div>
        </div>
      </div>
      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="shop-product-fillter">
                <div className="totall-product">
                  <p>
                    {" "}
                    We found <strong className="text-brand">688</strong> items
                    for you!
                  </p>
                </div>
                {/* Product sorting */}
                <SortByProductArea />
              </div>

              <div className="row product-grid-3">
                {/* Product Item */}
                {products.map((product, index) => (
                  <ShopeCard
                    key={index}
                    productName={product.productName}
                    productCategory={product.productCategory}
                    productPrice={product.productPrice}
                    oldPrice={product.oldPrice}
                    rating={product.rating}
                    badgeText={product.badgeText}
                    imageUrl={product.imageUrl}
                    hoverImageUrl={product.hoverImageUrl}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link dot" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        16
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fi-rs-angle-double-small-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-3 primary-sidebar sticky-sidebar">
              {/* Category Widget */}
              <div className="widget-category mb-30">
                <h5 className="section-title style-1 mb-30 wow fadeIn animated">
                  Category
                </h5>
                <ul className="categories">
                  <li>
                    <Link href="/shop-grid-right">Shoes & Bags</Link>
                  </li>
                  <li>
                    <Link href="/shop-grid-right">Blouses & Shirts</Link>
                  </li>
                  <li>
                    <Link href="/shop-grid-right">Dresses</Link>
                  </li>
                  <li>
                    <Link href="/shop-grid-right">Swimwear</Link>
                  </li>
                  <li>
                    <Link href="/shop-grid-right">Beauty</Link>
                  </li>
                  <li>
                    <Link href="/shop-grid-right">Jewelry & Watch</Link>
                  </li>
                  <li>
                    <Link href="/shop-grid-right">Accessories</Link>
                  </li>
                </ul>
              </div>

              {/* Price Filter Widget */}
              <div className="sidebar-widget price_range range mb-30">
                <div className="widget-header position-relative mb-20 pb-10">
                  <h5 className="widget-title mb-10">Filter by price</h5>
                  <div className="bt-1 border-color-1"></div>
                </div>
                <div className="price-filter">
                  <div className="price-filter-inner">
                    <div id="slider-range"></div>
                    <div className="price_slider_amount">
                      <div className="label-input">
                        <span>Range:</span>
                        <input
                          type="text"
                          id="amount"
                          name="price"
                          placeholder="Add Your Price"
                          value={priceRange}
                          onChange={handlePriceChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group">
                  <div className="list-group-item mb-10 mt-10">
                    <label className="fw-900">Color</label>
                    <div className="custome-checkbox">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="red"
                        checked={colors.red}
                        onChange={handleColorChange}
                      />
                      <label className="form-check-label" htmlFor="red">
                        <span>Red (56)</span>
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="green"
                        checked={colors.green}
                        onChange={handleColorChange}
                      />
                      <label className="form-check-label" htmlFor="green">
                        <span>Green (78)</span>
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="blue"
                        checked={colors.blue}
                        onChange={handleColorChange}
                      />
                      <label className="form-check-label" htmlFor="blue">
                        <span>Blue (54)</span>
                      </label>
                    </div>
                    <label className="fw-900 mt-15">Item Condition</label>
                    <div className="custome-checkbox">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="new"
                        checked={conditions.new}
                        onChange={handleConditionChange}
                      />
                      <label className="form-check-label" htmlFor="new">
                        <span>New (1506)</span>
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="refurbished"
                        checked={conditions.refurbished}
                        onChange={handleConditionChange}
                      />
                      <label className="form-check-label" htmlFor="refurbished">
                        <span>Refurbished (27)</span>
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="used"
                        checked={conditions.used}
                        onChange={handleConditionChange}
                      />
                      <label className="form-check-label" htmlFor="used">
                        <span>Used (45)</span>
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="btn btn-sm btn-default"
                >
                  <i className="fi-rs-filter mr-5"></i> Filter
                </button>
              </div>

              {/* Product Sidebar Widget */}
              <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                <div className="widget-header position-relative mb-20 pb-10">
                  <h5 className="widget-title mb-10">New products</h5>
                  <div className="bt-1 border-color-1"></div>
                </div>
                <SinglePost
                  productName="Chen Cardigan"
                  productUrl="/shop-product-detail"
                  price={99.5}
                  rating={90} // Rating as percentage
                  imageUrl="/imgs/shop/thumbnail-3.jpg"
                />
                <SinglePost
                  productName="Chen Cardigan"
                  productUrl="/shop-product-detail"
                  price={99.5}
                  rating={50} // Rating as percentage
                  imageUrl="/imgs/shop/thumbnail-3.jpg"
                />
                <SinglePost
                  productName="Chen Cardigan"
                  productUrl="/shop-product-detail"
                  price={99.5}
                  rating={90} // Rating as percentage
                  imageUrl="/imgs/shop/thumbnail-3.jpg"
                />
                {/* Add more product items here */}
              </div>
              <div className="banner-img wow fadeIn mb-45 animated d-lg-block d-none">
                <Image
                  src="/imgs/banner/banner-11.jpg"
                  alt=""
                  width={306}
                  height={350}
                />
                <div className="banner-text">
                  <span>Women Zone</span>
                  <h4>
                    Save 17% on <br />
                    Office Dress
                  </h4>
                  <a href="shop-grid-right.html">
                    Shop Now <i className="fi-rs-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShopPage;
