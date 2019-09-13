import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './js/components/Clock';
import LoginControl from './js/components/LoginControl';
import WarningBanner from './js/components/WarningBanner';

class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <LoginControl />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
