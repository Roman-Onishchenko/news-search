import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewsList from './NewsList';
import NewsItem from './NewsItem';

class App extends Component {

  render() {

    return (
          <Switch>
            <Route
              exact path='/'
              component={NewsList}
              newslist={this.props.newslist}
            />
            <Route path='/:number' component={NewsItem}/>
          </Switch>
    );
  }
}

App.propTypes = {

};

export default connect(
  state => ({
    newslist: state.newsData.get('foundNews'),
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(App);
