"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { removeFromCart } from "@/lib/features/cart/cartSlice";

// Define types for cart items
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  imgSrcDefault: string;
}

export const CartDropdown: React.FC = () => {
  // Fetch cart items from the Redux store
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const dispatch = useAppDispatch();

  // Calculate the total price
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle item removal (example placeholder function)
  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <CartDropdownItem
      items={cartItems}
      onRemoveItem={handleRemoveItem}
      total={total}
    />
  );
};

// CartDropdownItem Component
interface CartDropdownProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
  total: number;
}

const CartDropdownItem: React.FC<CartDropdownProps> = ({
  items,
  onRemoveItem,
  total,
}) => {
  return (
    <div className="cart-dropdown-wrap cart-dropdown-hm2">
      <ul>
        {items.length === 0 ? (
          <li className="empty-cart-message">Your cart is empty</li>
        ) : (
          items.map((item) => (
            <li key={item.id}>
              <div className="shopping-cart-img">
                <Link href="/shop-product-right">
                  <Image
                    alt={item.title}
                    src={item.imgSrcDefault}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                </Link>
              </div>
              <div className="shopping-cart-title">
                <h4>
                  <Link href="/shop-product-right">{item.title}</Link>
                </h4>
                <h4>
                  <span>{item.quantity} × </span>${item.price.toFixed(2)}
                </h4>
              </div>
              <div className="shopping-cart-delete">
                <button
                  onClick={() => onRemoveItem(item.id)}
                  aria-label="Remove item"
                  className="cart-item-remove-btn"
                >
                  <i className="fi-rs-cross-small"></i>
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
      {items.length > 0 && (
        <div className="shopping-cart-footer">
          <div className="shopping-cart-total">
            <h4>
              Total <span>${total.toFixed(2)}</span>
            </h4>
          </div>
          <div className="shopping-cart-button">
            <Link href="/shop/cart" className="outline">
              View cart
            </Link>
            <Link href="/shop-checkout">Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
