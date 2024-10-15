// components/BannerSection.tsx

const Banner4 = () => {
  return (
    <section className="mb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="banner-bg wow fadeIn animated"
              style={{ backgroundImage: "url(/imgs/banner/banner-8.jpg)" }}
            >
              <div className="banner-content">
                <h5 className="text-grey-4 mb-15">Shop Today’s Deals</h5>
                <h2 className="fw-600">
                  Happy <span className="text-brand">Mothers Day</span>. Big
                  Sale Up to 40%
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner4;
