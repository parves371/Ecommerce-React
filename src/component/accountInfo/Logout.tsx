"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Logout: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Perform logout logic here, such as clearing tokens or user data
    console.log("User logged out");
    router.push("/login"); // Redirect to login page after logout
  };

  return (
    <li className="nav-item">
      <a className="nav-link" onClick={handleLogout}>
        <i className="fi-rs-sign-out mr-10"></i>Logout
      </a>
    </li>
  );
};

export default Logout;
