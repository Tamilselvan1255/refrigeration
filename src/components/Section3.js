import React from "react";
import { Container, Row, Card, CardGroup, Col } from "react-bootstrap";
import Iframe from "react-iframe";
import { MdStore } from "react-icons/md";
import { GrInstagram } from 'react-icons/gr';
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs';

function Section3() {
    return (
        <div>
         {/* Our Testimonials */}
        <Container>
            <Row>
                <h3 style={{ color: '#135F57', fontFamily: 'Book Antiqua' }}><b>Our Testimonials</b></h3><br></br><br></br><br></br>
                <Col sm={4} style={{ paddingTop: '10px' }} className="img_section">
                    <center>
                        <figure><img style={{ height: '250px', width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJHHuCJxXqu7d6xz4z8gSsZ6UqnjUlQIdFUc5p6UXMbohFKB8A2ujAkMNe0bbzBP71cg&usqp=CAU" /></figure>
                    </center>
                </Col>
                <Col sm={4} style={{ paddingTop: '10px' }} className="img_section">
                    <center>
                        <figure><img style={{ height: '250px', width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwdsUIE7-CMNDW7L3GIlV20n8C-ofmfQS_g&usqp=CAU" /></figure>
                    </center>
                </Col>
                <Col sm={4} style={{ paddingTop: '10px' }} className="img_section">
                    <center>
                        <figure><img style={{ height: '250px', width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJNi5nHQV0QQ8CCGNhe4rsSjn5Y684M5dhQ&usqp=CAU" /></figure>
                    </center>
                </Col>
            </Row>
        </Container>
        <br></br>
         {/* We're located at, */}
        <Container>
            <Row >
            
                <Col lg={6} ><h3 style={{ color: '#135F57', fontFamily: 'Book Antiqua' }}><b>We're located in,</b></h3>
               <center style={{paddingTop:'65px'}}> <div><img style={{width:'25px'}} src="https://cdn-icons-png.flaticon.com/512/2981/2981011.png" /><p>No: 126A,<br></br>Therkku Bazaar, Near to Palay Market,<br></br>Palayamkottai, Tirunelveli - 627 012. </p></div></center>  </Col>
                <Col lg={6} >
                <center style={{paddingTop:'60px'}}><Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.4784648868144!2d77.71143221478454!3d8.740970393720996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411971c3a0637%3A0xb3938d0b951866a6!2sRam%20Muthuram%20Cinemas%204K%203D!5e0!3m2!1sen!2sin!4v1673499060215!5m2!1sen!2sin" width="350" height="200" style="border:0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                </center>
                </Col>            
            </Row>
        </Container>
        <br></br>
        
        {/* follow us on, */}
        <Container>
            <Row>
            <div>
            <h3 style={{ color: '#135F57', fontFamily: 'Book Antiqua' }}><b>Follow us on,</b></h3>
                     <center className="nope" style={{paddingTop:'35px'}}> <span style={{fontSize:'30px'}}><a href="https://www.instagram.com/" ><GrInstagram /></a></span>
                    <span style={{paddingLeft:'70px', fontSize:'30px'}}><a href="https://www.facebook.com/" ><BsFacebook /></a></span>
                    <span style={{paddingLeft:'70px', fontSize:'30px'}}><a href="https://twitter.com/" ><BsTwitter /></a></span>
                    <span style={{paddingLeft:'70px', fontSize:'30px'}}><a href="https://www.whatsapp.com/" ><BsWhatsapp /></a></span></center>    
                </div>
            </Row>
        </Container>
        </div>
    )
}
export default Section3;