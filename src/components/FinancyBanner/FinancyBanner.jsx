import "./FinancyBanner.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import financyBannerBg from "../../assets/financy-banner.jpg";
import bgFree from "../../assets/bgFree.jpg";

import check from "../../assets/icons/circle-check-regular.svg";
import Arrow from "../../assets/arrow.svg";

export default function FinancyBanner() {
  const sliderRef = useRef(null);

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollLeft += scrollOffset;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="slider-banner-container">
      <section className="banners-container" ref={sliderRef}>
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
                <img src={check} alt="" />
                <p className="financy-banner-title">Storm Damage Services</p>
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
                to={"/storm-servives"}
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
                <img src={check} alt="" />
                <p className="financy-banner-title">Get a Free Inspection</p>
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
            className="financy-banner-container-img"
            src={bgFree}
            alt="banner-img"
          />
        </div>
      </section>
      <div className="banner-button-container">
        <button onClick={() => scroll(-1200)}>
          {" "}
          <img className="financy-arrow-left" src={Arrow} alt="" />
        </button>
        <button onClick={() => scroll(1200)}>
          <img src={Arrow} alt="" />
        </button>
      </div>
    </section>
  );
}
