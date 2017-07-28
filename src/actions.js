import * as types from "./constants";

export function fetchNews() {
  return {
    type: types.FETCH_NEWS,
  };
}

export function fetchSuccess(news) {
  return {
    type: types.FETCH_SUCCESS,
    news
  };
}

export function fetchFail(message) {
  return {
    type: types.FETCH_FAIL,
    message
  };
}
