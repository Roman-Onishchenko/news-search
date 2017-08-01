<<<<<<< HEAD
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from "./constants";
import Api from './api/api.js';
import { fetchSuccess, fetchFail, preloadToFalse } from './actions';
import { List, Map } from 'immutable';

function* fetchNews(action) {
  const api = new Api();

  try {
    let news = yield call(api.fetchNews, action.source);
     yield put(fetchSuccess(news));
   } catch (e) {
     yield put(fetchFail(e.message));
   }
}

export default fetchNews;
=======
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from "./constants";
import Api from './api/api.js';
import { fetchSuccess, fetchFail, preloadToFalse } from './actions';
import { List, Map } from 'immutable';

function* fetchNews(action) {
  const api = new Api();

  try {
    let news = yield call(api.fetchNews, action.source);
     yield put(fetchSuccess(news));
   } catch (e) {
     yield put(fetchFail(e.message));
   }
}

export default fetchNews;
>>>>>>> 7a6132e15209e102b65d86c8b5dbd403297b218d
