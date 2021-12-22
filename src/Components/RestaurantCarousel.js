import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import restaurant1 from "../images/images-ursu/restaurant/restaurant1.JPG";
import restaurant2 from "../images/images-ursu/restaurant/restaurant2.JPG";
import restaurant3 from "../images/images-ursu/restaurant/restaurant3.JPG";
import restaurant4 from "../images/images-ursu/restaurant/restaurant4.JPG";
import restaurant5 from "../images/images-ursu/restaurant/restaurant5.JPG";
import restaurant6 from "../images/images-ursu/restaurant/restaurant6.JPG";
import restaurant7 from "../images/images-ursu/restaurant/restaurant7.JPG";
import restaurant8 from "../images/images-ursu/restaurant/restaurant8.JPG";
import restaurant9 from "../images/images-ursu/restaurant/restaurant9.JPG";
import restaurant10 from "../images/images-ursu/restaurant/restaurant10.JPG";

export default class RestaurantCarousel extends Component {
  render() {
    return (
      <div className="restaurant-container">
        <div className="restaurant-carousel-container justify-content-center">
          <Carousel interval={2000}>
            <Carousel.Item>
              <img className="carousel-item" src={restaurant1}></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-item" src={restaurant2}></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-item" src={restaurant3}></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-item" src={restaurant4}></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-item" src={restaurant5}></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-item" src={restaurant6}></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-item" src={restaurant7}></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-item" src={restaurant9}></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-item" src={restaurant10}></img>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
