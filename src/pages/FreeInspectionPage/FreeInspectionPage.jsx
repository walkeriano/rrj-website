import "./FreeInspectionPage.css"
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import bgFree from "../../assets/bgFree.png";
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


export default function FreeInspectionPage() {
  return (
    <section className="cont-body-app">
      <section className="cont-general-app">
        <Header />
        <section className="left-home-cont">
          <div className="cont-title">
            <div className="cont-info-items">
              <h1>
                <span className="box-first-title">
                  <img src={freelogo} alt="freeinspectionlogo" />
                </span>
              </h1>
              <h2>Frankfort Kentucky´s</h2>
            </div>
            <div className="cont-contact-home-yellow">
              <Link to={"/Contact"} className="btn-contact">
                Book Now
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
        <Link to={"/Contact"} className="btn-contact-responsive-yellow">
          Book Now
        </Link>
        <img className="bg-home" src={bgFree} alt="bg-home" />
        <img className="bg-home-mobile" src={bgFree} alt="bg-home" />
      </section>
      <InspectionForm/>
      <CertificatesSwiper/>
      <OurStory />
      <ArrowUp/>
      <Footer />
    </section>
  );
}