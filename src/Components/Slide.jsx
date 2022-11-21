import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { BsFillArrowLeftCircleFill,   BsFillArrowRightCircleFill } from "react-icons/bs";
import './Slide.css'

function Slide() {
  

  return (
    <Container fluid className='slider'>
                <Row className='change'>
                    <Row style={{display:'flex', justifyContent:'center', fontSize:'100px',
                          fontFamily:'sans'}}>
                    FURNITURE

                    </Row>
                    
                    <Row style={{display:'flex', justifyContent:'center', marginTop:'-10px'}}>
                            There are many variations of divassages of Lorem Idivsum available, 
                                 
                    </Row>
                    <Row style={{display:'flex', justifyContent:'center'}}>
                           
                                 but the majority have suffered alteration in some fo
                    </Row>


                </Row>
          

                {/* <Row style={{marginTop:'9rem'}}>
                      <span className='btns'>  
                      <BsFillArrowLeftCircleFill size='50' style={{color:'lightgreen', cursor:'pointer'}} className='arrow'/>  
                      <BsFillArrowRightCircleFill size='50' style={{color:'lightgreen', cursor:'pointer'}} className='arrow'/>  
                       </span>
                    
                    
                  
                    
                    

                </Row> */}

                <Row className='my-4 btnrow' >
                    <Col className='con'>
                      {/* <Button className='border-0 btn '>  */}
                           <a href='/Contact' style={{textDecoration:'none'}} className='btn'>
                              CONTACT   US
                           </a> 
                      {/* </Button> */}
                     </Col>
                </Row>

               
                

                
             

    </Container>
  );
}


export default Slide;