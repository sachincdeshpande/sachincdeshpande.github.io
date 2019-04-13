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
              // https://linkedin.com/in/sachincdeshpande/
              <Button component={Link} to="http://linkedin.com/in/sachincdeshpande/">
                Link
              </Button>
              <Button variant="contained" color="background">
                LinkedIn
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