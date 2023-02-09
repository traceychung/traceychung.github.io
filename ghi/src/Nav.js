import TC_Resume from './images/TC_Resume.pdf'
import tc_logo from './images/tc_logo.png';

import { Navbar, Container, Nav } from "react-bootstrap";

function Navi() {
  return (
    <Navbar expand="md" className="nav">
    <Container>
      <Navbar.Brand
        href="#"
        className="nav-brand">
          <img src={tc_logo} width={75} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <a href="#top"><h1>TRACEY CHUNG</h1> </a>
        </Nav>
        <Nav.Link
            href="#about"
            className="navbar-link"
            >
            About
          </Nav.Link>
          <Nav.Link
            href="#skills"
            className="navbar-link"
          >
            Skills
          </Nav.Link>
          <Nav.Link
            href="#projects"
            className="navbar-link"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            href="#contact"
            className="navbar-link"
          >
            Contact
          </Nav.Link>
          <button>
            <a className="navbar-link" href={TC_Resume} download>Resume</a>
          </button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navi;
