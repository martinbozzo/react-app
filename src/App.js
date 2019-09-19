import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './js/components/ErrorBoundary';
import Clock from './js/components/Clock';
import LoginControl from './js/components/LoginControl';
import ListItems from './js/components/ListItems';
import CustomForm from './js/components/CustomForm';
import Calculator from './js/components/Calculator';
import WelcomeDialog from './js/components/WelcomeDialog';
import { ThemeContext, themes } from './js/components/theme-context';
import ThemedButton from './js/components/themed-button';
import TicTacToeGame from './js/components/tic-tac-toe/Game';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <ErrorBoundary>
        <Clock />
        <LoginControl />
        <ListItems numbers={[1, 2, 3, 4, 5]} />
        <CustomForm />
        <Calculator />
        <WelcomeDialog />
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <TicTacToeGame />
      </ErrorBoundary>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
