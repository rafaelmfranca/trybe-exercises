import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { login } from '../redux/actions/action';
class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  validateInputFields = () => {
    const { email, password } = this.state;
    const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
    const isValidPassword = password.length > 0;
    return isValidEmail && isValidPassword;
  };

  handleSubmit = () => {
    if (this.validateInputFields()) {
      const { dispatch, history } = this.props;
      dispatch(login(this.state));
      history.push('/customers');
    }
  };

  render() {
    const { password, email } = this.state;
    return (
      <fieldset>
        <Input
          label="Email: "
          type="text"
          onChange={this.handleChange}
          value={email}
          name="email"
          required
        />
        <Input
          label="Password: "
          type="text"
          onChange={this.handleChange}
          value={password}
          name="password"
          required
        />
        <Button type="button" label="Enviar" onClick={this.handleSubmit} />
      </fieldset>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default connect()(Login);
