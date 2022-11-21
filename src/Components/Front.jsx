import {React} from 'react';

import {Container} from 'react-bootstrap';

import Nvbar from './Nbar';

import './Front.css';

import Slide from './Slide'

import Services from './Services'

function Front(){
    return(
        <Container className='Frontmain px-4' fluid>
            
            <Slide />
            
        </Container>
    );

}

export default Front;