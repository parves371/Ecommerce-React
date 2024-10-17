// components/ClientLogos.tsx
import React from "react";

const clientLogos = [
  "/imgs/banner/brand-1.png",
  "/imgs/banner/brand-2.png",
  "/imgs/banner/brand-3.png",
  "/imgs/banner/brand-4.png",
  "/imgs/banner/brand-5.png",
  "/imgs/banner/brand-6.png",
];

const ClientLogos: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container pb-25">
        <h3 className="section-title mb-20 text-center">
          <span>Featured</span> Clients
        </h3>
        <div className="carausel-6-columns-cover">
          <div className="carausel-6-columns text-center">
            {clientLogos.map((logo, index) => (
              <div className="brand-logo" key={index}>
                <img
                  className="img-grey-hover"
                  src={logo}
                  alt={`Brand ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
