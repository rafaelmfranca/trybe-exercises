const Redux = require('redux');

const signIn = (email) => ({
  type: 'LOGIN',
  email,
});

const DEFAULT_STATE = {
  login: false,
  email: '',
};

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(signIn('test@test.com', 'test123'));

console.log(store.getState());
