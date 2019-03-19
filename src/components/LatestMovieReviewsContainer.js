import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Iu5OvsSMnrfFVzTJ8aHzsqIl2GO8GLgg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

<<<<<<< HEAD
=======
// Code LatestMovieReviewsContainer Here
>>>>>>> cc7df9ab9c1e49d4a2c57e4563d05333f806a5c8
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      reviews: []
    }
  }
  
<<<<<<< HEAD
  componentWillMount() {
    fetch(URL)
      .then(response => response.json())
      .then(json => this.setState({ reviews: json.results }));
  }
  
  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
=======
  render() {
    return (
      <div className="latest-movie-reviews">
      
>>>>>>> cc7df9ab9c1e49d4a2c57e4563d05333f806a5c8
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;