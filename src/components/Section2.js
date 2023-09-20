import React from "react";
import { Button, Container, Row, Col,} from "react-bootstrap";
// import 'bulma/css/bulma.css'
import { Link } from "react-router-dom";

function Section2() {
    return(
        
        <Container>
            <Row>
            {/* <center><li style={{ listStyle: 'none' }}>
                    <Link to="/gallery"><Button variant="outline-primary">Used AC, Refrigerator and Washing machines are available. Check it here!!</Button></Link>
                </li> </center> */}
                 <center><li style={{ listStyle: 'none' }}>
                    <Link to="/gallery"><Button variant="outline-dark">Used AC, Refrigerator and Washing machines are available. Check it here!!</Button></Link>
                </li> </center>
            </Row>            
        </Container>

    );
}
export default Section2;