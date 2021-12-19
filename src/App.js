import React from 'react'
import './App.css';
import Rooms from './pages/Rooms';
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Restaurant from './pages/Restaurant';
import Error from './pages/Error';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Switch} from 'react-router-dom'
import Navbar from "./Components/Navbar"

function App() {
  return <>
  <Navbar/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms" component={Rooms}/>
    <Route exact path="/rooms/:slug" component={SingleRoom}/>
    <Route exact path="/restaurant" component={Restaurant}/>
    <Route component={Error}/>
  </Switch>
  </>;
  
}

export default App;
