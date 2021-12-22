import React from "react";
import "./App.css";
import Rooms from "./pages/Rooms";
import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Restaurant from "./pages/Restaurant";
import Error from "./pages/Error";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/NavbarComp";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/restaurant" component={Restaurant} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
