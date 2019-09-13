import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './js/components/Clock';
import LoginControl from './js/components/LoginControl';
import ListItems from './js/components/ListItems';
import CustomForm from './js/components/CustomForm';
import Calculator from './js/components/Calculator';

class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <LoginControl />
        <ListItems numbers={[1, 2, 3, 4, 5]} />
        <CustomForm />
        <Calculator />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
