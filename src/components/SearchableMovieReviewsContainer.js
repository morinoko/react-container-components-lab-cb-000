import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Iu5OvsSMnrfFVzTJ8aHzsqIl2GO8GLgg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

<<<<<<< HEAD
=======
// Code SearchableMovieReviewsContainer Here
>>>>>>> cc7df9ab9c1e49d4a2c57e4563d05333f806a5c8
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }
  
<<<<<<< HEAD
  handleSubmit = event => {
    event.preventDefault();
    const query = this.state.searchTerm;
    
    fetch(URL+`&query=${query}`)
      .then(response => response.json())
      .then(json => this.setState({ reviews: json.results })
    );
  }
  
  handleInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  }
  
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search term:</label>
          <input type="text" onChange={this.handleInputChange} /><br />
          <button type="submit">Submit</button>
        </form>
        
        {this.state.reviews.length > 0 &&
          <h2>Review Search Results</h2>
        }
        <MovieReviews reviews={this.state.reviews} />
=======
  render() {
    return (
      <div className="searchable-movie-reviews">
>>>>>>> cc7df9ab9c1e49d4a2c57e4563d05333f806a5c8
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;