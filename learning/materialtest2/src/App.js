import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Home from './components/Home'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Redirect exact from="/" to="/about"/>
        <Route exact path="/:page?" render={props => <Home {...props} />} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
