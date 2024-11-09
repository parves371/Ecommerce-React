import ProductCard from "@/component/shope/shop-list/ProductCard";
import Link from "next/link";

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

              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
