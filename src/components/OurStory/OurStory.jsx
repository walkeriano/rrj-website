import "./OurStory.css";
import { useRef } from "react";
import bannerOne from "../../assets/banner-one-story.jpg";
import bannerTwo from "../../assets/banner-two-story.jpg";
import bannerTre from "../../assets/banner-tre-story.jpg";
import arrow from "../../assets/arrow.svg";
import bnfOne from "../../assets/benefits-one.jpg";
import bnfTwo from "../../assets/benefits-two.jpg";
import bnfTre from "../../assets/benefits-tre.jpg";




export default function OurStory() {
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


  return (
    <section className="section-story">
      <h4>our story</h4>
      <h2>
        Experts in<span> roofing</span>
      </h2>
      <section className="cont-slider-our-section">
        <p className="title-slider-story">Experience Qualified.</p>
        <div className="section-btn-slider-story">
          <button onClick={left}>
            <img src={arrow} alt="arrow" />
          </button>
          <button onClick={right}>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <section ref={container} className="slider-story-area">
          <img src={bannerOne} alt="banner-image" />
          <img src={bannerTre} alt="banner-image" />
          <img src={bannerTwo} alt="banner-image" />
        </section>
      </section>
      <h3>
        Rrj construction
        <br /><span>& remodeling</span>
      </h3>
      <p className="info-our-story">
        The leading local roofing company. We provide a complete range of
        services defined by quality, innovation, and expertise. With years of
        experience, we’ve developed a strong reputation for our masterful
        craftsmanship and committed customer service, always going above and
        beyond to meet our clients’ needs. For quality roofing from trusted
        professionals, we are the team for the job.
      </p>
      <section className="benefits-section">
        <div className="item-benefits">
          <div className="info-benefits">
            <p>124</p>
            <span>+</span>
          </div>
          <p className="name-benefits">Services Realized</p>
          <div className="color-img-benefits"></div>
          <img src={bnfOne} alt="img-benefits" />
        </div>
        <div className="item-benefits">
          <div className="info-benefits">
            <p>99</p>
            <span>%</span>
          </div>
          <p className="name-benefits">Happy Clients</p>
          <div className="color-img-benefits"></div>
          <img src={bnfTre} alt="img-benefits" />
        </div>
        <div className="item-benefits">
          <div className="info-benefits">
            <p>45</p>
            <span>+</span>
          </div>
          <p className="name-benefits">Team Work</p>
          <div className="color-img-benefits"></div>
          <img src={bnfTwo} alt="img-benefits" />
        </div>
      </section>
    </section>
  );
}
