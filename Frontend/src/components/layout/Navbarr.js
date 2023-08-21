import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icono from '../img/icono.png'
import React from 'react';
import '../../styles/Stylesnav.css';
import { Link } from 'react-router-dom';


const Navbarr = (props) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
        <Container className='NavB'>
          <Navbar.Brand  href="#home">
            <img
              alt=""
              src= {icono}
              width="35"
              height="35"
              className="d-inline-block align-top "
            />{' '}Internet-fibra</Navbar.Brand>
            <Nav className="me-auto col-md-5 mx-auto " >
              <Nav.Link ><Link className='NavB' to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link className='NavB' to="/Cobertura" >Cobertura</Link></Nav.Link>
              <Nav.Link ><Link className='NavB' to="/Novedades" >Noticias</Link></Nav.Link>
              <Nav.Link ><Link className='NavB' to="/Contacto">Contacto</Link></Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    )
}
export default Navbarr;