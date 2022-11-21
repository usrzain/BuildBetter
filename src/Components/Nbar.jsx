import {React} from 'react';

import {Container} from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";

import './Nbar.css'

function Nvbar(){
    return(
        <Container fluid className='px-3 py-3 Nmain'>
            <span className='border border-1'>
                 <a href='/Home'>
                    <img  src='images/logo.png' width='240px' />
                 </a>
               
            </span>
            <span className='list ms-5'>
                        <ul>
                            <li> <a href='/Home'> HOME </a></li>
                            <li> <a href='/Services'> SERVICES </a></li>
                            <li> <a href='/About'> ABOUT</a></li>
                            <li> <a href='/Shop'> SHOP </a></li>
                            <li> <a href='/Contact'> CONTACT</a></li>
                        </ul>
            </span>

            <span style={{margin:'1.6rem'}} className='search'>
                <a href='#' style={{color:'orange', fontFamily:'sans-serif', fontWeight:'500', textDecoration:'none'}}> Call Us : +01 1234567890 </a>
                <a>
                    <BsSearch />
                </a>
                <a> LOGIN </a>
                
            </span>
               
            
           
        </Container>
    );

}

export default Nvbar;