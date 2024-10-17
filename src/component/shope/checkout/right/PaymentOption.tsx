import React from "react";
interface PaymentInfoProps {
  selectedPayment: string;
  handlePaymentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentOptions: React.FC<PaymentInfoProps> = ({
  handlePaymentChange,
  selectedPayment,
}) => {
  return (
    <div className="payment_option">
      <div className="custome-radio">
        <input
          className="form-check-input"
          required
          type="radio"
          name="payment_option"
          id="exampleRadios3"
          value="bankTransfer"
          checked={selectedPayment === "bankTransfer"}
          onChange={handlePaymentChange}
        />
        <label
          className="form-check-label"
          htmlFor="exampleRadios3"
          data-bs-toggle="collapse"
          data-target="#bankTransfer"
          aria-controls="bankTransfer"
        >
          Direct Bank Transfer
        </label>
        <div
          className={`form-group collapse ${
            selectedPayment === "bankTransfer" ? "show" : ""
          }`}
          id="bankTransfer"
        >
          <p className="text-muted mt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
      </div>

      <div className="custome-radio">
        <input
          className="form-check-input"
          required
          type="radio"
          name="payment_option"
          id="exampleRadios4"
          value="checkPayment"
          checked={selectedPayment === "checkPayment"}
          onChange={handlePaymentChange}
        />
        <label
          className="form-check-label"
          htmlFor="exampleRadios4"
          data-bs-toggle="collapse"
          data-target="#checkPayment"
          aria-controls="checkPayment"
        >
          Check Payment
        </label>
        <div
          className={`form-group collapse ${
            selectedPayment === "checkPayment" ? "show" : ""
          }`}
          id="checkPayment"
        >
          <p className="text-muted mt-5">
            Please send your cheque to Store Name, Store Street, Store Town,
            Store State / County, Store Postcode.
          </p>
        </div>
      </div>

      <div className="custome-radio">
        <input
          className="form-check-input"
          required
          type="radio"
          name="payment_option"
          id="exampleRadios5"
          value="paypal"
          checked={selectedPayment === "paypal"}
          onChange={handlePaymentChange}
        />
        <label
          className="form-check-label"
          htmlFor="exampleRadios5"
          data-bs-toggle="collapse"
          data-target="#paypal"
          aria-controls="paypal"
        >
          Paypal
        </label>
        <div
          className={`form-group collapse ${
            selectedPayment === "paypal" ? "show" : ""
          }`}
          id="paypal"
        >
          <p className="text-muted mt-5">
            Pay via PayPal; you can pay with your credit card if you don't have
            a PayPal account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
