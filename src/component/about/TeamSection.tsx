"use client";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Patric Adams",
    position: "CEO & Co-Founder",
    imgSrc: "/imgs/page/avatar-1.jpg",
  },
  {
    name: "Dilan Specter",
    position: "Head Engineer",
    imgSrc: "/imgs/page/avatar-2.jpg",
  },
  {
    name: "Tomas Baker",
    position: "Senior Planner",
    imgSrc: "/imgs/page/avatar-3.jpg",
  },
  {
    name: "Norton Mendos",
    position: "Project Manager",
    imgSrc: "/imgs/page/avatar-4.jpg",
  },
];

const buttonStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

const hoverStyle: React.CSSProperties = {
  backgroundColor: "#0056b3",
};

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="pt-25">
      <div className="container">
        <div className="row mb-50 align-items-center">
          <div className="col-md-6">
            <h6 className="mt-0 mb-15 text-uppercase font-sm text-brand">
              Our Team
            </h6>
            <h2 className="mb-15">Top team of experts</h2>
            <p className="text-grey-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-md-6 text-md-end mt-30">
            <div
              style={buttonStyle}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, hoverStyle);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, buttonStyle);
              }}
            >
              All Members
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member) => (
            <div className="col-lg-3 col-md-6" key={member.name}>
              <div className="blog-card text-center">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  className="border-radius-10 mb-30 hover-up"
                  width={306}
                  height={381}
                />
                <h4 className="fw-500 mb-0">{member.name}</h4>
                <p className="fw-400 text-brand mb-10">{member.position}</p>
                <div
                  className="mobile-social-icon mb-sm-5 mb-md-0"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "17px",
                  }}
                >
                  <FaFacebookF />
                  <FaTwitter />
                  <FaPinterestP />
                  <FaInstagram />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
