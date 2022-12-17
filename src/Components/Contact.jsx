import React, { Component, useRef, useState } from 'react';
import { Container, Button, Row, Col, Alert} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Form from 'react-bootstrap/Form';


function Contact(){

    const [pending, setPending] = useState(false) ;

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phonenumber, setNumber] = useState('');



   function chname(event){
      setName(event.value)
   }

   function chemail(event){
    setEmail(event.value)
}

function chnumber(event){
    setNumber(event.value)
}

//    function onChange(event){
//     if (event.name === "name"){
//         setName(event.value);
//     }

//     if (event.name === "email"){
//         setEmail(event.value);
//     }

//     if (event.name === "phonenumber"){
//         setNumber(event.value);
//     }

//       let name1 = 
//    }


    const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            if (name === "" ){
                
                setPending(false);
              }

            if (email === ""){
                setPending(false);
            }

            if (phonenumber === ""){
                setPending(false);
            }
              
              else {
                setPending(true);
                

                emailjs.sendForm('service_hsh14zp', 'template_gb45den', form.current, 'w2KFylY0fR9NIYa3r')
                .then((result) => {
                    console.log(result.text);
                    setPending(false);
                    form.current.reset();                //    I am reseting the form back to normal 
                    alert('E mail Sent !')
                }, (error) => {
                    console.log(error.text);
                    setPending(false);
                    form.current.reset();
                });
              }
            

            }

            // --------------------------

            
    return(
        <Container fluid className=' contact' >
            <Row className=''>
               <Col className='d-flex justify-content-center align-items-center col-form-1'>
                    <Form ref={form} onSubmit={ sendEmail } >
                      <h1> Contact </h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           
                            <Form.Control type="text" placeholder="Name" name='name' value={name}  onChange={(event) => chname(event)}/>
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           
                            <Form.Control type="email" placeholder="E mail" name='email' value={email} onChange={(event) => chemail(event)}/>
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          
                            <Form.Control type="number" placeholder="Phone Number" name='phonenumber' value={phonenumber} onChange={(event) => chnumber(event)}/>
                            
                        </Form.Group>
                        

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            
                           
                            <textarea cols='65' style={{height:'300px'}} placeholder="Message" name='message'>

                            </textarea>
                        </Form.Group>


                        <Button variant="dim" type="submit" disabled={ pending ? true : false }>
                           { pending ? "Sending ........" : "Send"}
                        </Button>
                </Form>
                </Col>

                <Col className='d-flex justify-content-center align-items-center col-form-2'>
                    <img  src='images/img-9.png'/>
                </Col>

        </Row>

        </Container>
    );
}

export default Contact;