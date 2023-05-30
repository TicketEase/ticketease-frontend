import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AboutUs from '../AboutUs/AboutUs';
// import './CustomNavBar.css';
function FAQNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <a class="navbar-brand" href="/" style={{ marginLeft: '70px' }}>Ticket Ease</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav"style={{ marginLeft: '70px' }}>
            <li class="nav-item active">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/faq">FAQ</a>
            </li>
            {/* New button to scroll to AboutUs component */}
            {/* <li class="nav-item">
              <a class="nav-link" href="about-us">About Us</a>
            </li> */}
          </ul>
          <NavDropdown title="Login As " id="navbarScrollingDropdown-3" style={{ marginLeft: '70%', color: "white" }}>
            <NavDropdown.Item href="/customer">Customer</NavDropdown.Item>
            <NavDropdown.Item href="/AgentLogIn">Agent</NavDropdown.Item>
            <NavDropdown.Item href="/EmpoloyeeLogIn">Employee</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar>
    </>
  );
}
export default FAQNav;