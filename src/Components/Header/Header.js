import React, { useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/Logo.png';
import './Header.css';


const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
    return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <Navbar bg="warning" variant="dark">
           <Navbar.Brand className='header' href="/home">
           <img  src={logo} alt=""/>
           </Navbar.Brand>
           
           
           
            <Nav  className="mr-auto">
              <Nav.Link>
              <Link  to ="/home">Home</Link>
              {/* <Link to="/placeDetails">Destination</Link>  */}
              <Link to="/booking">Booking</Link>
              <Link to="/login">Login</Link>
              </Nav.Link>
             </Nav>
             
             <br/>
        <Form inline>
          <FormControl type="text" placeholder="Search your Destination" className="mr-sm-2" />
          <Button style={{color:'black'}} variant="outline-light">Search</Button>
         </Form>
      
  </Navbar>
  </UserContext.Provider>
    );
};

export default Header;