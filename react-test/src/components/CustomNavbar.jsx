import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="https://www.linkedin.com/in/sachincdeshpande/">LinkedIn</a>
            <a href="https://github.com/sachincdeshpande">GitHub</a>
            <a href="https://github.com/sachincdeshpande">Resume</a>
            
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}