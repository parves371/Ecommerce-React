import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">Hello Rosie!</h5>
      </div>
      <div className="card-body">
        <p>
          From your account dashboard, you can easily check & view your{" "}
          <a href="#">recent orders</a>, manage your{" "}
          <a href="#">shipping and billing addresses</a>, and{" "}
          <a href="#">edit your password and account details.</a>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
