// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from "react-router-dom";

function NavigationBar() {

  // useNavigate hook replaces useHistory hook in react router v6
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={(e) => {navigate("/")}}>Sound Savant</Navbar.Brand>
          <Nav>
            <Nav.Link onClick={(e) => {navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={(e) => {navigate("/songs")}}>All Songs</Nav.Link>
            <Nav.Link onClick={(e) => {navigate("/songoftheday")}}>Song of the Day</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default NavigationBar;
