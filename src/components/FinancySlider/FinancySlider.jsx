import React, { useRef } from 'react';
import "./FinancySlider.css";

import flexible from "../../assets/flexible.jpg"
import customized from "../../assets/customized.jpg"
import payment from "../../assets/payment-options.jpg"

import Arrow from "../../assets/arrow.svg"

export default function FinancySlider() {
  const sliderRef = useRef(null);

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollLeft += scrollOffset;
  };

  return (
    <section className='slider-financy-container' >
      <section className="financy-slider-container" ref={sliderRef}>
        <span></span>
        <div className="card-img-container">
          <div className="financy-card-container">
            <h3>
              FLEXIBLE
              <br />
              FINANCING OPTIONS
            </h3>
            <p>
              At RRJ Remodeling, we offer tailored financing solutions to suit
              your needs, whether it's roofing, siding, gutters, painting, or
              other projects.
            </p>
          </div>
          <img
            className="financy-img "
            src={flexible}
            alt=""
          />
        </div>
        <div className="card-img-container">
          <div className="financy-card-container ">
            <h3>
              CUSTOMIZED
              <br />
              PLANS
            </h3>
            <p>
              Our team is dedicated to finding the right financial plan for you,
              ensuring your project gets underway smoothly and fits your budget.
            </p>
          </div>
          <img
            className="financy-img"
            src={customized}
            alt=""
          />
        </div>
        <div className="card-img-container">
          <div className="financy-card-container">
            <h3>
              CONVENIENT
              <br />
              PAYMENT OPTIONS
            </h3>
            <p>
              Start your project today with our accessible financing options and
              pay in installments that match your lifestyle.
            </p>
          </div>
          <img
            className="financy-img "
            src={payment}
            alt=""
          />
        </div>
      </section>
      <div className="financy-button-container">
        <button onClick={() => scroll(-1200)}> <img className='financy-arrow-left' src={Arrow} alt="" /></button>
        <button onClick={() => scroll(1200)}><img src={Arrow} alt="" /></button>
      </div>
    </section>
  );
}
