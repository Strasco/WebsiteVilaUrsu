import React from "react";
import Title from "./Title";
import StrajaBackground from "../images/strajabackground.jpg";

export default function Activities() {
  return (
    <>
      <section className="activity-section">
        <div className="container-fluid activity-layer">
          <Title title="Activitati si obiective turistice"></Title>
          <div className="row justify-content-center">
            <div className="activity col-4">
              <h4 className="activity-title">
                Partii de schi - Ski si Snowboarding
              </h4>
              <p>
                In statiunea montana Straja sunt 12 partii de schi prevazute cu
                nocturna si instalatii de transport cu cablu. dintre partii
                "canal" este special amenajata pentru placile de snowboard.
              </p>
            </div>
            <div className="activity col-4">
              <h4 className="activity-title">Snowtubing</h4>
              <p>
                Sunt mai multe modalitati sa gasesti distractie din plin pe
                partie in Straja :) Una din recomandarile noastre este
                snowtubing-ul. Pe partia Platoul Soarelui sunt disponibili 30
                colace si o partie special amenajata pentru aceasta.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="activity col-4">
              <h4 className="activity-title">Sanius</h4>
              <p>
                In statiunea Straja sunt centre de inchiriere echipamente
                sportive de unde se pot inchiria saniute. Pe partiile special
                amenajate va puteti bucura de la mic la mare.
              </p>
            </div>
            <div className="activity col-4">
              <h4 className="activity-title">Ursul Baloo</h4>
              <p>
                Ursul Baloo, este un specimen de urs brun crescut de mic in
                statiunea Straja, fiind un punct de atractie pentru copii si
                turisti. In fiecare an, in luna Februarie este organizata Cupa
                Baloo la schi, un eveniment dedicat copiilor.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="activity col-4">
              <h4 className="activity-title">Schitul Straja si tunelul</h4>
              <p>
                Din anul 2006 intrarea in Schitul Straja se face printr-un tunel
                lung de 50 de metri pe peretii caruia este pictat in intregime
                Calendarul Bisericesc si scene din Vechiul si Noul Testament.
              </p>
            </div>
            <div className="activity col-4">
              <h4 className="activity-title">Crucea Eroilor</h4>
              <p>
                Cu o inaltime de 18,6 metri și o anvergură de 9 metri, Crucea
                Eroilor se inalta deasupra Vaii Jiului de la altitudinea de
                1.485 metri. A fost ridicata in cinstea celor aproximativ 800
                eroi cazuti in Primul Razboi Mondial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
