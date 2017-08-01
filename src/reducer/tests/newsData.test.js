import * as types from "../../constants";
import newsData from '../newsData';
import { Map, List } from 'immutable';

describe('newsData', () => {

  it('should handle empty state', () => {
    const state = Map({foundNews: List(), preload: true});
    expect(newsData(undefined, {})).toEqual(state);
  });

  it('should handle PRELOAD_TO_TRUE', () => {
  const state = Map({foundNews: List(), preload: false});

    const action = {
      type: types.PRELOAD_TO_TRUE
    };

    const result = Map({foundNews: List(), preload: true});
   	expect(newsData(state, action)).toEqual(result);
  });

	it('should handle FETCH_SUCCESS', () => {
    const state = new Map({
       foundNews: new List(),
       preload: true
    });

    const newsArr = [{
      id: 1,
      title: "BBC",
      overview: 'str',
      release_date: '12'
   }];

    const action = {
      type: types.FETCH_SUCCESS,
      news: newsArr
    };

    const result = new Map({
     foundNews: newsArr,
     preload: false
   });
   	expect(newsData(state, action)).toEqual(result);
  });

});
