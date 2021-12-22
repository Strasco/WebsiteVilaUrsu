import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <Hero>
        <Banner title="404" subtitle="page not found">
          <Link to="/" className="btn-primary">
            Inapoi Acasa
          </Link>
        </Banner>
      </Hero>
    </div>
  );
}
