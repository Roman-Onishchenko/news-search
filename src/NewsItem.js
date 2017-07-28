import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const NewsItem = (props) => {

  return (
      <div className="current">

      </div>
  )
};

NewsItem.propTypes = {
  // wishList: PropTypes.object,
};

export default connect(
  state => ({
    newslist: state.newsData.get('foundNews'),
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(NewsItem);
