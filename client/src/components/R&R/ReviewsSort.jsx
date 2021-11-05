import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import styled from 'styled-components';
import handler from '../../helpers/reviewhandler.js';

class ReviewsSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'relevant'
    }
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  componentDidMount() {

  }
  handleSortChange(e) {
    this.setState({ sort: e.target.value }, () => {
      this.props.updateReviews(sort)
  })
}

  // default is relevance, add helpful and newest

  render () {

    return (
    <div>
      <form>
          <label>{this.props.total} reviews, sorted by:
            <select value={this.state.sort} onChange={this.handleSortChange}>
              <option value="relevant">relevance</option>
              <option value="newest">new</option>
              <option value="helpful">helpfulness</option>
            </select>
          </label>
        </form>
    </div>
    )
  }
}


export default ReviewsSort;
