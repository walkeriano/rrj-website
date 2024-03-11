import "./StormSlider.css";
import React, { useRef } from "react";

import Arrow from "../../../assets/arrow.svg";
import brokenHouse from "../../../assets/icons/broken-house.svg";
import flash from "../../../assets/icons/flash.svg";
import brokenRoof from "../../../assets/icons/broken-roof.svg";
import flood from "../../../assets/icons/flood.svg";
import brokenTree from "../../../assets/icons/broken-tree.svg";

export default function StormSlider() {
  const sliderRef = useRef(null);

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollLeft += scrollOffset;
  };

  return (
    <section className="storm-slider-items-container">
      <div className="title-slider-storm">
        <div className="title-slider-container">
          <h2>
            FREQUENT DAMAGES
            <br />
            IN NATURAL DISASTERS
          </h2>
        </div>
      </div>
      <section className="storm-slider-container">
        <section className="slider-cards-storm-container" ref={sliderRef}>
          <div className="card-slider-storm-container">
            <div className="items-card-container">
              <img src={brokenRoof} alt="" />
              <h4>Roof Damage </h4>
              <p>
                Severe weather conditions such as high winds can lift shingles,
                tiles, or other roofing materials, leading to partial or
                complete detachment. Hailstorms can cause cracks, compromising
                their integrity and allowing water to seep through.
              </p>
            </div>
          </div>
          <div className="card-slider-storm-container">
            <div className="items-card-container">
              <img src={brokenHouse} alt="" />
              <h4>Structural Damage</h4>
              <p>
                Storms can cause serious structural damage to buildings, houses,
                and other infrastructures. Strong winds can tear off roofs,
                topple trees onto structures, and cause damage to the integrity
                of walls and foundations.
              </p>
            </div>
          </div>

          <div className="card-slider-storm-container">
            <div className="items-card-container">
              <img src={flood} alt="" />
              <h4>FLOOD </h4>
              <p>
                Storms can cause serious structural damage to buildings, houses,
                and other infrastructures. Strong winds can tear off roofs,
                topple trees onto structures, and cause damage to the integrity
                of walls and foundations.
              </p>
            </div>
          </div>

          <div className="card-slider-storm-container">
            <div className="items-card-container">
              <img src={brokenTree} alt="" />
              <h4>TREE DAMAGE </h4>
              <p>
                Falling trees or branches due to strong winds can damage your
                house's exterior, windows, or even penetrate the roof.
              </p>
            </div>
          </div>

          <div className="card-slider-storm-container">
            <div className="items-card-container">
              <img src={flash} alt="" />
              <h4>ELECTRICAL DAMAGE</h4>
              <p>
                Thunderstorms can cause short circuits, damage to electrical
                wiring, and power outages, which can be dangerous and require
                electrical repairs.
              </p>
            </div>
          </div>
        </section>
      </section>
      <div className="storm-btn-container">
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
