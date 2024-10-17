// components/BranchSection.tsx
import Image from "next/image";
import React from "react";

const branches = [
  {
    location: "New York, USA",
    address: "27 Division St, New York, NY 10002, USA",
    imgSrc: "/imgs/page/company-1.jpg",
  },
  {
    location: "Paris, France",
    address: "22 Rue des Carmes, 75005 Paris",
    imgSrc: "/imgs/page/company-2.jpg",
  },
  {
    location: "Jakarta, Indonesia",
    address: "2476 Raya Yogyakarta, 89090 Indonesia",
    imgSrc: "/imgs/page/company-3.jpg",
  },
];

const BranchSection: React.FC = () => {
  return (
    <section id="work" className="mt-40 pt-50 pb-50 section-border">
      <div className="container">
        <div className="row mb-50 text-center">
          <div className="col-lg-12">
            <h6 className="mt-0 mb-5 text-uppercase text-brand font-sm">
              Evara Corporation
            </h6>
            <h2 className="mb-15 text-grey-1">
              Our main branches around the world
            </h2>
          </div>
        </div>
        <div className="row">
          {branches.map((branch) => (
            <div className="col-md-4" key={branch.location}>
              <Image
                src={branch.imgSrc}
                alt={branch.location}
                className="btn-shadow-brand hover-up border-radius-10 bg-brand-muted"
                width={414}
                height={276}
              />
              <h4 className="mt-30 mb-15">{branch.location}</h4>
              <p className="text-grey-3">{branch.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchSection;
