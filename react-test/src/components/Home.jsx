import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';


export default class Home extends Component{
    render(){
        return (
            <Grid>
                <Jumbotron>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={4} className="person-wrapper">
                           <Image src="assets/prof-pic.jpg" circle className="profile-pic"/>
                           <h2> Sachin Deshpande </h2>
                        </Col>
                        <p>Hello! My name is Sachin Deshpande - I'm a aspiring sophomore at UC Santa Cruz, majoring in Computer Science.</p>
                        <p1>During my time at Santa Cruz, I've earned Dean's Honors continuously, and maintained a 4.0 GPA.</p1>
                        <br></br>
                        <p1>I am also a member on both UCSC's ACM Chapter, as well as the UCSC Hockey team.</p1>
                        <p>In order to see my LinkedIn, GitHub, and Resume, please use the links at the top of the page.</p>
                    </Row>
                </Jumbotron>
            </Grid>
        )
    }
}