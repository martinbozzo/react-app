import React, { Component } from 'react';

class WarningBanner extends Component {
  constructor(props) {
    super(props);
    this.state = { warn: 'Warning!' };
  }

  render() {
    if (!this.props.warn) {
      return null;
    }

    return (
      <div className="badge-warning">{this.props.warn || this.state.warn}</div>
    );
  }
}

export default WarningBanner;
