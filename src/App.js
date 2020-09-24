import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nomatch from './Components/Nomatch/Nomatch';
import PlaceDetail from './Components/PlaceDetail/PlaceDetail';


function App() {
  return (
    <Router>
      <Header></Header>
     
      <Switch>
        <Route exact path='/home'>
        <Home/>
        </Route>
        <Route path='/destination'>
        <Destination/>
        
        </Route>
        <Route exact path='/'>
           <Home/>
        </Route>
        <Route path='/placeDetails/:placeId'>
          <PlaceDetail/>
        </Route>
        <Route path="*">
          <Nomatch/>
        </Route>
     
      </Switch>
      
      
      </Router>
  );
}

export default App;
