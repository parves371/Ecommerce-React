import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <section className="banner-2 section-padding pb-0">
      <div className="container">
        <div className="banner-img banner-big wow fadeIn animated f-none">
          <Image
            src="/imgs/banner/banner-4.png"
            alt="Banner"
            width={1296} // Specify your image width
            height={295} // Specify your image height
          
          />
          <div className="banner-text d-md-block d-none">
            <h4 className="mb-15 mt-40 text-brand">Repair Services</h4>
            <h1 className="fw-600 mb-20">
              Were an Apple <br />
              Authorised Service Provider
            </h1>
            <Link href="/shop-grid-right">
              <div className="btn">
                Learn More <i className="fi-rs-arrow-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
