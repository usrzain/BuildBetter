import {React} from 'react';

import {Container, Row, Col, Button} from 'react-bootstrap';

import Nvbar from './Nbar';

import './Front.css';

import Slide from './Slide'

import Services from './Services'

function Front(){
    return(
        <Container className='Frontmain px-4' fluid>
            
            {/* <Row className='change'>
                    <Row style={{display:'flex', justifyContent:'center', fontSize:'7vw',
                          fontFamily:'sans'}}>
                    FURNITURE

                    </Row>
                    
                    <Row style={{display:'flex', justifyContent:'center', marginTop:'-10px'}}>
                            There are many variations of divassages of Lorem Idivsum available, 
                                 
                    </Row>
                    <Row style={{display:'flex', justifyContent:'center'}}>
                           
                                 but the majority have suffered alteration in some fo
                    </Row>


                </Row> */}
          

               <Row className='singleRow '>
              

                  <h1 > FURNITURE </h1>
                 
                  <br></br>
                  <p className='text-center'>  There are many variations of passages of Lv v Ipsum available
                  <br></br> but the majority have suffered alteration in some fo</p>


              
                  
               </Row>
            <br></br>
              
               <Row className='singleRow'>

                
                   <Button  className='bg  bg-warning border-0 '> <a href='/Contact' className='text-light fs-4 px-4'>  Contact us </a></Button>
               

                 
               </Row>
             

                
            
        </Container>
    );

}

export default Front;