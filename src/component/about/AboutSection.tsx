// components/AboutSection.tsx
import Image from "next/image";
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container pt-25">
        <div className="row">
          <div className="col-lg-6 align-self-center mb-lg-0 mb-4">
            <h6 className="mt-0 mb-15 text-uppercase font-sm text-brand">
              Our Company
            </h6>
            <h1 className="font-heading mb-40">
              We are Building The Destination For Getting Things Done
            </h1>
            <p>
              Tempus ultricies augue luctus et ut suscipit. Morbi arcu, ultrices
              purus dolor erat bibendum sapien metus.
            </p>
            <p>
              Tempus ultricies augue luctus et ut suscipit. Morbi arcu, ultrices
              purus dolor erat bibendum sapien metus. Sit mi, pharetra, morbi
              arcu id. Pellentesque dapibus nibh augue senectus.
            </p>
          </div>
          <div className="col-lg-6">
            <Image src="/imgs/page/about-1.png" alt="About Us" width={636} height={258} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
