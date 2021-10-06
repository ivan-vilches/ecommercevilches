/////

import React from 'react'
import CartWidget from './CartWidget'
import { Navbar, Nav, Container } from 'react-bootstrap';



function Navegacion(){
    return (
      <>
          <Navbar collapseOnSelect expand='sm' bg='light' variant="light">
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav>
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/aceites">Aceites</Nav.Link>
                    <Nav.Link href="/cuarzos">Cuarzos</Nav.Link>
                    <Nav.Link href="/amuletos">Amuletos</Nav.Link>
                    <Nav.Link href="/inciensos">Inciensos</Nav.Link>
                    <Nav.Link href="/cart"><CartWidget/></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>

          </Navbar>
      
      </>

      );
}

export default Navegacion;

//esoss navs sonde bootstrap