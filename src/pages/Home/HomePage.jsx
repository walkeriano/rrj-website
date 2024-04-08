import "./HomePage.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import bgHome from "../../assets/bg-home.jpg";
import bgHomeMobile from "../../assets/bg-home-mobile.jpg";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import AlertMascot from "../../components/AlertMascot/AlertMascot";
import OurStory from "../../components/OurStory/OurStory";
import ServicesArea from "../../components/ServicesArea/ServicesArea";
import Recomendations from "../../components/Recomendations/Recomendations";
import ContactArea from "../../components/ContactArea/ContactArea";
import Footer from "../../components/Footer/Footer";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";
import CertificatesSwiper from "../../components/CertificatesSwiper/CertificatesSwiper";
import ArrowUp from "../../components/ArrowUp/ArrowUp";
import BannerHome from "../../components/BannerHome/BannerHome";

export default function Home() {
  return (
    <section className="cont-body-app">
      <section className="cont-general-app">
        <Header />
        <section className="left-home-cont">
          <div className="cont-title">
            <div className="cont-info-items">
              <h1>
                <span className="box-first-title">
                  <span className="first">Premier</span>
                  <span className="second">roofing</span>
                </span>
                <span className="tercer">company</span>
              </h1>
              <h2>Frankfort Kentucky´s</h2>
            </div>
            <div className="cont-contact-home">
              <Link to={"/Contact"} className="btn-contact">
                Contact
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
          Contact
        </Link>
        <img className="bg-home" src={bgHome} alt="bg-home" />
        <img className="bg-home-mobile" src={bgHomeMobile} alt="bg-home" />
      </section>
      <CertificatesSwiper/>
      <OurStory />
      <BannerHome/>
      <ServicesArea />
      <Recomendations />
      <ContactArea />
      <ArrowUp/>
      <Footer />
    </section>
  );
}
