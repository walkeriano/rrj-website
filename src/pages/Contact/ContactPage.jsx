import "./ContactPage.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import FormContact from "../../components/FormContact/FormContact";
import AlertMascot from "../../components/AlertMascot/AlertMascot";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";
import bgHome from "../../assets/bg-home-contact.jpg";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  return (
    <section className="cont-body-app">
      <section className="cont-general-app">
        <Header />
        <section className="left-home-cont">
          <div className="cont-title">
            <div className="cont-info-items">
              <h1>
                <span className="second">schedule an</span>
                <br />
                <span className="tercer">appointment</span>
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
        <img className="bg-home" src={bgHome} alt="bg-home" />
      </section>
      <section className="cont-items-contact-page">
        <section></section>
        <FormContact />
      </section>
      <section className="box-map">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50170.4191435681!2d-84.90095884462977!3d38.19477558161744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8842734c8b1953c9%3A0x536418a08867425c!2sFr%C3%A1ncfort%2C%20Kentucky%2040601%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1705862950505!5m2!1ses!2ses"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Footer />
    </section>
  );
}
