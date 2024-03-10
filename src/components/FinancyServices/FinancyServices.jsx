import "./FinancyServices.css";
import React from "react";
import { useRef } from "react";
import useFirestoreCollection from "../../useFirestoreCollection";
import bgServicesArea from "../../assets/bg-home-two.jpg";
import bgServicesResponsive from "../../assets/bg-home-services-responsive.jpg";
import arrow from "../../assets/arrow.svg";
import more from "../../assets/more.svg";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function FinancyServices() {
  let container = useRef(null);
  const { data, loading, error } = useFirestoreCollection("categories");

  if (loading) {
    return <Loading />;
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
          <h4>financing service</h4>
          <h2>
            Financy
            <br />
            Available on
            <br />
            All Services
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
            <Link to={"/Services"} key={item.id} className="item-slider">
              <div className="box-arrow">
                <img src={more} alt="icon-more" />
              </div>
              <div className="gradient-name-financy-service">
                <p className="financing-red-box">FINANCING</p>
                <h3>{item?.name}</h3>
              </div>
              <img
                src={item?.banner}
                className="img-item-services"
                alt="img-services"
              />
            </Link>
          ))}
        </section>
      </section>
      <section className="btn-slice-services-responsive">
        <button onClick={left}>
          <img src={arrow} alt="arrow-previous" />
        </button>
        <button onClick={right}>
          <img src={arrow} alt="arrow-next" />
        </button>
      </section>
      <section className="bg-section-space">
        <img src={bgServicesArea} className="bg-service-area" alt="bg-area" />
        <img src={bgServicesResponsive} className="bg-service-area-responsive" alt="bg-area" />
      </section>
    </section>
  );
}
