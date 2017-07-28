import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from "./constants";
import Api from './api/api.js';
import { fetchSuccess, fetchFail, fetchMoviesData } from './actions';
import { List, Map } from 'immutable';

function* fetchNews(action) {
  const api = new Api();

  try {
    let news = yield call(api.fetchNews, action.title);
     yield put(fetchSuccess(news));
   } catch (e) {
     yield put(fetchFail(e.message));
   }
}

export default fetchNews;
