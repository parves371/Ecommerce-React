import { FC } from "react";

const ShippingCalculator: FC = () => {
  return (
    <div className="shipping-calculator">
      <div className="heading_s1 mb-3">
        <h4>Calculate Shipping</h4>
      </div>
      <p className="mt-15 mb-30">
        Flat rate: <span className="font-xl text-brand fw-900">5%</span>
      </p>
      <form className="field_form shipping_calculator">
        <div className="form-row">
          <div className="form-group col-lg-12">
            <select className="form-control select-active">
              <option value="">Choose an option...</option>
              {/* Add all options here */}
            </select>
          </div>
        </div>
        <div className="form-row row">
          <div className="form-group col-lg-6">
            <input required placeholder="State / Country" name="state" type="text" />
          </div>
          <div className="form-group col-lg-6">
            <input required placeholder="PostCode / ZIP" name="zipcode" type="text" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-lg-12">
            <button className="btn btn-sm">
              <i className="fi-rs-shuffle mr-10"></i> Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingCalculator;
