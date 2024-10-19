import React from "react";
import SingleHeader from "./SingleHeader";
import SingleContent from "./SingleContent";

const SinglePage = () => {
  return (
    <div className="col-lg-9">
      <div className="single-page pr-30">
        <SingleHeader title="Privacy Policy" />
        <SingleContent />
      </div>
    </div>
  );
};

export default SinglePage;
