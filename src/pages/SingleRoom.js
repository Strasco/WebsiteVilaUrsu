import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../Components/StyledHero";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-bootstrap";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name}`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room-container">
          <div className="single-room-content">
            <Carousel interval={2000} controls={true}>
              {images.map((item, index) => {
                return (
                  <Carousel.Item>
                    <img
                      className="carousel-image"
                      key={index}
                      src={item}
                      alt={name}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Detalii</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>Pret : ${price}</h6>
              <h6>
                Capacitate :{" "}
                {capacity > 1 ? `${capacity} persoane` : `${capacity} persoana`}
              </h6>
              <h6>{breakfast && "Mic Dejun Inclus"}</h6>
            </article>
          </div>
        </section>
        {/* <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section> */}
      </>
    );
  }
}
