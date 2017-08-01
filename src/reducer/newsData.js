import * as types from '../constants';
import { Map, List } from 'immutable';

const initialState = new Map({
   foundNews: new List(),
   preload: true
});

export default function newsDataReducer(state = initialState, action) {

    switch (action.type) {

      case types.FETCH_SUCCESS:
        return state.set('foundNews', action.news).merge({
          preload: false
        });

      case types.PRELOAD_TO_TRUE:
        return state.set('preload', true);

      default:
    	  return state;
    }
  }
