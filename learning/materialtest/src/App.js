import React from 'react';
import './index.css';
import {Grid, CssBaseline} from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Drawer from './components/Drawer'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>({
  container: {
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#23232e',
    height: '100vh'
  }
}))

function App(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.container} >
      <Router>
        <CssBaseline/>

        <Drawer/>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
