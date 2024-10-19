
import React from "react";

const Address: React.FC = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="card mb-3">
          <div className="card-header">
            <h5 className="mb-0">Billing Address</h5>
          </div>
          <div className="card-body">
            <address>
              3522 Interstate 75 Business Spur,<br />
              Sault Ste. Marie, MI 49783
            </address>
            <a href="#" className="btn-small">Edit</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">Shipping Address</h5>
          </div>
          <div className="card-body">
            <address>
              4299 Express Lane, Sarasota, FL 34249 USA<br />
              Phone: 1.941.227.4444
            </address>
            <a href="#" className="btn-small">Edit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
