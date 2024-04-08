import "./Recomendations.css";
import React from "react";
import { useRef } from "react";
import useFirestoreCollection from "../../useFirestoreCollection";
import comillas from "../../assets/comillas.svg";
import arrow from "../../assets/arrow.svg";
import bgDarkContact from "../../assets/bg-contact-section.jpg";
import Loading from "../Loading/Loading";

export default function Recomendations() {
  let container = useRef(null);

  const { data, loading, error } = useFirestoreCollection("recomendations");

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const left = () => {
    if (container.current) {
      container.current.scrollLeft -= 300;
    }
  };

  const right = () => {
    if (container.current) {
      container.current.scrollLeft += 300;
    }
  };

  return (
    <section className="section-recomendations">
      <section className="slider-comments">
        <section ref={container} className="comments-all">
          <span></span>
          {data.map((item) => (
            <a href="https://www.google.com/search?q=RRJ+Roofing+%26+Remodeling&oq=rrj+&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MgYIAhBFGDsyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMzYyMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" target="_blank" key={item.id} className="item-comments">
              <div className="box-info-comments">
                <img src={comillas} className="comillas" alt="icon-comillas" />
                <p className="comment-text">{item?.comment}</p>
                <div className="box-user-comments">
                  <img src={item?.perfil}  className="img-perfil-user" alt="" />
                  <div className="name-user">
                    <p>{item?.name}</p>
                    <p>{item?.social}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
          <span></span>
        </section>
        <section className="btns-comments">
          <button onClick={right}>
            <img src={arrow} alt="icon-next" />
          </button>
          <button onClick={left}>
            <img src={arrow} alt="icon-next" />
          </button>
        </section>
      </section>
      <section className="info-section-recomendations">
        <div className="cont-info-comments">
          <h4>Recomendations</h4>
          <h2>
            What clients
            <br />
            say<span> about us</span>
          </h2>
          <p>
            The leading local roofing company. We provide a complete range of
            services defined by quality, innovation, and expertise. With years
            of experience.
          </p>
        </div>
      </section>
      <img
        src={bgDarkContact}
        className="bg-section-comments"
        alt="bg-section"
      />
    </section>
  );
}
