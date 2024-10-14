import FeatureItem from "./FeatureItem";

const FeaturedSection = () => {
  // Data for features
  const features = [
    {
      imageSrc: "/imgs/theme/icons/feature-1.png",
      altText: "Free Shipping",
      label: "Free Shipping",
      bgColorClass: "bg-1",
    },
    {
      imageSrc: "/imgs/theme/icons/feature-2.png",
      altText: "Online Order",
      label: "Online Order",
      bgColorClass: "bg-3",
    },
    {
      imageSrc: "/imgs/theme/icons/feature-3.png",
      altText: "Save Money",
      label: "Save Money",
      bgColorClass: "bg-2",
    },
    {
      imageSrc: "/imgs/theme/icons/feature-4.png",
      altText: "Promotions",
      label: "Promotions",
      bgColorClass: "bg-4",
    },
    {
      imageSrc: "/imgs/theme/icons/feature-5.png",
      altText: "Happy Sell",
      label: "Happy Sell",
      bgColorClass: "bg-5",
    },
    {
      imageSrc: "/imgs/theme/icons/feature-6.png",
      altText: "24/7 Support",
      label: "24/7 Support",
      bgColorClass: "bg-6",
    },
  ];

  return (
    <section className="featured section-padding position-relative">
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
              <FeatureItem
                imageSrc={feature.imageSrc}
                altText={feature.altText}
                label={feature.label}
                bgColorClass={feature.bgColorClass}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
