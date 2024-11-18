import { FC } from "react";

interface CartTotalsProps {
  subtotal: number;
  shippingCost: string | number;
  total: number;
}

const CartTotals: FC<CartTotalsProps> = ({ subtotal, shippingCost, total }) => {
  return (
    <div className="border p-md-4 p-30 border-radius cart-totals">
      <div className="heading_s1 mb-3">
        <h4>Cart Totals</h4>
      </div>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td className="cart_total_label">Cart Subtotal</td>
              <td className="cart_total_amount">
                <span className="font-lg fw-900 text-brand">
                  ${subtotal.toFixed(2)}
                </span>
              </td>
            </tr>
            <tr>
              <td className="cart_total_label">Shipping</td>
              <td className="cart_total_amount">
                <i className="ti-gift mr-5"></i> {shippingCost}
              </td>
            </tr>
            <tr>
              <td className="cart_total_label">Total</td>
              <td className="cart_total_amount">
                <strong>
                  <span className="font-xl fw-900 text-brand">
                    ${total.toFixed(2)}
                  </span>
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <a href="#" className="btn">
        <i className="fi-rs-box-alt mr-10"></i> Proceed To Checkout
      </a>
    </div>
  );
};

export default CartTotals;
