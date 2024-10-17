import CouponAndForm from "@/component/shope/checkout/CouponAndForm";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/" rel="nofollow">
              Home
            </Link>
            <span></span> <Link href={"/shop"}>Shop</Link>
            <span></span> Checkout
          </div>
        </div>
      </div>
      <section className="mt-50 mb-50">
        <div className="container">
          <CouponAndForm />
          <div className="row">
            <div className="col-12">
              <div className="divider mt-50 mb-50"></div>
            </div>
          </div>

          <div className="row">
          <div className="col-md-6">

            
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
