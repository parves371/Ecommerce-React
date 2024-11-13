"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

function PopularCategories() {
  const categories = [
    { id: 1, name: "T-Shirt", image: "/imgs/shop/category-thumb-1.jpg", href: "/shop-grid-right" },
    { id: 2, name: "Bags", image: "/imgs/shop/category-thumb-2.jpg", href: "/shop-grid-right" },
    { id: 3, name: "Sandan", image: "/imgs/shop/category-thumb-3.jpg", href: "/shop-grid-right" },
    { id: 4, name: "Scarf Cap", image: "/imgs/shop/category-thumb-4.jpg", href: "/shop-grid-right" },
    { id: 5, name: "Shoes", image: "/imgs/shop/category-thumb-5.jpg", href: "/shop-grid-right" },
    { id: 6, name: "Pillowcase", image: "/imgs/shop/category-thumb-6.jpg", href: "/shop-grid-right" },
    { id: 7, name: "Jumpsuits", image: "/imgs/shop/category-thumb-7.jpg", href: "/shop-grid-right" },
    { id: 8, name: "Hats", image: "/imgs/shop/category-thumb-8.jpg", href: "/shop-grid-right" },
  ];

  // Slider settings
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // Prevents rendering until after mount to avoid SSR issues
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="popular-categories section-padding mt-15 mb-25">
      <div className="container wow fadeIn animated">
        <h3 className="section-title mb-20">
          <span>Popular</span> Categories
        </h3>
        <div className="carausel-6-columns-cover position-relative">
          <Slider {...sliderSettings}>
            {categories.map((category) => (
              <div key={category.id} className="p-4"> {/* Added padding */}
                <div className="card-1 bg-white rounded-lg shadow-md">
                  <figure className="img-hover-scale overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={200}
                      height={200}
                  
                    />
                  </figure>
                  <h5 className="text-center mt-2">
                    <Link href={category.href}>
                      <span>{category.name}</span>
                    </Link>
                  </h5>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;
