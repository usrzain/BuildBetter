import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './About.css'

function About(){
    return(
        <Container className='About' fluid>
             <Container>
                        <Row className='AbRow'>
                            <Col>
                            
                            <h1 style={{marginBottom:'5rem', fontFamily:'serif', color:'white'}}>
                                ABOUT US

                            </h1>


                            <p style={{marginBottom:'5rem', fontFamily:'serif', color:'white'}}>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have able
                            </p>

                            <Button className='bg bg-black border-0'>READ MORE</Button>

                            </Col>
                                 
                            <Col className=' image'>
                                <img src='images/img-1.png'  />
                            </Col>
                        </Row>
            </Container>                       
        </Container>
        
    );
}

export default About;