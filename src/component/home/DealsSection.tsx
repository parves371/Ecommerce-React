// components/Deals.tsx
import Link from "next/link";
import React from "react";

const Deals = () => {
  return (
    <section className="deals section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 deal-co">
            <div
              className="deal wow fadeIn animated mb-md-4 mb-sm-4 mb-lg-0"
              style={{
                backgroundImage: "url('/imgs/banner/menu-banner-7.jpg')",
              }}
            >
              <div className="deal-top">
                <h2 className="text-brand">Deal of the Day</h2>
                <h5>Limited quantities.</h5>
              </div>
              <div className="deal-content">
                <h6 className="product-title">
                  <Link href="shop-product-right">
                    Summer Collection New Modern Design
                  </Link>
                </h6>
                <div className="product-price">
                  <span className="new-price">$139.00</span>
                  <span className="old-price">$160.99</span>
                </div>
              </div>
              <div className="deal-bottom">
                <p>Hurry Up! Offer End In:</p>
                <div
                  className="deals-countdown"
                  data-countdown="2025/03/25 00:00:00"
                ></div>
                <Link href="shop-grid-right" className="btn hover-up">
                  Shop Now <i className="fi-rs-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 deal-co">
            <div
              className="deal wow fadeIn animated"
              style={{
                backgroundImage: "url('/imgs/banner/menu-banner-8.jpg')",
              }}
            >
              <div className="deal-top">
                <h2 className="text-brand">Men Clothing</h2>
                <h5>Shirt & Bag</h5>
              </div>
              <div className="deal-content">
                <h6 className="product-title">
                  <Link href="shop-product-right">
                    Try something new on vacation
                  </Link>
                </h6>
                <div className="product-price">
                  <span className="new-price">$178.00</span>
                  <span className="old-price">$256.99</span>
                </div>
              </div>
              <div className="deal-bottom">
                <p>Hurry Up! Offer End In:</p>
                <div
                  className="deals-countdown"
                  data-countdown="2026/03/25 00:00:00"
                ></div>
                <Link href="shop-grid-right" className="btn hover-up">
                  Shop Now <i className="fi-rs-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
