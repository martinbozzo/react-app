import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './js/components/Clock';
import Toggle from './js/components/Toggle';
import LoginControl from './js/components/LoginControl';

function App() {
  return (
    <div>
      <Clock />
      <Toggle />
      <LoginControl />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
