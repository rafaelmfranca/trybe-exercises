import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import { sendCustomerInfo } from '../redux/actions/action';

const CustomersLink = () => <Link to="/customers">Customers page</Link>;
class Register extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  };

  validateInputFields = () => {
    const { name, email, age } = this.state;
    const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
    const isValidAge = age.length > 0;
    const isValidName = name.length > 0;
    return isValidEmail && isValidAge && isValidName;
  };

  clearAllFields = () => {
    this.setState({ name: '', age: '', email: '' });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    if (this.validateInputFields()) {
      const { dispatch } = this.props;
      dispatch(sendCustomerInfo(this.state));
      this.clearAllFields();
    }
  };

  render() {
    const { name, age, email } = this.state;
    const { loggedUser } = this.props;
    const userIsLoggedIn = Object.keys(loggedUser).length > 0;
    return (
      <div>
        {userIsLoggedIn && (
          <>
            <fieldset>
              <Input
                label="Nome: "
                type="text"
                onChange={this.handleChange}
                value={name}
                name="name"
                required
              />
              <Input
                label="Idade: "
                type="number"
                onChange={this.handleChange}
                value={age}
                name="age"
                required
              />
              <Input
                label="Email: "
                type="text"
                onChange={this.handleChange}
                value={email}
                name="email"
                required
              />
              <Button
                type="button"
                label="Enviar"
                onClick={this.handleSubmit}
              />
            </fieldset>
            <CustomersLink />
          </>
        )}
      </div>
    );
  }
}

Register.propTypes = {
  loggedUser: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  loggedUser: state.loginReducer,
});

export default connect(mapStateToProps)(Register);
