<<<<<<< HEAD
import React, { Component } from 'react';

const Review = (props) => {
  return <li key={props.display_title}>{props.headline}</li>
};

const MovieReviews = (props) => {
  return (
    <ul className="review-list">
      {props.reviews.map(Review)}
    </ul>
  )
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
=======
// Code MovieReviews Here
const MovieReview = (props) => {
  <ul className="review-list">
  
  </ul>
};

export default MovieReview;
>>>>>>> cc7df9ab9c1e49d4a2c57e4563d05333f806a5c8
