const CouponForm: React.FC = () => {
    return (
      <div className="coupon">
        <form action="#" target="_blank">
          <div className="form-row row justify-content-center">
            <div className="form-group col-lg-6">
              <input className="font-medium" name="Coupon" placeholder="Enter Your Coupon" />
            </div>
            <div className="form-group col-lg-6">
              <button className="btn btn-sm">
                <i className="fi-rs-label mr-10"></i>Apply
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default CouponForm;
  