const emptyUsername = {
  username: '',
  password: '12345',
};

const invalidUsername = {
  username: 'abcd',
  password: '12345',
};

const emptyPassword = {
  username: 'username',
  password: '',
};

const invalidPassword = {
  username: 'username',
  password: '1234',
};

const validPayload = {
  username: 'mikehillyer',
  password: 'password',
};

const invalidPayload = {
  username: 'mikehillye',
  password: 'password',
};

export default {
  emptyUsername,
  invalidUsername,
  emptyPassword,
  invalidPassword,
  validPayload,
  invalidPayload,
};
