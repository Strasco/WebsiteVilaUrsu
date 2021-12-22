import React, { Component } from "react";
import Title from "./Title";
import { FiMail } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default class Contact extends Component {
  state = {
    contactOptions: [
      {
        icon: <BsPhone />,
        title: "Phone",
        info: "0725078292",
        info2: "0725078293",
      },
      {
        icon: <FiMail />,
        title: "Mail",
        info: "vlad.zaharia95@gmail.com",
        info2: "vlad.zaharia95@yahoo.com",
      },
      {
        icon: <FaFacebookF />,
        title: "Facebook",
        link: "https://www.facebook.com/biancelena67/",
        info3: "Contacteaza-ne pe facebook!",
      },
    ],
  };
  render() {
    return (
      <div>
        <section className="services-contact">
          <Title title="Contact"></Title>
          <div className="services-center">
            {this.state.contactOptions.map((item, index) => {
              return (
                <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                  <a href={item.link}>{item.info3}</a>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}
