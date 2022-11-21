
import React, { Component } from 'react';

import {Container, Row, Button, Col} from 'react-bootstrap';
import { Carousel, Card, Stack } from "react-bootstrap";


 

import './Ourpro.css'

function Pro(){
    const reviews = [
        { _id: 1, text: "abc" },
        { _id: 2, text: "def" },
        { _id: 3, text: "ghi" },
        { _id: 4, text: "jkl" },
        { _id: 5, text: "mno" },
        { _id: 6, text: "pqr" },
        { _id: 7, text: "stu" },
        { _id: 8, text: "vwx" },
        { _id: 9, text: "yza" }
      ];

    return( 
        <Container className='ourPro'>

                   <Row className='text-center'>
                       <h2> OUR PROJECTS </h2>
                       <p> Lorem ipsum dolor sit amet consectetur </p>
                   </Row>

                   <Row className=''>
                   <Carousel style={{ height: 500 }}>
          {reviews.map((review, index) => (
            <Carousel.Item style={{ height: 500 }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={6}
              >
                <Card style={{ width: "24rem", border:'none' }} className='card'>
                <Card.Body>
                    
                    <img src='images/img-4.png' />
                    <Card.Title className='title'>Modern Home Design </Card.Title>
                 
              </Card.Body>
                </Card>

                <Card style={{ width: "24rem" , border:'none' }} className='card'>
                <Card.Body>
                    
                    <img src='images/img-5.png'/>
                    <Card.Title className='title'>Modern Home Design </Card.Title>
                 
              </Card.Body>
                </Card>

                <Card style={{ width: "24rem" , border:'none' }} className='card'>
                  <Card.Body>
                    
                        <img src='images/img-6.png'/>
                        <Card.Title className='title'>Modern Home Design </Card.Title>
                     
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
 
                   </Row>
            
        </Container>
    );
}

export default Pro;