// components/ReviewsTab.tsx
import React from "react";
import StarRating from "./StarRating";
import ReviewForm from "./ReviewForm";

interface ReviewsTabProps {
  id: number;
}
const ReviewsTab: React.FC<ReviewsTabProps> = ({ id }) => {
  const ratings = {
    5: 50,
    4: 25,
    3: 15,
    2: 7,
    1: 3,
  };

  return (
    <div className="tab-pane fade show active" id="Reviews">
      <div className="comments-area">
        <div className="row">
          <div className="col-lg-8">
            <h4 className="mb-30">Customer questions & answers</h4>
            <div className="comment-list">
              {/* Add individual customer reviews */}
            </div>
          </div>
          <div className="col-lg-4">
            <h4 className="mb-30">Customer reviews</h4>
            <div className="d-flex mb-30">
              <div className="product-rate d-inline-block mr-15">
                <div className="product-rating" style={{ width: "90%" }}></div>
              </div>
              <h6>4.8 out of 5</h6>
            </div>
            <StarRating ratings={ratings} />
            <a href="#" className="font-xs text-muted">
              How are ratings calculated?
            </a>
          </div>
        </div>
      </div>
      <ReviewForm id={id} />
    </div>
  );
};

export default ReviewsTab;
