"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";
import CouponForm from "./CouponForm";

const CouponAndForm = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState<boolean>(false);
  const [isCouponFormOpen, setIsCouponFormOpen] = useState<boolean>(false);

  const toggleLoginForm = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
  };

  const toggleCouponForm = () => {
    setIsCouponFormOpen(!isCouponFormOpen);
  };

  return (
    <div className="row">
      <div className="col-lg-6 mb-sm-15">
        <div className="toggle_info">
          <span>
            <i className="fi-rs-user mr-10"></i>
            <span className="text-muted">Already have an account?</span>{" "}
            <a
              href="#loginform"
              onClick={toggleLoginForm}
              aria-expanded={isLoginFormOpen}
            >
              Click here to login
            </a>
          </span>
        </div>
        <LoginForm isOpen={isLoginFormOpen} />
      </div>

      <div className="col-lg-6">
        <div className="toggle_info">
          <span>
            <i className="fi-rs-label mr-10"></i>
            <span className="text-muted">Have a coupon?</span>{" "}
            <a
              href="#coupon"
              onClick={toggleCouponForm}
              aria-expanded={isCouponFormOpen}
            >
              Click here to enter your code
            </a>
          </span>
        </div>
        <CouponForm isOpen={isCouponFormOpen} />
      </div>
    </div>
  );
};

export default CouponAndForm;
