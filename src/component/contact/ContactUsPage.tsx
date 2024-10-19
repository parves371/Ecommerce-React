import React from "react";
import Button from "./Button";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Link from "next/link";

const ContactUsPage: React.FC = () => {
  return (
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href={"/"}>Home</Link>
            <span></span> Pages
            <span></span> Contact us
          </div>
        </div>
      </div>
      <section className="hero-2 bg-green">
        <div className="hero-content">
          <div className="container">
            <div className="text-center">
              <h4 className="text-brand mb-20">Get in touch</h4>
              <h1 className="mb-20 wow fadeIn animated font-xxl fw-900">
                Let&apos;s Talk About <br /> Your{" "}
                <span className="text-style-1">Idea</span>
              </h1>
              <p className="w-50 m-auto mb-50 wow fadeIn animated">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                quam eius placeat, a quidem mollitia at accusantium
                reprehenderit pariatur provident nam ratione incidunt magnam
                sequi.
              </p>
              <p className="wow fadeIn animated">
                <Button
                  href="/page-about"
                  className="btn-brand btn-lg font-weight-bold text-white border-radius-5 btn-shadow-brand hover-up"
                >
                  About Us
                </Button>
                <Button
                  href="/support-center"
                  className="btn-outline btn-lg btn-brand-outline font-weight-bold text-brand bg-white text-hover-white ml-15 border-radius-5 btn-shadow-brand hover-up"
                >
                  Support Center
                </Button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-border pt-50 pb-50">
        <div className="container">
          <div id="map-panes" className="leaflet-map mb-50"></div>
          <div className="row">
            <ContactInfo
              title="Office"
              address="205 North Michigan Avenue, Suite 810, Chicago, 60601, USA"
              phone="(123) 456-7890"
              email="info@example.com"
            />
            <ContactInfo
              title="Studio"
              address="205 North Michigan Avenue, Suite 810, Chicago, 60601, USA"
              phone="(123) 456-7890"
              email="studio@example.com"
            />
            <ContactInfo
              title="Shop"
              address="205 North Michigan Avenue, Suite 810, Chicago, 60601, USA"
              phone="(123) 456-7890"
              email="shop@example.com"
            />
          </div>
        </div>
      </section>
      <section className="pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 m-auto">
              <div className="contact-from-area padding-20-row-col wow FadeInUp">
                <h3 className="mb-10 text-center">Drop Us a Line</h3>
                <p className="text-muted mb-30 text-center font-sm">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <ContactForm />
                <p className="form-message"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;
