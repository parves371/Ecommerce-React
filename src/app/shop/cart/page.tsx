"use client";
import Breadcrumb from "@/component/shope/cart/BreadcrumbProps";
import CartTable from "@/component/shope/cart/CartTable";
import CartTotals from "@/component/shope/cart/CartTotals";
import ShippingCalculator from "@/component/shope/cart/ShippingForm";
import { removeFromCart, updateQuantity } from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  // Handle item removal
  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  // Handle quantity increase
  const handleIncreaseQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  // Handle quantity decrease
  const handleDecreaseQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  // Calculate cart subtotal
  const cartSubtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Placeholder for shipping cost (can be dynamic)
  const shippingCost = cartSubtotal > 100 ? "Free Shipping" : 10.0; // Example logic

  // Total calculation
  const cartTotal =
    cartSubtotal +
    (shippingCost === "Free Shipping" ? 0 : Number(shippingCost));

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
