export const CUSTOMER_REGISTRATION = 'CUSTOMER_REGISTRATION';

export const sendCustomerInfo = (payload) => ({
  type: CUSTOMER_REGISTRATION,
  payload,
});
