import React, { useState } from "react";
import "./ServicesPage.css";

import img1 from "../../assets/img/capataz-joven-pie-atras-ropa-trabajo-naranja-casco-amarillo-usando-rodillo-pintura-nuevo-apartamento-trabajo.jpg";
import img2 from "../../assets/img/gente-renovando-concepto-casa.jpg";
import img3 from "../../assets/img/hombre-tiro-completo-casco-proteccion.jpg";
import img4 from "../../assets/img/hombre-tiro-medio-trabajando-techo.jpg";
import img5 from "../../assets/img/hombre-trabajando-techo-tiro-completo-martillo.jpg";
import img6 from "../../assets/img/hombres-tiro-medio-trabajando-juntos-techo.jpg";
import img7 from "../../assets/img/hombres-tiro-medio-trabajando-juntos.jpg";
import img8 from "../../assets/img/istockphoto-1132536540-1024x1024.jpg";
import img9 from "../../assets/img/personas-tiro-medio-que-trabajan-cascos.jpg";

import icon1 from "../../assets/icons/icons8-back-30.png";
import icon2 from "../../assets/icons/icons8-right-30.png";
import icon3 from "../../assets/icons/icons8-whatsapp-30.png";
import icon4 from "../../assets/icons/icons8-phone-30.png";
import icon5 from "../../assets/icons/icons8-open-envelope-30.png";
import icon6 from "../../assets/icons/zoom-in.svg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const captions = [
  "COMMERCIAL ROOFING",
  "RESIDENCIAL ROOFING",
  "EMERGENCY ROOFING",
  "COMMERCIAL ROOFING",
  "RESIDENCIAL ROOFING",
  "EMERGENCY ROOFING",
  "COMMERCIAL ROOFING",
  "RESIDENCIAL ROOFING",
  "EMERGENCY ROOFING",
];

export default function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="servicepage-container">
      <h4 className="service-third-title">OUR SERVICES</h4>
      <h2 className="service-main-title">
        QUALITY IN <br /> <span>EVERYTHING WE DO</span>
      </h2>

      <section className="carousel-container">
        <div className="white-box-left">
          <button className="arrow-btn-left" onClick={handlePrevClick}>
            <img src={icon1} alt="" />
          </button>
        </div>

        <div className="slider-service-page">
          {images.map((image, index) => (
            <div
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
              key={index}
            >
              <img
                className="carousel-img"
                src={image}
                alt={`Image ${index + 1}`}
              />
              <p className="name-service">{captions[index]}</p>
            </div>
          ))}
        </div>

        <div className="white-box-right">
          <button className="arrow-btn-right" onClick={handleNextClick}>
            <img src={icon2} alt="" />
          </button>
        </div>
      </section>

      <section className="columns-section">
        <div className="article-container">
          <article className="first-article-container">
            <section className="first-article">
              <h3 className="first-article-title">
                COMMERCIAL
                <br />
                <span>ROOFING</span>
              </h3>
              <p className="service-parraf">
                When you have a business to operate, it’s important that the
                contractors you hire are dependable and understand the unique
                challenges that you face, and that is particularly true when it
                comes to purchasing and installing commercial roofing. Our
                experienced professional team understands the importance of
                having your installation done correctly and with the right
                materials, as well as your need for minimal disruption to the
                important work that you need to get done. Our team will work
                with you to make sure that whether you need your commercial roof
                replaced, repaired or restored that is done with the highest
                adherence to safety standards and the best materials for your
                budget and specific needs. Call us today to set up a meeting on
                your project.
              </p>
            </section>

            <div className="service-contact">
              <button className="reserve-btn">RESERVE</button>
              <div className="service-social-icons">
                <button className="social-icons-btn">
                  <img className="caca" src={icon3} alt="" />
                </button>
                <button className="social-icons-btn">
                  <img src={icon4} alt="" />
                </button>
                <button className="social-icons-btn">
                  <img src={icon5} alt="" />
                </button>
              </div>
            </div>
            <div className="black-background"></div>
          </article>

          <article className="second-article-container">
            <section className="second-article">
              <h3 className="second-article-title">
                ALL TYPES OF <br />
                <span>
                  COMMERCIAL <br /> ROOFING
                </span>
              </h3>
              <p className="service-parraf-two">
                We are true roofing professionals with expertise in all types of
                roofing systems, maintenance and repair. Whether you are looking
                for built up roofing, low sloped roofing, modified bitumen,
                single ply, EPDM, PVC or TPO, we stand behind every job we do,
                making sure that our clients are completely satisfied with the
                workmanship and quality that we provide. Our goal is 100%
                satisfaction from the start of a job to its finish.
              </p>

              <ul className="service-parraf-three">
                <li>
                  <strong>Built Up:</strong> Coal tar pitch or asphalt
                  waterproofing between plies of reinforcing felt.
                </li>
                <li>
                  <strong>Low Sloped Roofing:</strong> We can help you with the
                  selection of roof deck type from the thousands of available
                  configurations and insulation for your application.
                </li>
                <li>
                  <strong>Modified Bitumen:</strong> Premanufactured membranes
                  that come in roles, these modified hybrid built up systems can
                  be applied in a variety of ways.
                </li>
                <li>
                  <strong>Single Ply:</strong> Made from a variety of polymer
                  plastics and rubbers.
                </li>
                <li>
                  <strong>EPDM:</strong> Large sheets of ethylene propylene
                  diene monomer available in black, used to insulate a roof,
                  this material can be held in place in a variety of ways.
                </li>
                <li>
                  <strong>PVC:</strong> Polyvinyl chloride sheets that are
                  mechanically fastened to the roof deck, available in white or
                  tan.
                </li>
                <li>
                  <strong>TPO:</strong> Fleece-backed sheet membrane that can be
                  reinforced.
                </li>
              </ul>
            </section>
          </article>
        </div>
        <section className="service-img">
          <picture className="lupa-container">
            <img className="service-images" src={img1} alt="" />
            <img className="lupa-img" src={icon6} alt="" />
          </picture>
          <picture>
            <img className="service-images" src={img1} alt="" />
            <img className="lupa-img" src={icon6} alt="" />
          </picture>
          <picture>
            <img className="service-images" src={img1} alt="" />
            <img className="lupa-img" src={icon6} alt="" />
          </picture>
        </section>
      </section>
    </section>
  );
}
