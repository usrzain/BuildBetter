import {React} from 'react';
import { Container, Row, Col, Card, CardGroup, CardImg, Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import './Services.css'


function Services(){
    return(
         <Container  className=' px-4 services' >


            <Row className=' Row'> 
                   <Col style={{fontSize:'02rem'}}> OUR SERVICES </Col>
            </Row>


            <Row className='Row'> 
                     <Col>
                            There are many variations of passages of Lorem Ipsum
                     </Col>
            </Row>

             <Row className='Row'>
             <Col className='col-lg-3 col-md-6 col-sm-12 Col '>
                     <Card style={{ width: '15rem' , border:'none' }}>
                              <div>  
                                    <img src='images/icon-2.png' />
                              </div> 
                           <Card.Body>
                           <Card.Title>FURNITURES</Card.Title>
                           <Card.Text>
                                     There are many variations of passages of Lorem Ipsum available, but the
                           </Card.Text>
                           <Button className=' border-0 bg-warning text-bg-secondary'>READ MORE</Button>
                           </Card.Body>
                     </Card>
               </Col>
               
               <Col className='col-lg-3 Col col-md-6'>
                     <Card style={{ width: '15rem', border:'none' }}>
                              <div>  
                                    <img src='images/icon-3.png' />
                              </div> 
                              <Card.Body>
                              <Card.Title>OFFICE</Card.Title>
                              <Card.Text>
                                     There are many variations of passages of Lorem Ipsum available, but the
                              </Card.Text>
                              <Button className=' border-0 bg-warning text-bg-secondary'>READ MORE</Button>
                              </Card.Body>
                     </Card>
               </Col>


               <Col className='col-lg-3 Col col-md-6'>
                        <Card style={{ width: '15rem' , border:'none' }}>
                                    <div>  
                                          <img src='images/icon-4.png' />
                                    </div> 
                                 <Card.Body>
                                 <Card.Title>HOME </Card.Title>
                                 <Card.Text>
                                        There are many variations of passages of Lorem Ipsum available, but the
                                 </Card.Text>
                                 <Button className=' border-0 bg-warning text-bg-secondary'>READ MORE</Button>
                                 </Card.Body>
                        </Card>
               </Col>


               <Col className='col-lg-3 Col col-md-6'>
                      <Card style={{ width: '15rem' , border:'none' }}>
                              <div>  
                                    <img src='images/icon-1.png' />
                              </div> 
                              <Card.Body>
                              <Card.Title>BED ROOM</Card.Title>
                              <Card.Text>
                                     There are many variations of passages of Lorem Ipsum available, but the
                              </Card.Text>
                              <Button className='border-0 bg-warning text-bg-secondary'>READ MORE</Button>
                              </Card.Body>
                     </Card>
               </Col>


             </Row>
         </Container>       
    );
}

export default Services;