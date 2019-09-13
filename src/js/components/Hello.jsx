import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Anonymous',
      lastName: 'User'
    };
  }

  componentDidMount() {
    this.setState((state, props) => ({
      firstName: this.props.isLoggedIn ? props.firstName : state.firstName,
      lastName: this.props.isLoggedIn ? props.lastName : state.lastName
    }));
  }

  render() {
    return (
      <h1> Hello, {this.state.firstName + ' ' + this.state.lastName}! </h1>
    );
  }
}

export default Hello;
