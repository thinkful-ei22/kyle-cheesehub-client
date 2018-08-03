import { API_BASE_URL } from '../config';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses
});
export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error) => ({
  type: FETCH_CHEESES_ERROR,
  error
});

export const FETCH_CHEESES = 'FETCH_CHEESES';
export const fetchCheeses = () => dispatch => {
  console.log('fetching...');
  dispatch(fetchCheesesRequest());
  return fetch(`${API_BASE_URL}/api/cheeses`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(fetchCheesesSuccess(data));
    })
    .catch(err => {
      dispatch(fetchCheesesError(err));
    });
};