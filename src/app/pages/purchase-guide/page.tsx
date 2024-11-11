import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span></span> Pages
            <span></span> Purchase Guide
          </div>
        </div>
      </div>

      <section className="mt-50 mb-50">
        <div className="container custom">
          <div className="row">
            <div className="col-lg-9">
              <div className="single-page pr-30 mb-lg-0 mb-sm-5">
                <div className="single-header  style-2">
                  <h2>Purchase Guide</h2>
                  <div className="entry-meta meta-1 font-xs mt-15 mb-15">
                    <span className="post-by">
                      By <a href="#">Jonh</a>
                    </span>
                    <span className="post-on has-dot">9 April 2020</span>
                    <span className="time-reading has-dot">8 mins read</span>
                    <span className="hit-count  has-dot">29k Views</span>
                  </div>
                </div>

                <figure className="single-thumbnail">
                  <Image
                    width={936}
                    height={430}
                    src="/imgs/page/img-1.jpg"
                    alt=""
                  />
                </figure>

                <div className="single-content">
                  <h4>1. Account Registering</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla modi dolores neque omnis ipsa? Quia, nam voluptas!
                    Aut, magnam molestias:
                  </p>
                  <ul className="mb-30">
                    <li>Name (required)</li>
                    <li>Age (required)</li>
                    <li>Date of birth (required)</li>
                    <li>Passport/ ID no. (required)</li>
                    <li>Current career (required)</li>
                    <li>Mobile phone numbers (required)</li>
                    <li>Email address (required)</li>
                    <li>Hobbies &amp; interests (optional)</li>
                    <li>Social profiles (optional)</li>
                  </ul>
                  <h4>2. Select Product</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit officia necessitatibus repellat placeat aut enim
                    recusandae assumenda adipisci quisquam, deserunt iure
                    veritatis cupiditate modi aspernatur accusantium, mollitia
                    doloribus. Velit, iste.
                  </p>
                  <h4>3. Confirm Order Content</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Libero ut autem sed! Assumenda, nostrum non doloribus
                    tenetur, pariatur veritatis harum natus ipsam maiores
                    dolorem repudiandae laboriosam, cupiditate odio earum eum?
                  </p>
                  <h4>4.Transaction Completed</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam nesciunt nam aut magnam libero aspernatur eaque
                    praesentium? Tempore labore quis neque? Magni.
                  </p>
                  <h4>5. Accepted Credit Cards</h4>
                  <ul>
                    <li>Visa</li>
                    <li>Mastercards</li>
                    <li>American Express</li>
                    <li>Discover</li>
                  </ul>
                  <span>
                    *Taxes are calculated by your local bank and location.
                  </span>
                  <h4 className="mt-30">6. Download and Setup</h4>
                  <ul>
                    <li>Updated content on a regular basis</li>
                    <li>Secure &amp; hassle-free payment</li>
                    <li>1-click checkout</li>
                    <li>Easy access &amp; smart user dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 primary-sidebar sticky-sidebar">
              <div className="widget-area">
                <div className="sidebar-widget widget_search mb-50">
                  <div className="search-form">
                    <form action="#">
                      <input type="text" placeholder="Search…" />
                      <button type="submit">
                        {" "}
                        <i className="fi-rs-search"></i>{" "}
                      </button>
                    </form>
                  </div>
                  {/* Widget categories */}
                  <div className="sidebar-widget widget_categories mb-40">
                    <div className="widget-header position-relative mb-20 pb-10">
                      <h5
                        className="widget-title"
                        style={{
                          marginTop: "40px",
                        }}
                      >
                        Categories
                      </h5>
                    </div>
                    <div className="post-block-list post-module-1 post-module-5">
                      <ul>
                        <li className="cat-item cat-item-2">
                          <Link href="/blog-category-list">Beauty</Link> (3)
                        </li>
                        <li className="cat-item cat-item-3">
                          <Link href="/blog-category-list">Book</Link> (6)
                        </li>
                        <li className="cat-item cat-item-4">
                          <Link href="/blog-category-list">Design</Link> (4)
                        </li>
                        <li className="cat-item cat-item-5">
                          <Link href="/blog-category-list">Fashion</Link> (3)
                        </li>
                        <li className="cat-item cat-item-6">
                          <a href="/blog-category-list">Lifestyle</a> (6)
                        </li>
                        <li className="cat-item cat-item-7">
                          <Link href="/blog-category-list">Travel</Link> (2)
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Widget latest posts style 1 */}
                  <div className="sidebar-widget widget_alitheme_lastpost mb-20">
                    <div className="widget-header position-relative mb-20 pb-10">
                      <h5 className="widget-title">Trending Now</h5>
                    </div>
                    <div className="row">
                      <div className="col-12 sm-grid-content mb-30">
                        <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                          <a href="blog-post-fullwidth.html">
                            <Image
                              width={306}
                              height={204}
                              src="/imgs/blog/blog-1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h4 className="post-title mb-10 text-limit-2-row">
                            The litigants on the screen are not actors{" "}
                          </h4>
                          <div className="entry-meta meta-13 font-xxs color-grey">
                            <span className="post-on mr-10">25 April</span>
                            <span className="hit-count has-dot ">
                              126k Views
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 sm-grid-content mb-30">
                        <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                          <a href="blog-post-fullwidth.html">
                            <Image
                              width={141}
                              height={94}
                              src="/imgs/blog/blog-3.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-10 text-limit-2-row">
                            Water Partners With Rag &amp; Bone To Consume
                          </h6>
                          <div className="entry-meta meta-13 font-xxs color-grey">
                            <span className="post-on mr-10">25 April</span>
                            <span className="hit-count has-dot ">
                              126k Views
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 sm-grid-content mb-30">
                        <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                          <a href="blog-post-fullwidth.html">
                            <Image
                              width={141}
                              height={94}
                              src="/imgs/blog/blog-4.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-10 text-limit-2-row">
                            The loss is not all that surprising
                          </h6>
                          <div className="entry-meta meta-13 font-xxs color-grey">
                            <span className="post-on mr-10">25 April</span>
                            <span className="hit-count has-dot ">
                              126k Views
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 sm-grid-content mb-30">
                        <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                          <a href="blog-post-fullwidth.html">
                            <Image
                              width={141}
                              height={94}
                              src="/imgs/blog/blog-5.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-10 text-limit-2-row">
                            We got a right to pick a little fight, Bonanza{" "}
                          </h6>
                          <div className="entry-meta meta-13 font-xxs color-grey">
                            <span className="post-on mr-10">25 April</span>
                            <span className="hit-count has-dot ">
                              126k Views
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 sm-grid-content mb-30">
                        <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                          <a href="blog-post-fullwidth.html">
                            <Image
                              width={141}
                              height={94}
                              src="/imgs/blog/blog-6.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-10 text-limit-2-row">
                            My entrance exam was on a book of matches{" "}
                          </h6>
                          <div className="entry-meta meta-13 font-xxs color-grey">
                            <span className="post-on mr-10">25 April</span>
                            <span className="hit-count has-dot ">
                              126k Views
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Widget ads */}
                  <div className="banner-img wow fadeIn mb-45 animated d-lg-block d-none animated">
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
                  {/* Widget Tags */}
                  <div className="sidebar-widget widget_tags mb-50">
                    <div className="widget-header position-relative mb-20 pb-10">
                      <h5 className="widget-title">Popular tags </h5>
                    </div>
                    <div className="tagcloud">
                      <Link
                        className="tag-cloud-link"
                        href="/blog-category-grid"
                      >
                        beautiful
                      </Link>
                      <Link
                        className="tag-cloud-link"
                        href="/blog-category-grid"
                      >
                        New York
                      </Link>
                      <a className="tag-cloud-link" href="/blog-category-grid">
                        droll
                      </a>
                      <Link
                        className="tag-cloud-link"
                        href="/blog-category-grid"
                      >
                        intimate
                      </Link>
                      <Link
                        className="tag-cloud-link"
                        href="/blog-category-grid"
                      >
                        loving
                      </Link>
                      <Link
                        className="tag-cloud-link"
                        href="/blog-category-grid"
                      >
                        travel
                      </Link>
                      <Link
                        className="tag-cloud-link"
                        href="/blog-category-grid"
                      >
                        fighting{" "}
                      </Link>
                    </div>
                  </div>
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
