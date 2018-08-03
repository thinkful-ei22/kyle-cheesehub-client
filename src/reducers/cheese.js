import * as types from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export const cheeseReducer = (state=initialState, action) => {
  switch (action.type) {
  case(types.FETCH_CHEESES_REQUEST):
    return Object.assign({}, state, {
      loading: true
    });
  case(types.FETCH_CHEESES_SUCCESS):
    return Object.assign({}, state, {
      loading: false,
      error: null,
      cheeses: action.cheeses
    });
  case(types.FETCH_CHEESES_ERROR):
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  default:
    return state;
  }
};
