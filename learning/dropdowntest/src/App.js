import './index.css'
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <Navbar>
      <NavItem icon="😀"/>
      <NavItem icon="🙃"/>
      <NavItem icon="🤨">
        <DropdownMenu></DropdownMenu>
      </NavItem>
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

  const [open, setOpen] = useState(false);

  return(
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return(
      <a 
      href="#" 
      className="menu-item" 
      onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>

        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return(
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition 
      in={activeMenu === 'main'} 
      unmountOnExit 
      timeout={500}
      classNames="menu-primary"
      onEnter={calcHeight}
      >
       <div className="menu">

        <DropdownItem>My Profile</DropdownItem>

        <DropdownItem leftIcon="🥶" goToMenu="settings" />
        </div>
      </CSSTransition>

      <CSSTransition 
      in={activeMenu === 'settings'} 
      unmountOnExit 
      timeout={500}
      classNames="menu-secondary"
      onEnter={calcHeight}
      >
       <div className="menu">
        <DropdownItem leftIcon="👈" goToMenu="main"/>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
