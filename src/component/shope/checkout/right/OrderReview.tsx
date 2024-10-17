"use client";

import { useState } from "react";
import OrderTable from "./OrderTable";
import PaymentOption from "./PaymentOption";

const OrderReview = () => {
  const products = [
    {
      id: 1,
      name: "Yidarton Women Summer Blue",
      quantity: 2,
      price: 90,
      imageSrc: "/imgs/shop/product-1-1.jpg",
    },
    {
      id: 2,
      name: "LDB MOON Women Summer",
      quantity: 1,
      price: 65,
      imageSrc: "/imgs/shop/product-2-1.jpg",
    },
    {
      id: 3,
      name: "Women's Short Sleeve Loose",
      quantity: 1,
      price: 35,
      imageSrc: "/imgs/shop/product-3-1.jpg",
    },
  ];

  const [selectedPayment, setSelectedPayment] = useState("paypal"); // Default option
  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedPayment(event.target.value);

  const handleSubmit = () => {}; //back deatails submit

  return (
    <div className="col-md-6">
      <div className="order_review">
        <div className="mb-20">
          <h4>Your Orders</h4>
        </div>
        <OrderTable products={products} />
        <div className="bt-1 border-color-1 mt-30 mb-30"></div>
        <div className="payment_method">
          <div className="mb-25">
            <h5>Payment</h5>
          </div>
          <div className="payment_option">
            <PaymentOption
              selectedPayment={selectedPayment}
              handlePaymentChange={handlePaymentChange}
            />
          </div>
        </div>
        <button onClick={handleSubmit} className="btn btn-block mt-30">
          Place Order
        </button>
      </div>

      <style jsx>{`
        .order_review {
          padding: 20px;
          border: 1px solid #ddd;
        }
        .table th,
        .table td {
          vertical-align: middle;
        }
        .btn-fill-out {
          background-color: #ff7a00;
          color: white;
          padding: 10px 20px;
          text-align: center;
          display: block;
          border-radius: 5px;
        }
        .text-muted {
          color: #6c757d;
        }
        .fw-900 {
          font-weight: 900;
        }
        .font-xl {
          font-size: 1.5em;
        }
        .bt-1 {
          border-top-width: 1px;
        }
        .border-color-1 {
          border-color: #ddd;
        }
      `}</style>
    </div>
  );
};

export default OrderReview;
