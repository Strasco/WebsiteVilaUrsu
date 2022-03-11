import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "Text can be here gogogo",
      },
      {
        icon: <FaHiking />,
        title: "Hiking",
        info: "Text can be here gogogo",
      },
      {
        icon: <FaShuttleVan />,
        title: "Shuttle Van",
        info: "Text can be here gogogo",
      },
      {
        icon: <FaBeer />,
        title: "Beer",
        info: "Text can be here gogogo",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Servicii"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
