import "./ServicesPage.css";
import React, { useRef, useState, useEffect } from "react";
import useFirestoreCollection from "../../useFirestoreCollection";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import AlertMascot from "../../components/AlertMascot/AlertMascot";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import cel from "../../assets/cel.svg";
import wss from "../../assets/wss.svg";
import mail from "../../assets/mail.svg";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";
import bgHome from "../../assets/bg-home-services.jpg";
import bgHomeMobile from "../../assets/bg-services-mobile.jpg";
import icon1 from "../../assets/icons/icons8-back-30.png";
import icon2 from "../../assets/icons/icons8-right-30.png";
import zoom from "../../assets/zoom.svg";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import ContactArea from "../../components/ContactArea/ContactArea";
import CertificateSwipper from "../../components/CertificatesSwiper/CertificatesSwiper";
import ArrowUp from "../../components/ArrowUp/ArrowUp";

export default function ServicesPage() {
  let container = useRef(null);
  const { data, loading, error } = useFirestoreCollection("categories");
  const defaultSelectedItem = data.find((item) => item.order === 2);
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

  const handleItemClick = (clickedItem) => {
    if (clickedItem !== selectedItem) {
      setSelectedItem(clickedItem);
    }
  };

  useEffect(() => {
    const defaultSelectedItem = data.find((item) => item.order === 2);
    setSelectedItem(defaultSelectedItem);
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const left = () => {
    if (container.current) {
      container.current.scrollLeft -= 500;
    }
  };

  const right = () => {
    if (container.current) {
      container.current.scrollLeft += 500;
    }
  };

  return (
    <section className="cont-body-app">
      <section className="cont-general-app">
        <Header />
        <section className="left-home-cont">
          <div className="cont-title">
            <div className="cont-info-items">
              <h1>
                <span className="second-service">Experience</span>
                <span className="tercer-service">Certified</span>
              </h1>
              <h2>Construction & Remodeling</h2>
            </div>
            <div className="cont-contact-home">
              <a href="tel:5025454375" className="btn-contact">
                Call now !
              </a>
              <SocialBtns />
            </div>
          </div>
        </section>
        <section className="right-home-cont">
          <AlertMascot />
          <div className="cont-certified-home">
            <img src={certifiedOne} alt="certificado" />
            <img src={certifiedTwo} alt="certificado" />
          </div>
        </section>
        <a href="tel:5025454375" className="btn-contact-responsive">
          Call now !
        </a>
        <img className="bg-home" src={bgHome} alt="bg-home" />
        <img className="bg-home-mobile" src={bgHomeMobile} alt="bg-home" />
      </section>
      <section className="servicepage-container">
        <h4 className="service-third-title">OUR SERVICES</h4>
        <h2 className="service-main-title">
          QUALITY IN
          <span>
            <br />
            EVERYTHING WE DO
          </span>
        </h2>
        <section className="carousel-container">
          <div className="white-box-left">
            <button className="arrow-btn-left" onClick={left}>
              <img src={icon1} alt="icon-arrow" />
            </button>
          </div>
          <div ref={container} className="slider-service-page">
            {data.map((item) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="carousel-item"
              >
                <div
                  className={`box-name-service ${
                    selectedItem === item ? "active" : ""
                  }`}
                >
                  <p className="name-service">{item?.name}</p>
                </div>
                <img
                  className="carousel-img"
                  src={item?.bannerSlider}
                  alt="img-services"
                />
              </div>
            ))}
          </div>
          <div className="white-box-right">
            <button className="arrow-btn-right" onClick={right}>
              <img src={icon2} alt="icon-arrow" />
            </button>
          </div>
        </section>
        {selectedItem && (
          <section className="columns-section">
            <article className="article-container">
              <section className="first-article-container">
                <div className="first-article">
                  <h3 className="first-article-title">{selectedItem?.name}</h3>
                  <p className="service-parraf">{selectedItem?.parrafOne}</p>
                </div>
                <div className="service-contact">
                  <Link to={"/Contact"} className="reserve-btn">
                    RESERVE
                  </Link>
                  <div className="service-social-icons">
                    <a href="tel:5025454375">
                      <img src={cel} alt="icon-contact" />
                    </a>
                    <a href="https://wa.me/15025454375?text=Hello,%20i%20need%20more%20information">
                      <img src={wss} alt="icon-contact" />
                    </a>
                    <a href="mailto:rrjconstructionremodeling@gmail.com">
                      <img src={mail} alt="icon-contact" />
                    </a>
                  </div>
                </div>
                <div className="black-background">
                  <img src={selectedItem?.bannerSlider} alt="img-service" />
                </div>
              </section>
              <section className="second-article-container">
                <section className="second-article">
                  <h3 className="second-article-title">
                    {selectedItem?.subtitle}
                  </h3>
                  <p className="service-parraf-two">
                    {selectedItem?.parrafTwo}
                  </p>
                  {Array.isArray(selectedItem?.parrafTre) ? (
                    <ul className="service-parraf-three">
                      {selectedItem.parrafTre.map((instruccion, index) => (
                        <li key={index}>{instruccion}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="alternate-parraf">
                      {selectedItem?.parrafTre}
                    </p>
                  )}
                </section>
              </section>
            </article>
            <section className="service-img">
              <div className="image-section-services">
                <div className="box-zoom-img">
                  <img src={zoom} alt="icon-zoom" />
                </div>
                <img
                  className="service-images"
                  src={selectedItem?.servicesOne}
                  alt="img-service"
                />
              </div>
              <div className="image-section-services">
                <div className="box-zoom-img">
                  <img src={zoom} alt="icon-zoom" />
                </div>
                <img
                  className="service-images"
                  src={selectedItem?.servicesTwo}
                  alt="img-service"
                />
              </div>
              <div className="image-section-services">
                <div className="box-zoom-img">
                  <img src={zoom} alt="icon-zoom" />
                </div>
                <img
                  className="service-images"
                  src={selectedItem?.servicesTre}
                  alt="img-service"
                />
              </div>
            </section>
            <article className="article-responsive">
              <section className="article-responsive-first">
                <h2>{selectedItem?.name}</h2>
                <div className="article-img-responsive-one">
                  <div className="box-zoom-img">
                    <img src={zoom} alt="icon-zoom" />
                  </div>
                  <img
                    className="service-images-responsive"
                    src={selectedItem?.servicesOne}
                    alt="img-service"
                  />
                </div>
                <p>{selectedItem?.parrafOne}</p>
                <div className="cont-button-article-responsive">
                  <button className="reserve-btn">RESERVE</button>
                  <div className="service-social-icons">
                    <a href="tel:5025454375">
                      <img src={cel} alt="icon-contact" />
                    </a>
                    <a href="https://wa.me/15025454375?text=Hello,%20i%20need%20more%20information">
                      <img src={wss} alt="icon-contact" />
                    </a>
                    <a href="mailto:rrjconstructionremodeling@gmail.com">
                      <img src={mail} alt="icon-contact" />
                    </a>
                  </div>
                </div>
                <div className="black-background-responsive">
                  <img src={selectedItem?.bannerSlider} alt="img-service" />
                </div>
              </section>
              <section className="article-responsive-two">
                <h3>{selectedItem?.subtitle}</h3>
                <p>{selectedItem?.parrafTwo}</p>
                <div className="article-img-responsive-one">
                  <div className="box-zoom-img">
                    <img src={zoom} alt="icon-zoom" />
                  </div>
                  <img
                    className="service-images-responsive"
                    src={selectedItem?.servicesTwo}
                    alt="img-service"
                  />
                </div>
                {Array.isArray(selectedItem?.parrafTre) ? (
                  <ul className="box-lista-service">
                    {selectedItem.parrafTre.map((instruccion, index) => (
                      <li key={index}>{instruccion}</li>
                    ))}
                  </ul>
                ) : (
                  <li>{selectedItem?.parrafTre}</li>
                )}
                <div className="article-img-responsive-one">
                  <div className="box-zoom-img">
                    <img src={zoom} alt="icon-zoom" />
                  </div>
                  <img
                    className="service-images-responsive"
                    src={selectedItem?.servicesTre}
                    alt="img-service"
                  />
                </div>
              </section>
            </article>
          </section>
        )}
      </section>
      <CertificateSwipper/>
      <ContactArea />
      <ArrowUp/>
      <Footer />
    </section>
  );
}
