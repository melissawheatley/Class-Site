import React, { Component } from 'react';
// import logo from './logo.svg';
import '.././App.css';
import './Nav.css';

import C24Logo from  '.././images/nss24-logo.svg';
import { Navbar } from 'reactstrap';

class Nav extends Component {
  render() {
    return (
      <Navbar className="d-flex justify-content-between navBar">
       <img src={C24Logo} alt="C24 Class Logo" className="c24Logo"/>
       <div className="rightSideNav">

          <li className="navList">About </li>
          <li className="navList">Meet </li>
          <li className="navList">Tech </li>
          <li className="navList">Case </li>
          </div>
      </Navbar>
    );
  }
}

export default Nav;
