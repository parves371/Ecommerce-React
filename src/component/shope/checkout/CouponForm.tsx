"use client";
import { useState } from "react";

const CouponForm = ({ isOpen }: { isOpen: boolean }) => {
  const [coupon, setCoupon] = useState<string>("");

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Coupon code applied:", coupon);
  };

  const styles = {
    panelCollapse: {
      maxHeight: isOpen ? "500px" : "0", // Adjust max-height for smooth transition
      overflow: "hidden", // Hide content when collapsed
      transition: "max-height 0.5s ease-in-out", // Smooth transition effect
    },
    formGroup: {
      marginBottom: "15px",
    },
    formControl: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ddd",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.panelCollapse} className="coupon_form">
      <div className="panel-body">
        <p className="mb-30 font-sm">
          If you have a coupon code, please apply it below.
        </p>
        <form onSubmit={handleApplyCoupon}>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Enter Coupon Code..."
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              style={styles.formControl}
            />
          </div>
          <div style={styles.formGroup}>
            <button type="submit" style={styles.button}>
              Apply Coupon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CouponForm;
