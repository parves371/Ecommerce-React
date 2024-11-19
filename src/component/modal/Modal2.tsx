"use client";
import Link from "next/link";
import Banner7 from "@/imgs/banner/menu-banner-7.png";

const Modal = () => {
  return (
    <div
      className="modal fade custom-modal"
      id="onloadModal"
      //   tabIndex="-1"
      aria-labelledby="onloadModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="modal-body">
            <div
              className="deal"
              style={{
                backgroundImage: `${Banner7}`,
              }}
            >
              <div className="deal-top">
                <h2 className="text-brand">Deal of the Day</h2>
                <h5>Limited quantities.</h5>
              </div>
              <div className="deal-content">
                <h6 className="product-title">
                  <Link href="/shop-product-right">
                    Summer Collection New Modern Design
                  </Link>
                </h6>
                <div className="product-price">
                  <span className="new-price">£139.00</span>
                  <span className="old-price">£160.99</span>
                </div>
              </div>
              <div className="deal-bottom">
                <p>Hurry Up! Offer Ends In:</p>
                <div
                  className="deals-countdown"
                  data-countdown="2025/03/25 00:00:00"
                >
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">03</span>
                    <span className="countdown-period"> days </span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">02</span>
                    <span className="countdown-period"> hours </span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">43</span>
                    <span className="countdown-period"> mins </span>
                  </span>
                  <span className="countdown-section">
                    <span className="countdown-amount hover-up">29</span>
                    <span className="countdown-period"> sec </span>
                  </span>
                </div>
                <Link href="/shop-grid-right">
                  <div className="btn hover-up">
                    Shop Now <i className="fi-rs-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
