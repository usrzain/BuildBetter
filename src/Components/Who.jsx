
import React, { Component } from 'react';
import {Container, Row, Button} from 'react-bootstrap'

import './Who.css'

function Who(){
    return( 
        <Container className='Who ' fluid>

          <Row className='mx-5'>

                    <h1  className='  text-center my-2 text-light fa-bold'>
                        WHO WE ARE ?
                    </h1>

                    <h2 className='  text-center my-2 text-light fa-bold'>
                       DESIGNERS & INNOVATORS
                    </h2>

                    <p className='  text-center my-2 text-light'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    </p>
                    <div className='text-center my-3'>
                         <Button className='btn border-0' variant='black'> Get a Quote </Button>
                    </div>
                    
          </Row>
            
        </Container>
    );
}

export default Who;