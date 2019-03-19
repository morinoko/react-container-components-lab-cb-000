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

export default MovieReviews;