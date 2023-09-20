import React from "react";
import { Container, Row, Card, CardGroup, Col } from "react-bootstrap";
import Iframe from "react-iframe";

function Section1() {
    return (
        <div>
        <Container>
            <Row>
            <br></br><br></br>
               <h3 style={{color:'#135F57', fontFamily:'Book Antiqua'}}><b>About Us</b></h3>
                <p style={{color: '#135F57 '}}>
                    In the year of 2000 we've started our concern <span style={{color:'black',fontFamily:'Book Antiqua'}}><b>PADMA REFRIGERATION.</b></span> Last year we've celebrated our "SILVER JUBILEE CEREMONY". More than 20+ years we're in this industry field.
                </p>    <br></br><br></br><br></br><br></br>
                <h3 style={{color:'#135F57', fontFamily:'Book Antiqua'}}><b>Our Services</b></h3>
                {/* <p style={{color:'#135F57'}}>
                    We can service all types of products addressed below,
                </p> */}
                <br></br><br></br>
                 {/* Our Services */}
                    <Row>
                    <Col lg={3}  className="shadow" style={{padding:'10px'}}>
                        <Card>
                        <Card.Img variant="top" src="https://imageio.forbes.com/specials-images/imageserve/6375149a9b1433365af59b8f/0x0.jpg?format=jpg&width=1200" />
                        <Card.Body >
                            <Card.Title >
                                Refrigerator
                            </Card.Title>
                            <Card.Text style={{color:'#135F57'}}>
                            We can service all types of <b>Refrigerators</b> made up of various brands.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                        </Col>
                        <Col lg={3}  className="shadow" style={{padding:'10px'}}>
                        <Card>
                        <Card.Img variant="top" src="https://www.realsimple.com/thmb/DYwpnSgQ94XjaHfEmw-EmHLLHjg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/clean-airconditioner-spring-1-78fb0f9db0f44fcb9a59f68ee78cfcf0.jpg" />
                        <Card.Body >
                        {/* #7DCADB */}
                            <Card.Title>
                               Air Conditioner
                            </Card.Title>
                            <Card.Text style={{color:'#135F57'}}>
                            We can service all types of <b>Airconditioners</b> made up of various brands.
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                        </Col>
                        
                        <Col lg={3}  className="shadow " style={{padding:'10px'}}>
                        <Card>
                        <Card.Img  variant="top" src={require("../assets/washing machine1.jpg")} />
                        <Card.Body >
                            {/* #50B9A7 */}
                            <Card.Title>
                                Washing Machine
                            </Card.Title>
                            <Card.Text style={{color:'#135F57'}}>
                            We can service all types of <b>Washing machines</b> made up of various brands.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                        </Col>
                        <Col lg={3}  className="shadow bg-white rounded" style={{padding:'10px'}}>
                        <Card>
                        <Card.Img variant="top" src={require("../assets/air cooler.jpeg")} />
                        <Card.Body>
                            {/* #50B9A7 */}
                            <Card.Title>
                                Air Coolers
                            </Card.Title>
                            <Card.Text style={{color:'#135F57'}}>
                            We can service all types of <b>Air coolers</b> made up of various brands including local stuffs.    
                            </Card.Text>
                        </Card.Body>
                    </Card>
                        </Col>
                    </Row>                    
            </Row>
        </Container>
            
        </div>
    )
};

export default Section1;