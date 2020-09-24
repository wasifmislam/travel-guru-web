import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Place = (props) => {
    //console.log(props)
    const{title,imgUrl, id} = props.place;

    
    return (
        <Row>
    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imgUrl} />
  <Card.Body>
    <Card.Title>Card Title: {title}</Card.Title>
    <Card.Text>
      
    </Card.Text>
    <Button variant="warning"><Link to={`/placeDetails/${id}`}>Go to {title}</Link></Button>
  </Card.Body>
</Card></Col>
    
  </Row>
    );
};

export default Place;

// onClick={()=>props.handleLocation(props.place)}