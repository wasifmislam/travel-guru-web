import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Rooms from '../../fakeData/Rooms';
import img1 from "../../images/Rectangle 26.png";
import img2 from "../../images/Rectangle 27.png";
import img3 from "../../images/Rectangle 28.png";


const Destination = () => {
    
   const {roomKey } = useParams();
   const hotel = Rooms.find(rm => rm.hotelType.toStrin === roomKey );

    //console.log(hotel)
    return (
        <Row>
            <Col>
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
            <Card.Title>Palm Bliss Hotel</Card.Title>
            <Card.Text>
            {hotel.wifi}
            <br/>
            {hotel.flexibility}
             <br/>
             <br/>

             cost per night: ${hotel.rate}

            </Card.Text>
            
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
            <Card.Title>Hotel Hilton</Card.Title>
            <Card.Text>
            {hotel.wifi}
            <br/>
            {hotel.flexibility}
             <br/>
             <br/>

             cost per night: ${hotel.rate}

            </Card.Text>
            
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
            <Card.Title>Grand Palace Inn</Card.Title>
            <Card.Text>
            {hotel.wifi}
            <br/>
            {hotel.flexibility}
             <br/>
             <br/>

             cost per night: ${hotel.rate}

            </Card.Text>
            
        </Card.Body>
        </Card>
    </div>
    </Col>
    <Col>2 of 2</Col>
    </Row>    
        
    );
};

export default Destination;
