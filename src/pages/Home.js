import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import FeaturedRooms from "../Components/FeaturedRooms";
import Activities from "../Components/Activities";
import StrajaPresentation from "../Components/StrajaPresentation";
import Contact from "../Components/Contact";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Vila Ursu" subtitle="Camere incepand de la 320 RON">
          <Link to="/rooms" className="btn-primary">
            Vezi Camerele Noastre
          </Link>
        </Banner>
      </Hero>
      <Services></Services>
      {/* <FeaturedRooms></FeaturedRooms> */}
      <Activities></Activities>
      <StrajaPresentation></StrajaPresentation>
      <Contact></Contact>
    </>
  );
}
