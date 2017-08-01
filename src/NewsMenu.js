<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { Link } from 'react-router-dom';
import './styles/NewsList.css';

export class NewsMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="news-list">
      <ul>
        <li><Link to="/bbc-sport">Спортивные новости</Link></li>
        <li><Link to="/the-economist">Финансовые новости</Link></li>
        <li><Link to="/techradar">Новости науки</Link></li>
        <li><Link to="/usa-today">Зарубежные новости</Link></li>
        <li><Link to="/google-news">Новости культуры</Link></li>
        <li><Link to="/fortune">Разное</Link></li>
      </ul>
    </div>
  )}
}

export default connect(
  state => ({

  }),
  dispatch => bindActionCreators(actions, dispatch)
)(NewsMenu);
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { Link } from 'react-router-dom';
import './styles/NewsList.css';

class NewsMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="news-list">
      <ul>
        <li><Link to="/bbc-sport">Спортивные новости</Link></li>
        <li><Link to="/the-economist">Финансовые новости</Link></li>
        <li><Link to="/techradar">Новости науки</Link></li>
        <li><Link to="/usa-today">Зарубежные новости</Link></li>
        <li><Link to="/google-news">Новости культуры</Link></li>
        <li><Link to="/fortune">Разное</Link></li>
      </ul>
    </div>
  )}
}

export default connect(
  state => ({

  }),
  dispatch => bindActionCreators(actions, dispatch)
)(NewsMenu);
>>>>>>> 7a6132e15209e102b65d86c8b5dbd403297b218d
