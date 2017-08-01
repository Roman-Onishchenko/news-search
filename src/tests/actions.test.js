import * as actions from '../actions'
import * as types from "../constants";
import { Map, Record } from 'immutable';

describe('actions', () => {

  it('should handle FETCH_NEWS', () => {

    const source = 'Category';
    const expectedAction = {
      type: types.FETCH_NEWS,
      source,
    }
    expect(actions.fetchNews(source)).toEqual(expectedAction);
  });

  it('should handle FETCH_SUCCESS', () => {
    const news = [{
      id:1,
      title: 'news'
    }];
    const expectedAction = {
      type: types.FETCH_SUCCESS,
      news
    }
    expect(actions.fetchSuccess(news)).toEqual(expectedAction);
  });

  it('should handle PRELOAD_TO_TRUE', () => {

    const expectedAction = {
      type: types.PRELOAD_TO_TRUE,
    }
    expect(actions.preloadtoTrue()).toEqual(expectedAction);
  });

  it('should handle FETCH_FAIL', () => {

    const message = 'Error';
    const expectedAction = {
      type: types.FETCH_FAIL,
      message
    }
    expect(actions.fetchFail(message)).toEqual(expectedAction);
  });


});
