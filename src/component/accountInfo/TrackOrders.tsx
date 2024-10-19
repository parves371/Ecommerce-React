import React from "react";

const TrackOrders: React.FC = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">Orders Tracking</h5>
      </div>
      <div className="card-body">
        <p>
          To track your order, please enter your OrderID in the box below and
          press the &quot;Track&quot; button. This was given to you on your
          receipt and in the confirmation email you should have received.
        </p>
        <form
          className="contact-form-style mt-30 mb-50"
          action="#"
          method="post"
        >
          <div className="input-style mb-20">
            <label>Order ID</label>
            <input
              name="order-id"
              placeholder="Found in your order confirmation email"
              type="text"
              className="square"
            />
          </div>
          <div className="input-style mb-20">
            <label>Billing Email</label>
            <input
              name="billing-email"
              placeholder="Email you used during checkout"
              type="email"
              className="square"
            />
          </div>
          <button className="submit submit-auto-width" type="submit">
            Track
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrackOrders;
