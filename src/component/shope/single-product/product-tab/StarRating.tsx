// components/StarRating.tsx
import React from "react";

interface StarRatingProps {
  ratings: { [key: number]: number };
}

const StarRating: React.FC<StarRatingProps> = ({ ratings }) => (
  <>
    {Object.entries(ratings)
      .sort((a, b) => Number(b[0]) - Number(a[0]))
      .map(([stars, percent]) => (
        <div key={stars} className="progress mb-10">
          <span>{stars} star</span>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${percent}%` }}
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {percent}%
          </div>
        </div>
      ))}
  </>
);

export default StarRating;
