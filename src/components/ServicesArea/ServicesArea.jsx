import "./ServicesArea.css";
import React from "react";
import { useRef } from "react";
import useFirestoreCollection from "../../useFirestoreCollection";
import bgServicesArea from "../../assets/bg-home-two.jpg";
import arrow from "../../assets/arrow.svg";
import more from "../../assets/more.svg";

export default function ServicesArea() {
  let container = useRef(null);
  const { data, loading, error } = useFirestoreCollection("categories");

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const left = () => {
    if (container.current) {
      container.current.scrollLeft -= 250;
    }
  };

  const right = () => {
    if (container.current) {
      container.current.scrollLeft += 250;
    }
  };

  return (
    <section className="section-services-area">
      <section className="info-section-services">
        <div className="info-services">
          <h4>Services</h4>
          <h2>
            Professional
            <br />
            Works
          </h2>
          <h3>Experience Certified</h3>
        </div>
        <div className="btn-slice-services">
          <button onClick={left}>
            <img src={arrow} alt="arrow-previous" />
          </button>
          <button onClick={right}>
            <img src={arrow} alt="arrow-next" />
          </button>
        </div>
      </section>
      <section className="slider-section-services">
        <section ref={container} className="slider">
          {data.map((item) => (
            <div className="item-slider">
              <div className="box-arrow">
                <img src={more} alt="icon-more" />
              </div>
              <div className="gradient-name-service">
                <h3>{item.name}</h3>
              </div>
              <img
                src={item.banner}
                className="img-item-services"
                alt="img-services"
              />
            </div>
          ))}
        </section>
      </section>
      <section className="bg-section-space">
        <img src={bgServicesArea} alt="bg-area" />
      </section>
    </section>
  );
}
