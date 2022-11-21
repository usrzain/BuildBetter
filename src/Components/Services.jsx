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
                     OUR SERVICESThere are many variations of passages of Lorem Ipsum
                     </Col>
            </Row>

             <Row className='Row'>
             <Col>
                     <Card style={{ width: '15rem' , border:'none' }}>
                              <div>  
                                    <img src='images/icon-2.png' />
                              </div> 
                           <Card.Body>
                           <Card.Title>Card Title</Card.Title>
                           <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                           </Card.Text>
                           <Button className=' border-0 btn1'>Go somewhere</Button>
                           </Card.Body>
                     </Card>
               </Col>
               
               <Col>
                     <Card style={{ width: '15rem', border:'none' }}>
                              <div>  
                                    <img src='images/icon-3.png' />
                              </div> 
                              <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                 Some quick example text to build on the card title and make up the
                                 bulk of the card's content.
                              </Card.Text>
                              <Button className=' border-0 btn1'>Go somewhere</Button>
                              </Card.Body>
                     </Card>
               </Col>


               <Col>
                        <Card style={{ width: '15rem' , border:'none' }}>
                                    <div>  
                                          <img src='images/icon-4.png' />
                                    </div> 
                                 <Card.Body>
                                 <Card.Title>Card Title</Card.Title>
                                 <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                 </Card.Text>
                                 <Button className=' border-0 btn1'>Go somewhere</Button>
                                 </Card.Body>
                        </Card>
               </Col>


               <Col>
                      <Card style={{ width: '15rem' , border:'none' }}>
                              <div>  
                                    <img src='images/icon-1.png' />
                              </div> 
                              <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                 Some quick example text to build on the card title and make up the
                                 bulk of the card's content.
                              </Card.Text>
                              <Button className=' border-0 btn1'>Go somewhere</Button>
                              </Card.Body>
                     </Card>
               </Col>


             </Row>
         </Container>       
    );
}

export default Services;