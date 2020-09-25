import { Button } from '@material-ui/core';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import TravelPlace from '../../fakeData/TravelPlace';
import header from '../../images/header.png';





const PlaceDetail = () => {
    const{placeId} = useParams();
    const places   = TravelPlace.find(pl=> pl.id.toString() === placeId);
    const handleBooking = () => {

    }
   
    
    console.log(places)
    
    return (
        <Row style={{backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`}}>
          <Col>
          <Card style={{ width: '18rem' }}>
  
        <Card.Body >
            <Card.Title><h1>{places.title}</h1></Card.Title>
            <Card.Text style={{color: 'green'}}>
            {places.description}
            
            </Card.Text>
            
        </Card.Body>
        <Link to={`/booking`}>
            <Button style={{color:'black'}} variant="warning" onClick={handleBooking} >Booking</Button>
            
            </Link>
        </Card>
        
          </Col>
         <Col>
         


         
         </Col>
        </Row>
        
    );
};

export default PlaceDetail;