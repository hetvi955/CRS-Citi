import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container";

export default function Header() {
  return (
    <>
  <Navbar bg="info" variant="light">
    <Container>
    <Navbar.Brand href="#home">CRS</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About Us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}
