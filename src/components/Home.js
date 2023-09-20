import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarBrand,
  Container,
  Row,
  Col,
  CardGroup
} from 'reactstrap';
import { Link } from "react-router-dom";
import "../App.css";
import { useMediaQuery } from "react-responsive";
import Section1 from "./Section1";
// import 'bulma/css/bulma.css'
import Section2 from "./Section2";
import { motion } from "framer-motion";
import Section3 from "./Section3";
import { Footer } from "rsuite";
import images from "./ReactImageGallery";
import ReactImageGallery from "./ReactImageGallery";

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
 
  return (
    <div>
      <div style={{
        display: 'block', width: '100%', maxWidth: '100%',
      }}>
        <Navbar style={{ backgroundColor: '#F2F3F4 ' }}>
          {/* <div className="nav-logo">
                                  <img
                                  src="https://i.pinimg.com/564x/26/b4/f5/26b4f5d56a4b0f8dafc6e6277114aa31.jpg"
                                  alt="Logo"
                                  className="logo"
                                  width="32"
                                  height="32"
                                  />
                          </div>   */}
          <Container>
            <center><p style={{ fontSize: '38px', fontFamily: "Stencil Std", color: '#626567 ' }}><span style={{ color: '#E74C3C' }}>P</span>ADMA <span style={{ color: '#E74C3C' }}>R</span>EFRIGERATION</p></center>
          </Container>

          <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
          <Collapse isOpen={isOpen} navbar >
            <Nav className="nav" navbar>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </Nav>
          </Collapse>
        </Navbar>
      </div ><br></br>
      {/* <Card className="shadow  mb-3">
          <center><Card.Img style={{width:'100%'}} className="head" src={require("../assets/header.jpg")} alt="Card image" /></center>
          <Card.ImgOverlay>
            
              <Desktop> <h1 style={{ fontSize: '22px', fontFamily: 'Comic Sans MS', paddingTop: '250px', color: 'white' }}>We're the only one Technician in Tuticorin, who can service all types of refrigerations..</h1></Desktop>
              <Tablet> <h1 style={{ fontSize: '22px', fontFamily: 'Comic Sans MS', color: 'white', padding: '100px' }}>We're the only one Technician in Tuticorin, who can service all types of refrigerations..</h1></Tablet>
              <Mobile> <h1 style={{ fontSize: '22px', fontFamily: 'Comic Sans MS', color: 'white', padding: '25px' }}>We're the only one Technician in Tuticorin, who can service all types of refrigerations..</h1></Mobile>
            
          </Card.ImgOverlay>
        </Card><br></br> */}
      <Section1 /><br></br><br></br>
      <Section3 /><br></br><br></br>
      <Section2 />
      <Footer style={{ marginTop: '40px', }}>
      <p style={{ fontSize: '15px', textAlign: 'center' }}> © 1996-2022 P012. All Rights Reserved.</p>
      </Footer>
    
    </div>
  );
}

export default Home;


