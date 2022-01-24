import React, { Component } from 'react';
import Image from './Image';
import PropTypes from 'prop-types';
class UserProfile extends Component {
  render() {
    const { name, email, avatar } = this.props.user;

    return (
      <div>
        <p> {name} </p>
        <p> {email} </p>
        <Image source={avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.number,
    email: PropTypes.string,
    avatar: PropTypes.string,
  }),
}.isRequired;

export default UserProfile;
