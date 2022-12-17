import {React} from 'react';

               
import {Col, Container, Row } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import './Nbar.css';
import './NbarMedia.css';

import { Button, Offcanvas } from 'react-bootstrap';  
import {useState} from 'react' ; 
function Nvbar(){

    const [show, setShow] = useState(false);  
  const closeSidebar = () => setShow(false);  
  const showSidebar = () => setShow(true);  


    return(

        
        // <Container fluid className='py-3 Nmain'>

        //    LOGO 
        //     <span className=''>
        //          <a href='/Home'>
        //             <img  src='images/logo.png' />
        //          </a>
               
        //     </span>

        //   NAV LIST 
        //     <span className='list'>
        //                 <ul>
        //                     <li> <a href='/Home'> HOME </a></li>
        //                     <li> <a href='/Services'> SERVICES </a></li>
        //                     <li> <a href='/About'> ABOUT</a></li>
        //                     <li> <a href='/Shop'> SHOP </a></li>
        //                     <li> <a href='/Contact'> CONTACT</a></li>
        //                 </ul>
        //     </span>

        //    SEARCH BAR AND CONTACT NO 
        //     <span style={{margin:'1.6rem'}} className='search'>
        //         <a href='#' style={{color:'orange', fontFamily:'sans-serif', fontWeight:'500', textDecoration:'none'}}> Call Us : +01 1234567890 </a>
        //         <a>
        //             <BsSearch />
        //         </a>
        //         <a> LOGIN </a>
                
        //     </span>

        
            
           
        // </Container>





        //    New beginning 

        <Container className='cont pt-3 px-3 ' fluid>


               <Row className='row1'>


                  <Col className='col1 col-lg-3 col-sm-4 col-md-4 '>
                    <img  src='images/logo.png' className='' style={{cursor:'pointer'}} />
                  </Col>

                  <Col className='col2 col-lg-5 col-sm-1 col-md-5 '>

                     <div className='listParent '> 
                        <ul className='list'>
                            <li className="listItem" > <a href='/Home'> HOME </a>  </li>
                            <li className="listItem" > <a href='/Services'> SERVICES </a>  </li>
                            <li className="listItem" > <a href='/About'> ABOUT</a>  </li>
                            <li className="listItem" > <a href='/Shop'> SHOP </a>  </li>
                            <li className="listItem" > <a href='/Contact'> CONTACT </a>  </li>

                        </ul>
                     </div>
                  </Col>


                  <Col className='col3 col-lg-4  col-sm-10 col-md-4'>

                    <div className='listParent '>
                        <ul className='list2'> 
                            <li className="listItem2 text-warning"> Call Us : +01 1234567890 </li>
                            <li className="listItem2"> <a href='#'> < BsSearch /> </a></li>
                            <li className="listItem2"> <a href='/Contact'> LOGIN  </a> </li>
                        </ul>
                    </div>
                  </Col>


                  <Col className='col4 col-sm-8 col-md-8'>
                        <span>

                            <AiOutlineMenuUnfold  variant="primary" onClick={showSidebar} size={40} style={{ padding:'5px', border:'none'}}  className=' side'/>
                        <Offcanvas placement='end' show={show} onHide={closeSidebar} className='sideContainer'>  
                            <Offcanvas.Header closeButton>  
                             
                            </Offcanvas.Header>  
                            <Offcanvas.Body>  
                                 
                                 <ul className='sideList'>
                                        <li className="listItemSide" > <a href='/Home'> HOME </a>  </li>
                                        <li className="listItemSide" > <a href='/Services'> SERVICES </a>  </li>
                                        <li className="listItemSide" > <a href='/About'> ABOUT</a>  </li>
                                        <li className="listItemSide" > <a href='/Shop'> SHOP </a>  </li>
                                        <li className="listItemSide" > <a href='/Contact'> CONTACT </a>  </li>
                                 </ul>
                            </Offcanvas.Body>  
                        </Offcanvas>

                        </span>  
                  </Col>
               </Row>
        </Container>

    );

}

export default Nvbar;