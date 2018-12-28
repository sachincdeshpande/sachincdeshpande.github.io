import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Jumbotron, Grid, Row, Col, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <u1>
              <Button variant="contained">
                <li><a href="https://www.linkedin.com/in/sachincdeshpande/">LinkedIn</a></li>
              </Button>

              <li><a href="https://github.com/sachincdeshpande">GitHub</a></li>
              <li><a href="https://github.com/sachincdeshpande/sachincdeshpande.github.io/blob/master/Sachin%20Deshpande%20Resume.pdf">Resume</a></li>
            </u1>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}