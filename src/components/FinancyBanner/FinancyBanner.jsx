import "./FinancyBanner.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import financyBannerBg from "../../assets/financy-banner.jpg";
import bgFree from "../../assets/bgFree.jpg";
import stormBanner from "../../assets/img/website-banner.jpg";

import check from "../../assets/icons/circle-check-regular.svg";
import Arrow from "../../assets/arrow.svg";
import flash from "../../assets/icons/flash.svg";
import lupa from "../../assets/zoom.svg";

export default function FinancyBanner() {
  let container = useRef(null);

  const left = () => {
     if (container.current) {
      // Obtener el ancho visible del contenedor
      const containerWidth = container.current.offsetWidth;

      // Desplazar hacia la derecha por el ancho visible
      container.current.scrollLeft -= containerWidth;
    }
  };

  const right = () => {
    if (container.current) {
      // Obtener el ancho visible del contenedor
      const containerWidth = container.current.offsetWidth;

      // Desplazar hacia la derecha por el ancho visible
      container.current.scrollLeft += containerWidth;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="slider-banner-container">
      <div className="banner-slider-title">
        <h2>NEWS FOR YOU...</h2>
      </div>
      <section className="banners-container" ref={container}>

      <div className="financy-banner-container">
          <div className="financy-title-parraf ">
            <div className="financy-banner-info">
              <div className="financy-img-p">
                <img src={flash} alt="" />
                <p className="financy-banner-title">Insurance Claims Experts</p>
              </div>

              <hr />
              <h3>
                <span>Wind Damage?
                Don't Worry</span> 
              </h3>
              <p className="financy-second-parraf">
              Roofing, Siding, Gutters
              </p>
            </div>
            <div className="financy-btn">
              <Link
                to={"/insurance-claims-service"}
                onClick={scrollToTop}
                className="black-button-financy"
              >
                {" "}
                see more
              </Link>
            </div>
          </div>
          <img
            className="financy-banner-container-img storm-banner"
            src={stormBanner}
            alt="banner-img"
          />
        </div>

        <div className="financy-banner-container">
          <div className="financy-title-parraf">
            <div className="financy-banner-info">
              <div className="financy-img-p">
                <img src={check} alt="" />
                <p className="financy-banner-title">Financing Available</p>
              </div>
              <hr />
              <h3>
                {" "}
                <span>"Excellent!</span>
                {""} Your Financing was approved"
              </h3>
              <p className="financy-second-parraf">
                Remodeling your house with a financing plan
              </p>
            </div>
            <div className="financy-btn">
              <Link
                to={"/financing-service"}
                onClick={scrollToTop}
                className="black-button-financy"
              >
                {" "}
                see more
              </Link>
            </div>
          </div>
          <img
            className="financy-banner-container-img"
            src={financyBannerBg}
            alt="banner-img"
          />
        </div>

        

        <div className="financy-banner-container">
          <div className="financy-title-parraf">
            <div className="financy-banner-info">
              <div className="financy-img-p">
                <img src={lupa} alt="" />
                <p className="financy-banner-title">Get a Free Inspection</p>
              </div>

              <hr />
              <h3>
                <span>Get a free inspection</span>
              </h3>
              <p className="financy-second-parraf">
              "Free inspection! Save money now!"
              </p>
            </div>
            <div className="financy-btn">
              <Link
                to={"/free-inspection"}
                onClick={scrollToTop}
                className="black-button-financy"
              >
                {" "}
                see more
              </Link>
            </div>
          </div>
          <img
            className="financy-banner-container-img free-inspection-banner"
            src={bgFree}
            alt="banner-img"
          />
        </div>
      </section>
      <div className="banner-button-container">
        <button onClick={left}>
          {" "}
          <img className="financy-arrow-left" src={Arrow} alt="" />
        </button>
        <button onClick={right}>
          <img src={Arrow} alt="" />
        </button>
      </div>
    </section>
  );
}
