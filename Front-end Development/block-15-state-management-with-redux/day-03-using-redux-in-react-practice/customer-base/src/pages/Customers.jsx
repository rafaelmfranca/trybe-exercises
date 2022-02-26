import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { deleteRegister } from '../redux/actions/action';

const RegisterLink = () => <Link to="/register">Register page</Link>;
class Customers extends Component {
  state = {
    customers: [],
  };

  componentDidMount = () => {
    const { customersList } = this.props;
    this.setState({ customers: customersList });
  };

  orderCustomers = () => {
    const { customers } = this.state;
    const orderedCustomers = customers.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.setState({ customers: orderedCustomers });
  };

  deleteRegister = (register) => {
    const { dispatch } = this.props;
    dispatch(deleteRegister(register));
    this.setState(({ customers: prevCustomers }) => ({
      customers: prevCustomers.filter((customer) => customer !== register),
    }));
  };

  render() {
    const { loggedUser } = this.props;
    const { customers } = this.state;
    const userIsLoggedIn = Object.keys(loggedUser).length > 0;
    const listIsFilled = customers.length > 0;
    return (
      <div>
        {userIsLoggedIn && listIsFilled && (
          <>
            <ul>
              {customers.map((customer) => (
                <li key={customer.email}>
                  <p>{customer.name}</p>
                  <p>{customer.age}</p>
                  <p>{customer.email}</p>
                  <Button
                    type="button"
                    label="X"
                    onClick={() => this.deleteRegister(customer)}
                  />
                </li>
              ))}
            </ul>
            <RegisterLink />
            <Button
              type="button"
              label="Ordenar"
              onClick={this.orderCustomers}
            />
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
