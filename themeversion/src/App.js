import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { createMuiTheme,makeStyles,responsiveFontSizes,ThemeProvider } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core'
import Home from './components/Home'

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#f280a1',
    },
  }
});

theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  container: {
    background: "#212121",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.container}>
        <Switch>
          <Redirect exact from="/" to="/nollning"/>
          <Route exact path="/:page?" render={props => <Home {...props} />} />
        </Switch>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
