import { Button } from '@material-ui/core';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import TravelPlace from '../../fakeData/TravelPlace';





const PlaceDetail = () => {
    const{placeId} = useParams();
    const places   = TravelPlace.find(pl=> pl.id.toString() === placeId);
   
    
    console.log(places)
    
    return (
        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
  
        <Card.Body>
            <Card.Title><h1>{places.title}</h1></Card.Title>
            <Card.Text>
            {places.description}
            
            </Card.Text>
            <Link to={`/booking`}>
            <Button variant="secondary">Booking</Button>
            </Link>
        </Card.Body>
        </Card>
          </Col>
         <Col>
         


         
         </Col>
        </Row>
        
    );
};

export default PlaceDetail;