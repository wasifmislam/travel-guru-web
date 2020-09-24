import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import './Header.css';

const Header = () => {
    return (
       <Navbar bg="warning" variant="dark">
           <Navbar.Brand className='header' href="#home">
           <img  src={logo} alt=""/>
           </Navbar.Brand>
           
           
           
            <Nav  className="mr-auto">
              <Nav.Link  href="/home">Home</Nav.Link>
              <Nav.Link href="/destination">Destination</Nav.Link>
              <Nav.Link href="/booking">Booking</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
         </Form>
      
  </Navbar>
    );
};

export default Header;