import "./BannerHome.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import financyBannerBg from "../../assets/financy-banner.jpg";
import bgFree from "../../assets/img/inspection-banner.jpg";
import stormBanner from "../../assets/img/website-banner.jpg";
import roofingBanner from "../../assets/its-roofing-banner.jpg";
import check from "../../assets/icons/circle-check-regular.svg";
import Arrow from "../../assets/arrow.svg";
import flash from "../../assets/icons/flash.svg";
import emergency from "../../assets/icons/emergency-house.svg";
import freeTitle from "../../assets/icons/icon-inspection.svg";

export default function BannerHome() {
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
        <h2>
          NEWS FOR YOU
        </h2>
      </div>
      <section className="banner-items-container">
        <div className="banner-button-container">
          <button onClick={left}>
            <img className="financy-arrow-left" src={Arrow} alt="icon-arrow" />
          </button>
        </div>
        <section className="banners-container" ref={container}>
          <div className="section-item">
            <div className="emergency-services-box">
              <div className="banner-info">
                <div className="general-title-item">
                  <img
                    className="icon-insurance"
                    src={emergency}
                    alt="icon-emergency"
                  />
                  <p>Emergency Services</p>
                </div>
                <hr />
                <h3>Fast solutions for your home</h3>
                <Link
                  to={"/emergency-services"}
                  onClick={scrollToTop}
                  className="black-button-financy"
                >
                  see more
                </Link>
              </div>
            </div>
            <img
              className="item-service-img"
              src={roofingBanner}
              alt="banner-img"
            />
          </div>
          <div className="section-item">
            <div className="insurance-box">
              <div className="banner-info">
                <div className="general-title-item">
                  <img src={flash} className="icon-damage" alt="icon-insurance" />
                  <p>Insurance Claims Experts</p>
                </div>
                <hr />
                <h3>Wind Damage? Don't Worry</h3>
                <Link
                  to={"/insurance-claims-service"}
                  onClick={scrollToTop}
                  className="black-button-financy"
                >
                  see more
                </Link>
              </div>
            </div>
            <img
              className="item-service-img"
              src={stormBanner}
              alt="banner-img"
            />
          </div>
          <div className="section-item">
            <div className="financy-box">
              <div className="banner-info">
                <div className="general-title-item">
                  <img className="icon-check" src={check} alt="" />
                  <p>Financing Services</p>
                </div>
                <hr />
                <h3>Remodeling your house with a financing plan</h3>
                <Link
                  to={"/financing-service"}
                  onClick={scrollToTop}
                  className="white-banner-btn"
                >
                  see more
                </Link>
              </div>
            </div>
            <img
              className="item-service-img"
              src={financyBannerBg}
              alt="banner-img"
            />
          </div>
          <div className="section-item">
            <div className="free-inspection-box">
              <div className="banner-info">
                <div className="general-title-item">
                  <img className="free-img-banner" src={freeTitle} alt="" />
                  <p>Get a Free Inspection</p>
                </div>
                <hr />
                <h3>Book a visit to inspect the damage</h3>
                <Link
                  to={"/free-inspection"}
                  onClick={scrollToTop}
                  className="black-button-banner"
                >
                  see more
                </Link>
              </div>
            </div>
            <img className="item-service-img" src={bgFree} alt="banner-img" />
          </div>
        </section>
        <div className="banner-button-container">
          <button onClick={right}>
            <img src={Arrow} alt="" />
          </button>
        </div>
      </section>
    </section>
  );
}
