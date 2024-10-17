"use client";
import { useState } from "react";

const LoginForm = ({ isOpen }: { isOpen: boolean }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with", { email, password });
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
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.panelCollapse} className="login_form">
      <div className="panel-body">
        <p className="mb-30 font-sm">
          If you have shopped with us before, please enter your details below.
          If you are a new customer, please proceed to the Billing &amp;
          Shipping section.
        </p>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="email"
              placeholder="Username Or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.formControl}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.formControl}
            />
          </div>
          <div className="login_footer form-group">
            <div className="chek-form">
              <div className="custome-checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  id="remember"
                  value=""
                />
                <label className="form-check-label" htmlFor="remember">
                  <span>Remember me</span>
                </label>
              </div>
            </div>
            <a href="#">Forgot password?</a>
          </div>
          <div style={styles.formGroup}>
            <button type="submit" style={styles.button}>
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
