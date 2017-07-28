import * as types from '../constants';
import { Map, List } from 'immutable';

const initialState = new Map({
   foundNews: new List()
});

export default function newsDataReducer(state = initialState, action) {

    switch (action.type) {

      case types.FETCH_SUCCESS:
        return state.set('foundNews', action.news);

      default:
    	  return state;
    }
  }
