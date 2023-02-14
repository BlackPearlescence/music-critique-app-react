// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Sound Savant</Navbar.Brand>
          <Nav>
            <Nav.Link to="#home">Home</Nav.Link>
            <Nav.Link to="#features">All Songs</Nav.Link>
            <Nav.Link to="#pricing">Add a Song</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default NavigationBar;
