<<<<<<< HEAD
import * as types from "./constants";

export function fetchNews(source) {
  return {
    type: types.FETCH_NEWS,
    source
  };
}

export function fetchSuccess(news) {
  return {
    type: types.FETCH_SUCCESS,
    news
  };
}

export function preloadtoTrue() {
  return {
    type: types.PRELOAD_TO_TRUE,
  };
}

export function fetchFail(message) {
  return {
    type: types.FETCH_FAIL,
    message
  };
}
=======
import * as types from "./constants";

export function fetchNews(source) {
  return {
    type: types.FETCH_NEWS,
    source
  };
}

export function fetchSuccess(news) {
  return {
    type: types.FETCH_SUCCESS,
    news
  };
}

export function preloadtoTrue() {
  return {
    type: types.PRELOAD_TO_TRUE,
  };
}

export function fetchFail(message) {
  return {
    type: types.FETCH_FAIL,
    message
  };
}
>>>>>>> 7a6132e15209e102b65d86c8b5dbd403297b218d
