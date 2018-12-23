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
                            
                           <h3>Sachin Deshpande</h3>
                           <p>Hello! My name is Sachin Deshpande - I'm a sophomore at UC Santa Cruz majoring in Computer Science.</p>
                        </Col>
                    </Row>
                    
                    
                </Jumbotron>
            </Grid>

        )
    }
}