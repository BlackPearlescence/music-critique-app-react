// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import {Navbar, Nav, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";


import { Link, useNavigate } from "react-router-dom";

function NavigationBar({isDarkMode, onToggleDarkMode}) {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  // useNavigate hook replaces useHistory hook in react router v6
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={(e) => {navigate("/")}}>Sound Savant</Navbar.Brand>
          <Nav className="ml-auto nav-text">
            <Nav.Link onClick={(e) => {navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={(e) => {navigate("/songs")}}>All Songs</Nav.Link>
            <Nav.Link onClick={(e) => {navigate("/songoftheday")}}>Song of the Day</Nav.Link>
            <Button active
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
