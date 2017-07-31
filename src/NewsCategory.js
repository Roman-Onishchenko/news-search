import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/NewsList.css';
import preload from './images/preview.png';

const Header = () => (
  <header>
    <nav>
      <ul className="header-nav">
        <li><Link to='/'>Назад</Link></li>
      </ul>
    </nav>
  </header>
);

export class NewsCategory extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const source = this.props.match.params.source;
    this.props.fetchNews(source);
    this.props.preloadtoTrue();
  }

  render() {

    const newsList = this.props.newslist.get('foundNews').toJS();
    const preview = this.props.newslist.get('preload');

    return (
      <div>

        {preview && <div className="preloader">
          <img className="preload_img" src={preload} alt="preload" />
        </div>}

        <div className="news-category">

          <Header />
          <ul>
            {newsList.map((val, index) =>
              <li key={index}
                  className="news-item"
              >
                <p className="news-item__title">{val.title}</p>
                <img className="news-item__img"
                  src={val.urlToImage}
                  alt="news" />
                <span className="news-item__author">{val.author} at </span>
                <span className="news-item__date">{new Date(val.publishedAt).toDateString()}</span>
                <p className="news-item__description">{val.description}</p>
                <a className="news-item__link"
                  target="_blank"
                  href={val.url}>Visit official website</a>
              </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  };
};

NewsCategory.propTypes = {
  newslist: PropTypes.object
};

export default connect(
  state => ({
    newslist: state.newsData,
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(NewsCategory);
