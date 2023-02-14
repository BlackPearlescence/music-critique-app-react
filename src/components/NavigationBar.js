// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import {Navbar, Nav, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import {LinkContainer} from 'react-router-bootstrap'

function NavigationBar({isDarkMode, onToggleDarkMode}) {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
        <LinkContainer exact to="/">
          <Navbar.Brand>Sound Savant</Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto nav-text">
          <LinkContainer to ="/songs">
            <Nav.Link>All Songs</Nav.Link>
            </LinkContainer>
          <LinkContainer to= "/songoftheday" >
            <Nav.Link>Add a Song</Nav.Link>
          </LinkContainer>
          <Button
            className="text-right"
            variant="primary"
            size="sm"
            onClick={onToggleDarkMode}>
            {buttonTextContent}
          </Button>{' '}
          </Nav>
          </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
