import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NewsList.css';

class NewsList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNews();
  }

  render() {

    const newsList = this.props.newslist.toJS();
    return (
        <div className="news-list">
          <ul>
            {newsList.map((val, index) =>
              <li key={index}
                  className="news-item"
              >
                <p className="news-item__title">{val.title}</p>
                <img className="news-item__img"
                  src={val.urlToImage}
                  alt="news" />
                <span className="news-item__author">{val.author}, at </span>
                <span className="news-item__date">{val.publishedAt}</span>
                <p className="news-item__description">{val.description}</p>
                <a className="news-item__link"
                  target="_blank"
                  href={val.url}>Visit official website</a>

              </li>
              )
            }
          </ul>
        </div>
    )
  };
};

NewsList.propTypes = {
  // wishList: PropTypes.object,
};

export default connect(
  state => ({
    newslist: state.newsData.get('foundNews'),
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(NewsList);
