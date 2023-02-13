// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
  return (
    <>

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Sound Savant</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">All Songs</Nav.Link>
            <Nav.Link href="#pricing">Add a Song</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default NavigationBar;
