import "./FreeInspectionPage.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import mobileBanner from "../../assets/portada-mobile.jpg";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import AlertMascot from "../../components/AlertMascot/AlertMascot";
import OurStory from "../../components/OurStory/OurStory";
import Footer from "../../components/Footer/Footer";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";
import CertificatesSwiper from "../../components/CertificatesSwiper/CertificatesSwiper";
import ArrowUp from "../../components/ArrowUp/ArrowUp";
import InspectionForm from "../../components/InspectionForm/InspectionForm";
import freelogo from "../../assets/freeinspectionlogo.svg";
import bgFree from "../../assets/bgFree.jpg";

export default function FreeInspectionPage() {
  return (
    <section className="cont-body-app">
      <section className="cont-general-app">
        <Header />
        <section className="left-home-cont">
          <div className="cont-title">
            <div className="cont-info-items">
              <img
                className="get-a-free-inspection-logo"
                src={freelogo}
                alt="freeinspectionlogo"
              />
            </div>
            <div className="cont-contact-home-yellow">
              <a href="#free-inspection-form-container" className="btn-contact">
                Book Now
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
        <Link to={"/Contact"} className="btn-contact-responsive-yellow">
          Book Now
        </Link>
        <img className="bg-home" src={bgFree} alt="bg-home" />
        <img className="bg-home-mobile" src={mobileBanner} alt="bg-home" />
      </section>
      <InspectionForm />
      <CertificatesSwiper />
      <OurStory />
      <ArrowUp />
      <Footer />
    </section>
  );
}
