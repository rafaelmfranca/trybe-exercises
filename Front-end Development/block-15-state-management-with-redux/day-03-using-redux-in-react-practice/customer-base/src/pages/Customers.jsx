import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const RegisterLink = () => <Link to="/register">Register page</Link>;
class Customers extends Component {
  render() {
    const { loggedUser, customersList } = this.props;
    const userIsLoggedIn = Object.keys(loggedUser).length > 0;
    const listIsFilled = customersList.length > 0;
    return (
      <div>
        {userIsLoggedIn && listIsFilled && (
          <>
            <ul>
              {customersList.map(({ name, age, email }) => (
                <li>
                  <p>{name}</p>
                  <p>{age}</p>
                  <p>{email}</p>
                </li>
              ))}
            </ul>
            <RegisterLink />
          </>
        )}
        {userIsLoggedIn && !listIsFilled && (
          <>
            <h1>Nenhum cliente cadastrado</h1>
            <RegisterLink />
          </>
        )}
        {!userIsLoggedIn && <h1>Login não efetuado</h1>}
      </div>
    );
  }
}

Customers.propTypes = {
  loggedUser: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  loggedUser: state.loginReducer,
  customersList: state.registerReducer,
});

export default connect(mapStateToProps)(Customers);
