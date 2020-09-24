import React, { useEffect, useState } from 'react';
import TravelPlace from '../../fakeData/TravelPlace';
import Place from '../Place/Place';


const Home = () =>{
     
    const [travelPlace, setTravelPlace] = useState(TravelPlace);
    // const [destination, setDestination] = useState([]);
    //const handleLocation = (place) =>{
        //console.log('clicked', place);
    
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }

  
return (
  <div style={style}>
     {
       travelPlace.map(pl => <Place 
        //  handleLocation = {handleLocation}
         place={pl}
         key={pl.id}
         ></Place>)
     }
  </div>
);
};
export default Home;