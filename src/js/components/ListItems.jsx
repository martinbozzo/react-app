import React, { Component } from 'react';

class ListItems extends Component {
  render() {
    const numbers = this.props.numbers;

    return (
      <ul>
        {numbers.map(number => (
          <li key={number.toString()}>{number}</li>
        ))}
      </ul>
    );
  }
}

export default ListItems;
