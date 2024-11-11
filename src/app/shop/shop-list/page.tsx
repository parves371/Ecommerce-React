import FilterComponent from "@/component/shope/shop-list/FilterComponent";
import ProductCard from "@/component/shope/shop-list/ProductCard";
import ProductSidebar from "@/component/shope/shop-list/ProductSidebar";
import Image from "next/image";
import Link from "next/link";

const sampleProducts = [
  {
    id: 1,
    name: "Chen Cardigan",
    imageUrl: "/imgs/shop/thumbnail-3.jpg",
    price: 99.5,
    rating: 90,
  },
  {
    id: 2,
    name: "Chen Sweater",
    imageUrl: "/imgs/shop/thumbnail-4.jpg",
    price: 89.5,
    rating: 80,
  },
  {
    id: 3,
    name: "Colorful Jacket",
    imageUrl: "/imgs/shop/thumbnail-5.jpg",
    price: 25.0,
    rating: 60,
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
        </div>
      </div>
      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="shop-product-fillter style-2">
                <div className="totall-product">
                  <p>
                    {" "}
                    We found <strong className="text-brand">688</strong> items
                    for you!
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
                          <a className="active" href="#">
                            50
                          </a>
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
                          Featured <i className="fi-rs-angle-small-down"></i>
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

              <div className="product-list mb-50">
                <ProductCard
                  productName="Colorful Pattern Shirts"
                  productCategory="Music"
                  price="$238.85"
                  oldPrice="$245.8"
                  imageUrl="/imgs/shop/product-2-1.jpg"
                  hoverImageUrl="/imgs/shop/product-2-2.jpg"
                  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam beatae consectetur, atque inventore aliquam adipisci perspiciatis nostrum qui consequatur praesentium?"
                  rating={90}
                />
              </div>

              <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item active">
                      <Link className="page-link" href="#">
                        01
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        02
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        03
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link dot" href="#">
                        ...
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        16
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        <i className="fi-rs-angle-double-small-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-3 primary-sidebar sticky-sidebar">
              <div className="widget-category mb-30">
                <h5 className="section-title style-1 mb-30 wow fadeIn animated">
                  Category
                </h5>
                <ul className="categories">
                  <li>
                    <Link href="shop-grid-right.html">Shoes & Bags</Link>
                  </li>
                  <li>
                    <Link href="shop-grid-right.html">Blouses & Shirts</Link>
                  </li>
                  <li>
                    <Link href="shop-grid-right.html">Dresses</Link>
                  </li>
                  <li>
                    <Link href="shop-grid-right.html">Swimwear</Link>
                  </li>
                  <li>
                    <Link href="shop-grid-right.html">Beauty</Link>
                  </li>
                  <li>
                    <Link href="shop-grid-right.html">Jewelry & Watch</Link>
                  </li>
                  <li>
                    <Link href="shop-grid-right.html">Accessories</Link>
                  </li>
                </ul>
              </div>
              {/* Fillter By Price */}
              <div className="sidebar-widget price_range range mb-30">
                <div className="widget-header position-relative mb-20 pb-10">
                  <h5 className="widget-title mb-10">Fill by price</h5>
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
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <FilterComponent />
                <Link href="/shop" className="btn btn-sm btn-default">
                  <i className="fi-rs-filter mr-5"></i> Fillter
                </Link>
              </div>
              {/* Product sidebar Widget */}
              <ProductSidebar title="New Products" products={sampleProducts} />

              <div className="banner-img wow fadeIn mb-45 animated d-lg-block d-none">
                <Image
                  width={306}
                  height={350}
                  src="/imgs/banner/banner-11.jpg"
                  alt=""
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

export default page;
