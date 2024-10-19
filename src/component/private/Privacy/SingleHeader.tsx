import React from 'react';

const SingleHeader = ({ title }) => {
  return (
    <div className="single-header style-2">
      <h2>{title}</h2>
      <div className="entry-meta meta-1 font-xs mt-15 mb-15">
        <span className="post-by">By <a href="#">John</a></span>
        <span className="post-on has-dot">9 April 2020</span>
        <span className="time-reading has-dot">8 mins read</span>
        <span className="hit-count has-dot">69k Views</span>
      </div>
    </div>
  );
};

export default SingleHeader;