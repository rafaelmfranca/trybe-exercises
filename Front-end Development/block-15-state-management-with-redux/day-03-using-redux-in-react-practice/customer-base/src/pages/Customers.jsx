import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
class Customers extends Component {
  render() {
    const { loggedUser } = this.props;
    return (
      <div>
        {!Object.keys(loggedUser).length ? (
          <h1>Login não efetuado</h1>
        ) : (
          <h1>Customers</h1>
        )}
      </div>
    );
  }
}

Customers.propTypes = {
  loggedUser: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  loggedUser: state.loginReducer,
});

export default connect(mapStateToProps)(Customers);
