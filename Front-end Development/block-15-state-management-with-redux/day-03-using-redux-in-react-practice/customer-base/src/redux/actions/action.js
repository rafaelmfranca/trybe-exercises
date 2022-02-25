export const CUSTOMER_REGISTRATION = 'CUSTOMER_REGISTRATION';
export const LOGIN = 'LOGIN';

export const sendCustomerInfo = (payload) => ({
  type: CUSTOMER_REGISTRATION,
  payload,
});

export const login = (payload) => ({
  type: LOGIN,
  payload,
});
