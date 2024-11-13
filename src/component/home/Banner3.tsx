import Image from "next/image";
import Link from "next/link";

function Banners() {
  const banners = [
    {
      id: 1,
      src: "/imgs/banner/banner-1.png",
      alt: "Woman Bag Offer",
      title: "Save 20% on Woman Bag",
      subtitle: "Smart Offer",
      link: "/shop-grid-right",
    },
    {
      id: 2,
      src: "/imgs/banner/banner-2.png",
      alt: "Summer Collection",
      title: "Great Summer Collection",
      subtitle: "Sale off",
      link: "/shop-grid-right",
    },
    {
      id: 3,
      src: "/imgs/banner/banner-3.png",
      alt: "Today’s Deals & Offers",
      title: "Shop Today's Deals & Offers",
      subtitle: "New Arrivals",
      link: "/shop-grid-right",
    },
  ];

  return (
    <section className="banners mb-15">
      <div className="container">
        <div className="row">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`col-lg-4 col-md-6 ${
                banner.id === 3 ? "d-md-none d-lg-flex" : ""
              }`}
            >
              <div className="banner-img wow fadeIn animated">
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  width={300}
                  height={300}
                
                />
                <div className="banner-text">
                  <span>{banner.subtitle}</span>
                  <h4>{banner.title}</h4>
                  <Link href={banner.link}>
                    <span>
                      Shop Now <i className="fi-rs-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banners;
