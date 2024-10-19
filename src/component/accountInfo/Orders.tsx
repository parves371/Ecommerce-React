import React from "react";

const Orders: React.FC = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">Your Orders</h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1357</td>
                <td>March 4, 2020</td>
                <td>Processing</td>
                <td>$125.00 for 2 items</td>
                <td>
                  <a href="#" className="btn-small d-block">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td>#2468</td>
                <td>June 29, 2020</td>
                <td>Completed</td>
                <td>$364.00 for 5 items</td>
                <td>
                  <a href="#" className="btn-small d-block">
                    View
                  </a>
                </td>
              </tr>
              {/* Add more orders here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
