import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nomatch from './Components/Nomatch/Nomatch';
import PlaceDetail from './Components/Des/PlaceDetail'
import Login from './Components/Login/Login';
import Booking from './Components/Booking/Booking'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     
    <Router>
      <Header>
    
      </Header>
     
      <Switch>
        <Route exact path='/home'>
        <Home/>
        </Route>
        <PrivateRoute path='/booking'>
        <Booking></Booking>
        
        </PrivateRoute>
        {<Route path='/login'>
        <Login/>
        </Route> }
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
      </UserContext.Provider>
  );
}

export default App;
