import React, { Component } from 'react';
import Image from './Image';

export default class UserProfile extends Component {
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
