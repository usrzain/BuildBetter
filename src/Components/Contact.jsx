import React, { Component } from 'react';
import { Container, Button, Row, Col} from 'react-bootstrap'
import './Contact.css';
import Form from 'react-bootstrap/Form';


function Contact(){
    return(
        <Container fluid className=' contact' >
            <Row className=''>
               <Col className='d-flex justify-content-center align-items-center'>
                    <Form>
                      <h1> Contact </h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           
                            <Form.Control type="text" placeholder="Name" />
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           
                            <Form.Control type="email" placeholder="E mail" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          
                            <Form.Control type="number" placeholder="Phone Number" />
                            
                        </Form.Group>
                        

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            
                           
                            <textarea cols='65' style={{height:'300px'}} placeholder="Message">

                            </textarea>
                        </Form.Group>


                        <Button variant="dim" type="submit">
                            Send
                        </Button>
                </Form>
                </Col>

                <Col className='d-flex justify-content-center align-items-center'>
                    <img  src='images/img-9.png'/>
                </Col>

        </Row>

        </Container>
    );
}

export default Contact;