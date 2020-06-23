import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Navbar>
      <Router>
        <NavItem to={'/'} text="Home"/>
        <NavItem to={'/about'} text="About"/>
        <NavItem to={'/contact'} text="Contact"/>
        <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
      </Router>
    </Navbar>
  );
}

function Navbar(props) {
  return(
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function NavItem(props) {
  return(
    <li className="nav-item">
      <Link to={props.to} className="nav-link"> {props.text} </Link>
    </li>
  );
}

/* 
<Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
*/

export default App;
