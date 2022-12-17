import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './About.css'

function About(){
    return(
        <Container className='About py-5' fluid>
             <Container >
                        <Row className='AbRow '>
                            <Col className='col-sm-6'>
                            
                            <h1 style={{marginBottom:'5rem', fontFamily:'serif', color:'white'}}>
                                ABOUT US

                            </h1>


                            <p style={{marginBottom:'5rem', fontFamily:'serif', color:'white',
                                         fontWeight:'none'}}>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have able
                            </p>

                            <Button className=' border-0 btn-read'><a> READ MORE </a></Button>

                            </Col>
                                 
                            <Col className='image col-sm-6'>
                                <img src='images/img-1.png'  />
                            </Col>
                        </Row>
            </Container>                       
        </Container>
        
    );
}

export default About;