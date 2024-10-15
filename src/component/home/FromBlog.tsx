import Link from "next/link";
import BlogPost from "./BlogPost";

function FromBlog() {
  return (
    <section className="section-padding">
      <div className="container pt-25 pb-20">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="section-title mb-20">
              <span>From</span> blog
            </h3>
            <div className="post-list mb-4 mb-lg-0">
              <BlogPost
                title="Qualcomm is developing a Nintendo Switch-like console, report says"
                category="Fashion"
                categoryUrl="/blog-category-fullwidth"
                imageUrl="/imgs/blog/blog-2.jpg"
                postUrl="/blog-post-fullwidth"
                date="14 April 2022"
                views="12M"
              />
              <BlogPost
                title="Qualcomm is developing a Nintendo Switch-like console, report says"
                category="Fashion"
                categoryUrl="/blog-category-fullwidth"
                imageUrl="/imgs/blog/blog-2.jpg"
                postUrl="/blog-post-fullwidth"
                date="14 April 2022"
                views="12M"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6">
                <div className="banner-img banner-1 wow fadeIn animated mb-2">
                  <img src="/imgs/banner/banner-5.jpg" alt="Autumn Hat" />
                  <div className="banner-text">
                    <span>Accessories</span>
                    <h4>
                      Save 17% on <br />
                      Autumn Hat
                    </h4>
                    <Link href="/shop-grid-right.html" passHref>
                      <Link href={"#"}>
                        Shop Now <i className="fi-rs-arrow-right"></i>
                      </Link>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="banner-img mb-15 wow fadeIn animated">
                  <img src="/imgs/banner/banner-6.jpg" alt="" />
                  <div className="banner-text">
                    <span>Big Offer</span>
                    <h4>
                      Save 20% on <br />
                      Women's socks
                    </h4>
                    <Link href="shop-grid-right.html">
                      Shop Now <i className="fi-rs-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="banner-img banner-2 wow fadeIn animated">
                  <img src="/imgs/banner/banner-7.jpg" alt="" />
                  <div className="banner-text">
                    <span>Smart Offer</span>
                    <h4>
                      Save 20% on <br />
                      Eardrop
                    </h4>
                    <Link href="shop-grid-right.html">
                      Shop Now <i className="fi-rs-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FromBlog;
