import { CUSTOMER_REGISTRATION } from '../actions/action';

const INITIAL_STATE = {};

export const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CUSTOMER_REGISTRATION:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
