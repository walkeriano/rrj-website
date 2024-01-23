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
import icon1 from "../../assets/icons/icons8-back-30.png";
import icon2 from "../../assets/icons/icons8-right-30.png";
import zoom from "../../assets/zoom.svg";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

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
                <span className="second">Experience</span>
                <br />
                <span className="tercer">Certified</span>
              </h1>
              <h2>Professional Works</h2>
            </div>
            <div className="cont-contact-home">
              <Link to={"/Contact"} className="btn-contact">
                View all services
              </Link>
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
        <img className="bg-home" src={bgHome} alt="bg-home" />
      </section>
      <section className="servicepage-container">
        <h4 className="service-third-title">OUR SERVICES</h4>
        <h2 className="service-main-title">
          QUALITY IN <br />
          <span>EVERYTHING WE DO</span>
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
                  <p className="service-parraf">
                    When you have a business to operate, it’s important that the
                    contractors you hire are dependable and understand the
                    unique challenges that you face, and that is particularly
                    true when it comes to purchasing and installing commercial
                    roofing. Our experienced professional team understands the
                    importance of having your installation done correctly and
                    with the right materials, as well as your need for minimal
                    disruption to the important work that you need to get done.
                    Our team will work with you to make sure that whether you
                    need your commercial roof replaced, repaired or restored
                    that is done with the highest adherence to safety standards
                    and the best materials for your budget and specific needs.
                    Call us today to set up a meeting on your project.
                  </p>
                </div>
                <div className="service-contact">
                  <button className="reserve-btn">RESERVE</button>
                  <div className="service-social-icons">
                    <button>
                      <img src={cel} alt="icon-contact" />
                    </button>
                    <button>
                      <img src={wss} alt="icon-contact" />
                    </button>
                    <button>
                      <img src={mail} alt="icon-contact" />
                    </button>
                  </div>
                </div>
                <div className="black-background">
                  <img src={selectedItem?.bannerSlider}
                  alt="img-service" />
                </div>
              </section>
              <section className="second-article-container">
                <section className="second-article">
                  <h3 className="second-article-title">
                    ALL TYPES OF COMMERCIAL ROOFING
                  </h3>
                  <p className="service-parraf-two">
                    We are true roofing professionals with expertise in all
                    types of roofing systems, maintenance and repair. Whether
                    you are looking for built up roofing, low sloped roofing,
                    modified bitumen, single ply, EPDM, PVC or TPO, we stand
                    behind every job we do, making sure that our clients are
                    completely satisfied with the workmanship and quality that
                    we provide. Our goal is 100% satisfaction from the start of
                    a job to its finish.
                  </p>
                  <ul className="service-parraf-three">
                    <li>
                      <strong>Built Up:</strong> Coal tar pitch or asphalt
                      waterproofing between plies of reinforcing felt.
                    </li>
                    <li>
                      <strong>Low Sloped Roofing:</strong> We can help you with
                      the selection of roof deck type from the thousands of
                      available configurations and insulation for your
                      application.
                    </li>
                    <li>
                      <strong>Modified Bitumen:</strong> Premanufactured
                      membranes that come in roles, these modified hybrid built
                      up systems can be applied in a variety of ways.
                    </li>
                    <li>
                      <strong>Single Ply:</strong> Made from a variety of
                      polymer plastics and rubbers.
                    </li>
                    <li>
                      <strong>EPDM:</strong> Large sheets of ethylene propylene
                      diene monomer available in black, used to insulate a roof,
                      this material can be held in place in a variety of ways.
                    </li>
                    <li>
                      <strong>PVC:</strong> Polyvinyl chloride sheets that are
                      mechanically fastened to the roof deck, available in white
                      or tan.
                    </li>
                    <li>
                      <strong>TPO:</strong> Fleece-backed sheet membrane that
                      can be reinforced.
                    </li>
                  </ul>
                </section>
              </section>
            </article>
            <section className="service-img">
              <div
                className="image-section-services"
                
              >
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
                  src={selectedItem?.servicesOne}
                  alt="img-service"
                />
              </div>
            </section>
          </section>
        )}
      </section>
      <Footer />
    </section>
  );
}
