import React from "react";

const AccountDetails: React.FC = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5>Account Details</h5>
      </div>
      <div className="card-body">
        <form method="post" name="enq">
          <div className="row">
            <div className="form-group col-md-6">
              <label>
                First Name <span className="required">*</span>
              </label>
              <input
                required
                className="form-control square"
                name="name"
                type="text"
              />
            </div>
            <div className="form-group col-md-6">
              <label>
                Last Name <span className="required">*</span>
              </label>
              <input required className="form-control square" name="phone" />
            </div>
            {/* Add more fields here */}
            <div className="col-md-12">
              <button type="submit" className="btn btn-fill-out submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
