
import React, { Component } from 'react';
import {Container, Row, Button} from 'react-bootstrap'

import './Who.css'

function Who(){
    return( 
        <Container className='Who ' fluid>

          <Row>

                    <h2  className='  text-center my-2'>
                        WHO WE ARE ?
                    </h2>

                    <h className='  text-center my-2 '>
                       DESIGNERS & INNOVATORS
                    </h>

                    <p className='  text-center my-2 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    </p>
                    <div className='text-center my-3'>
                         <Button className='btn border-0'> Get a Quote </Button>
                    </div>
                    
          </Row>
            
        </Container>
    );
}

export default Who;