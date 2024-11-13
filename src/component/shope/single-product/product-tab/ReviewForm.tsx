import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewForm: React.FC = () => {
  const [rating, setRating] = useState<number>(0);

  const handleRatingClick = (value: number) => {
    setRating(value * 20); // Each star represents 20 points
  };

  return (
    <div className="comment-form p-6 border rounded-lg shadow-sm">
      <h4 className="text-lg font-semibold mb-4">Add a review</h4>
      
      <div className="flex items-center mb-4">
        <p className="text-sm font-medium mr-2">Rating:</p>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingClick(star)}
              className="focus:outline-none p-0 m-0 bg-transparent border-none appearance-none" // Ensure no background, border, or appearance
              aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
              style={{ outline: 'none', border: 'none' }} // Inline styles to enforce no border
            >
              {rating >= star * 20 ? (
                <FaStar className="text-yellow-500 text-2xl" />
              ) : (
                <FaRegStar className="text-gray-400 text-2xl" />
              )}
            </button>
          ))}
        </div>
      </div>
      
      <form className="space-y-4">
        <textarea
          className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
          name="comment"
          rows={4}
          placeholder="Write Comment"
        ></textarea>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
            name="name"
            type="text"
            placeholder="Name"
          />
          <input
            className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>

        <input
          className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
          name="website"
          type="text"
          placeholder="Website"
        />

        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 rounded-md font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
