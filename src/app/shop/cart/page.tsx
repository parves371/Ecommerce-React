"use client";
import Breadcrumb from "@/component/shope/cart/BreadcrumbProps ";
import CartTable from "@/component/shope/cart/CartTable";
import CartTotals from "@/component/shope/cart/CartTotals";
import ShippingCalculator from "@/component/shope/cart/ShippingForm";
import { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      imageUrl: "/imgs/shop/product-1-2.jpg",
      productName: "J.Crew Mercantile Women's Short-Sleeve",
      productUrl: "/shop-product-right",
      price: 65.0,
      quantity: 1,
      subtotal: 65.0,
    },
    {
      imageUrl: "/imgs/shop/product-11-2.jpg",
      productName: "Amazon Essentials Women's Tank",
      productUrl: "/shop-product-right",
      price: 75.0,
      quantity: 2,
      subtotal: 150.0,
    },
    {
      imageUrl: "/imgs/shop/product-6-1.jpg",
      productName: "Amazon Brand - Daily Ritual Women's Jersey",
      productUrl: "/shop-product-right",
      price: 62.0,
      quantity: 1,
      subtotal: 62.0,
    },
  ]);

  const handleRemoveItem = (index: number) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const handleIncreaseQuantity = (index: number) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index
        ? {
            ...item,
            quantity: item.quantity + 1,
            subtotal: item.price * (item.quantity + 1),
          }
        : item
    );
    setCartItems(updatedItems);
  };

  const handleDecreaseQuantity = (index: number) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
            subtotal: item.price * (item.quantity - 1),
          }
        : item
    );
    setCartItems(updatedItems);
  };

  const cartSubtotal = cartItems.reduce(
    (total, item) => total + item.subtotal,
    0
  );
  const shippingCost = "Free Shipping";
  const cartTotal = cartSubtotal;

  return (
    <main className="main">
      <Breadcrumb
        links={[
          { label: "Home", url: "/" },
          { label: "Shop", url: "/shop" },
          { label: "Your Cart", url: "/cart" },
        ]}
      />
      <section className="mt-50 mb-50">
        <div className="container">
          <CartTable
            items={cartItems}
            onRemoveItem={handleRemoveItem}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
          />
          <div className="cart-action text-end">
            <a className="btn mr-10 mb-sm-15">
              <i className="fi-rs-shuffle mr-10"></i> Update Cart
            </a>
            <a className="btn">
              <i className="fi-rs-shopping-bag mr-10"></i> Continue Shopping
            </a>
          </div>
          <div className="divider center_icon mt-50 mb-50">
            <i className="fi-rs-fingerprint"></i>
          </div>
          <div className="row mb-50">
            <div className="col-lg-6 col-md-12">
              <ShippingCalculator />
            </div>
            <div className="col-lg-6 col-md-12">
              <CartTotals
                subtotal={cartSubtotal}
                shippingCost={shippingCost}
                total={cartTotal}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
