import "./ContactPage.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import FormContact from "../../components/FormContact/FormContact";
import AlertMascot from "../../components/AlertMascot/AlertMascot";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";
import bgHome from "../../assets/bg-home-contact.jpg";
import bgHomeMobile from "../../assets/bg-contact-mobile.jpg";
import Footer from "../../components/Footer/Footer";
import cel from "../../assets/cel.svg";
import wss from "../../assets/wss.svg";
import mail from "../../assets/location.svg";
import bgContact from "../../assets/bg-contact-area.jpg";
import ArrowUp from "../../components/ArrowUp/ArrowUp";

export default function Contact() {
  return (
    <section className="cont-body-app">
      <section className="cont-general-app">
        <Header />
        <section className="left-home-cont">
          <div className="cont-title">
            <div className="cont-info-items">
              <h1>
                <span className="second-contact">schedule an</span>
                <span className="tercer-contact">appointment</span>
              </h1>
              <h2>Contact Channels</h2>
            </div>
            <div className="cont-contact-home">
              <Link to={"/Contact"} className="btn-contact">
                Reserve
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
        <Link to={"/Contact"} className="btn-contact-responsive">
          Reserve
        </Link>
        <img className="bg-home" src={bgHome} alt="bg-home" />
        <img className="bg-home-mobile" src={bgHomeMobile} alt="bg-home" />
      </section>
      <section className="cont-items-contact-page">
        <h4 className="title-contact">Contact us</h4>
        <p className="subtitle-contact">
          Contact us any time. We are available 24/7 via email or telephone.
        </p>
        <section className="box-info-general-contact-page">
          <section className="sec-form-contact-page">
            <FormContact />
          </section>
          <section className="container-info-contact-page">
            <section className="box-info-contact">
              <div className="item-chanel-contact">
                <a href="tel:5025454375">
                  <img src={cel} alt="icon cel" />
                </a>
                <div className="info-chanel">
                  <p>Call us</p>
                  <span>(502) 545-4375</span>
                </div>
              </div>
              <div className="item-chanel-contact">
                <a  href="https://www.google.com/maps/dir//Fr%C3%A1ncfort+Kentucky+40601+EE.+UU./@38.2009055,-84.8732835,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8842734c8b1953c9:0x536418a08867425c!2m2!1d-84.8732835!2d38.2009055?entry=ttu">
                  <img src={mail} alt="icon cel" />
                </a>
                <div className="info-chanel">
                  <p>Our location</p>
                  <span>Frankfort, KY 40601</span>
                </div>
              </div>
              <div className="item-chanel-contact">
                <a href="https://wa.me/15025454375?text=Hello,%20I%20need%20more%20information!">
                  <img src={wss} alt="icon cel" />
                </a>
                <div className="info-chanel">
                  <p>Email us</p>
                  <span>rrjconstructionremodeling@gmail.com</span>
                </div>
              </div>
            </section>
          </section>
        </section>
        <div className="bg-contact-area">
          <span></span>
          <span></span>
          <img src={bgContact} alt="bg-contact" />
        </div>
      </section>
      <section className="box-map">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50170.4191435681!2d-84.90095884462977!3d38.19477558161744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8842734c8b1953c9%3A0x536418a08867425c!2sFr%C3%A1ncfort%2C%20Kentucky%2040601%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1705862950505!5m2!1ses!2ses"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <ArrowUp/>
      <Footer />
    </section>
  );
}
