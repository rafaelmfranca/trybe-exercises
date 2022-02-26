import { CUSTOMER_REGISTRATION, LOGIN } from '../actions/action';

const INITIAL_STATE_REGISTER = [];
const INITIAL_STATE_LOGIN = {};

export const registerReducer = (state = INITIAL_STATE_REGISTER, action) => {
  switch (action.type) {
    case CUSTOMER_REGISTRATION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const loginReducer = (state = INITIAL_STATE_LOGIN, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
};
