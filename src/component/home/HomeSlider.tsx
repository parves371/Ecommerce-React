import Link from 'next/link';
import Image from 'next/image';

const HomeSlider = () => {
  return (
    <section className="home-slider position-relative pt-50">
      <div className="hero-slider-1 dot-style-1 dot-style-1-position-1">
        {/* Slider 1 */}
        <div className="single-hero-slider single-animation-wrap">
          <div className="container">
            <div className="row align-items-center slider-animated-1">
              <div className="col-lg-5 col-md-6">
                <div className="hero-slider-content-2">
                  <h4 className="animated">Trade-in offer</h4>
                  <h2 className="animated fw-900">Supper value deals</h2>
                  <h1 className="animated fw-900 text-brand">On all products</h1>
                  <p className="animated">
                    Save more with coupons & up to 70% off
                  </p>
                  <Link href="/shop-product-right" className="animated btn btn-brush btn-brush-3">
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="single-slider-img single-slider-img-1">
                  <Image
                    className="animated slider-1-1"
                    src="/assets/imgs/slider/slider-1.png"
                    alt="Slider 1"
                    width={800}
                    height={600}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider 2 */}
        <div className="single-hero-slider single-animation-wrap">
          <div className="container">
            <div className="row align-items-center slider-animated-1">
              <div className="col-lg-5 col-md-6">
                <div className="hero-slider-content-2">
                  <h4 className="animated">Hot promotions</h4>
                  <h2 className="animated fw-900">Fashion Trending</h2>
                  <h1 className="animated fw-900 text-7">Great Collection</h1>
                  <p className="animated">
                    Save more with coupons & up to 20% off
                  </p>
                  <Link href="/shop-product-right" className="animated btn btn-brush btn-brush-2">
                    Discover Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="single-slider-img single-slider-img-1">
                  <Image
                    className="animated slider-1-2"
                    src="/assets/imgs/slider/slider-2.png"
                    alt="Slider 2"
                    width={800}
                    height={600}
                    layout='responsive'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider 3 */}
        <div className="single-hero-slider single-animation-wrap">
          <div className="container">
            <div className="row align-items-center slider-animated-1">
              <div className="col-lg-5 col-md-6">
                <div className="hero-slider-content-2">
                  <h4 className="animated">Upcoming Offer</h4>
                  <h2 className="animated fw-900">Big Deals From</h2>
                  <h1 className="animated fw-900 text-8">Manufacturer</h1>
                  <p className="animated">Clothing, Shoes, Bags, Wallets...</p>
                  <Link href="/shop-product-right" className="animated btn btn-brush btn-brush-1">
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="single-slider-img single-slider-img-1">
                  <Image
                    className="animated slider-1-3"
                    src="/assets/imgs/slider/slider-3.png"
                    alt="Slider 3"
                    width={800}
                    height={600}
                    layout='responsive'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-arrow hero-slider-1-arrow"></div>
    </section>
  );
};

export default HomeSlider;
