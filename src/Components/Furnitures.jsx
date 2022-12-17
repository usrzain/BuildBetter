import React, { Component } from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import { ImSearch } from "react-icons/im";

import './Furniture.css'

function Furnitures (){
    return(
        <Container className='Furniture'>
            <Row className='text-center my-5 Row1'>
                <h1> OUR FURNITURES </h1>
                <br></br>
                <p className='text-center'> There are many variations of passages of Lorem Ipsum </p>

            </Row>

            <Row>

                <Col classNAme='col-sm-12 columns'>
                <Card className='Cardmain'>
                        <Card.Img variant="top" src='images/img-2.png' className='image2'/>

                        <Card.Body>

                            <Card.Title className='my-3' style={{color:'rgba(255, 191, 0, 0.972)'}}>
                                 TEMPOR INCIDIDUNT UT LABORE ET DOLORE
                            </Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            </Card.Text>
                           

                        </Card.Body>
                        <ImSearch size={200} className='rounded rounded-5 p-5 bg bg-warning icon'/>

                        </Card>

                </Col>

                <Col classNAme='col-sm-12 columns'>
                <Card  className='Cardmain'>
                        <Card.Img variant="top" src='images/img-3.png' className='image2'/>

                        <Card.Body>

                            <Card.Title className='my-3' style={{color:'rgba(255, 191, 0, 0.972)'}}>
                                 TEMPOR INCIDIDUNT UT LABORE ET DOLORE
                            </Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            </Card.Text>
                           

                        </Card.Body>
                        <ImSearch size={200} className='rounded rounded-5 p-5 bg bg-warning icon '/>

                        </Card>

                </Col>
            </Row>
        </Container>
    );
}

export default Furnitures ;