import Image from "next/image";
import React from "react";

interface Testimonial {
  name: string;
  company: string;
  message: string;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    name: "J. Bezos",
    company: "Adobe Jsc",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas.",
    avatarUrl: "/imgs/page/avatar-1.jpg",
  },
  {
    name: "B. Gates",
    company: "Adobe Jsc",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas.",
    avatarUrl: "/imgs/page/avatar-2.jpg",
  },
  {
    name: "B. Meyers",
    company: "Adobe Jsc",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas.",
    avatarUrl: "/imgs/page/avatar-3.jpg",
  },
  {
    name: "B. Meyers",
    company: "Adobe Jsc",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas.",
    avatarUrl: "/imgs/page/avatar-4.jpg",
  },
  {
    name: "B. Meyers",
    company: "Adobe Jsc",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas.",
    avatarUrl: "/imgs/page/avatar-5.jpg",
  },
  {
    name: "B. Meyers",
    company: "Adobe Jsc",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas.",
    avatarUrl: "/imgs/page/avatar-6.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container pt-25">
        <div className="row mb-50">
          <div className="col-lg-12 col-md-12 text-center">
            <h6 className="mt-0 mb-10 text-uppercase text-brand font-sm wow fadeIn animated">
              some facts
            </h6>
            <h2 className="mb-15 text-grey-1 wow fadeIn animated">
              Take a look what
              <br /> our clients say about us
            </h2>
            <p className="w-50 m-auto text-grey-3 wow fadeIn animated">
              At vero eos et accusamus et iusto odio dignissimos ducimus
              quiblanditiis praesentium. ebitis nesciunt voluptatum dicta
              reprehenderit accusamus
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex">
                <div className="hero-card-icon icon-left-2 hover-up">
                  <Image
                    className="btn-shadow-brand hover-up border-radius-5 bg-brand-muted"
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    width={68}
                    height={86}
                  />
                </div>
                <div className="pl-30">
                  <h5 className="mb-5 fw-500">{testimonial.name}</h5>
                  <p className="font-sm text-grey-5">{testimonial.company}</p>
                  <p className="text-grey-3">
                    &quot;{testimonial.message}&quot;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-30">
          <div className="col-12 text-center">
            <p className="wow fadeIn animated">
              <button
                className="btn btn-brand text-white btn-shadow-brand hover-up btn-lg"
                
              >
                View More
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
