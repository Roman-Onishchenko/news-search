import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from "./constants";
import Api from './api/api.js';
import { fetchSuccess, fetchFail, fetchMoviesData } from './actions';
import { List, Map } from 'immutable';
import fetchNews from './fetchNewsSaga';

function* mySaga() {
  yield takeEvery(types.FETCH_NEWS, fetchNews);
}

export default mySaga;
