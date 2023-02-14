// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import {Navbar, Nav, Container} from "react-bootstrap";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap'
// import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
        <LinkContainer exact to="/">
          <Navbar.Brand>Sound Savant</Navbar.Brand>
          </LinkContainer>
          <Nav>
          <LinkContainer to ="/songs">
            <Nav.Link>All Songs</Nav.Link>
            </LinkContainer>
          <LinkContainer to= "/songoftheday" >
            <Nav.Link>Add a Song</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          </Nav>
          </Container>
      </Navbar>
    </>
  );
}


export default NavigationBar;
