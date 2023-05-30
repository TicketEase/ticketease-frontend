import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
// import sortByStatus from "./sortByStatus";
// import sortbyPriority from "./sortbyPriority";


function NavbarEmployeeHome(props) {
  const [statusData, setstatusData] = useState("");
  const [priorityData, setpriorityData] = useState("");
  const [depData, setdepData] = useState("");


  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/">Ticket Ease</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/EmployeeHome"> Home</Nav.Link>
              <Nav.Link href="/TackenTicketHome">Taken Ticket</Nav.Link>

             
           </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

   

    </>
  )
}

export default NavbarEmployeeHome;
