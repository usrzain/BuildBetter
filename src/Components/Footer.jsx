import React, { Component } from 'react';
import { Container, Button, Row, Col, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Footer.css';
import { BsFacebook, BsTwitter , BsInstagram, BsLinkedin } from "react-icons/bs";



function Footer(){
    return(
        <Container fluid>

        <Container fluid style={{backgroundColor:'Gray'}}>
        <Container className='Footer' >
            <Row>
                <Col>
                    <h1> Let's Design Together </h1>
                    <p>
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam modi voluptas quia hic quam asperiores maxime culpa dolor pariatur, accusantium assumenda quis exercitationem necessitatibus animi vel doloribus quisquam consectetur perspiciatis?
                    </p>
                </Col>
                <Col>
                    <h2> LET US HELP YOU </h2>
                    <p>
                   There are many variat ions of passages of L orem Ipsum available , but the majority h ave suffered altera tion in some form, by
                    </p>
                </Col>
                <Col>
                    <h2> INFORMATION </h2>
                    <p>

                      <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Sell on shopee</li>
                        <li>Press & News</li>
                        <li>Competitions</li>
                        <li>Terms & Conditions</li>
                      </ul>
                            
                            
                            
                            
                            
                            
                    </p>
                </Col>
                <Col>
                    <h2> OUR DESIGN </h2>
                    <p>
                         There are many variat ions of passages of L orem Ipsum available , but the majority h ave suffered altera tion in some form, by
                    </p>
                </Col>
            </Row>




            <Row className='Email'>
            <Col></Col>
              <Col className='form my-4'>
                <Form className=' d-flex '>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                           
                           <Form.Control type="email" placeholder="Enter Your E mail" style={{ width:'400px'}}/>
                           <Button> Subscribe </Button>
                          
                       </Form.Group>
                </Form>
                </Col>
            </Row>





            

        </Container>
        </Container>

             <Row className='text-center my-4'>
                <Col>
                  <BsFacebook  size={35} className='ms-2 text-black' style={{ cursor:'pointer'}}/>
                  <BsTwitter   size={35} className='ms-2 text-black' style={{ cursor:'pointer'}}/>
                  <BsInstagram   size={35} className='ms-2 text-black' style={{ cursor:'pointer'}}/>
                  <BsLinkedin   size={35} className='ms-2 text-black' style={{ cursor:'pointer'}}/>

                </Col>

             </Row>

             <div className='text-center'>
                  2020 All Rights Reserved. Design by Free html Templates
             </div>

        </Container>
    );
}

export default Footer;