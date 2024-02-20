import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import mobileBanner from "../../assets/portada-mobile.jpg";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import AlertMascot from "../../components/AlertMascot/AlertMascot";
import OurStory from "../../components/OurStory/OurStory";
import Footer from "../../components/Footer/Footer";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";
import ArrowUp from "../../components/ArrowUp/ArrowUp";
import bgFinancy from "../../assets/financy-campaña-portada.jpg";
import bgHomeMobile from "../../assets/bg-home-mobile.jpg";
import FinancySlider from "../../components/FinancySlider/FinancySlider";
import CertificatesSwiper from "../../components/CertificatesSwiper/CertificatesSwiper";
import Getintouch from "../../assets/get-in-touch.jpg"

import "./FinancyPage.css";
import FinancyForm from "../../components/FinancyForm/FinacyForm";
import FinancyServices from "../../components/FinancyServices/FinancyServices";

export default function FinancyPage() {
  return (
    <section className="financy-page-container">
      <section className="cont-general-app">
        <Header />
        <section className="left-home-cont">
          <div className="cont-title">
            <div className="financy-cont-info-items">
              <h2>
                <span className="financy-box-first-title">
                  <span className="first">YOU DREAM AND</span>
                  <span className="second">WE FINANCY IT</span>
                </span>
                <span className="tercer">TO YOU</span>
              </h2>
              <h3>FINANCY SERVICE</h3>
            </div>
            <div className="cont-contact-financy">
              <Link to={"/Contact"} className="btn-contact-financy">
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
        <Link to={"/Contact"} className="btn-financy-responsive">
          reserve
        </Link>
        <img className="bg-home" src={bgFinancy} alt="bg-home" />
        <img className="bg-home-mobile" src={bgFinancy} alt="bg-home" />
      </section>
      <div className="title-container">
        <h2 className="financy-title">
          RRJ FINANCE
          <br />
          <span className="financy-span">YOUR REMODELING</span>
        </h2>
        <p className="financy-text">
          Don't let finances hold back your dreams. With RRJ Remodeling, you can
          confidently pursue your home or business improvements
        </p>
      </div>
      <FinancySlider />
      <CertificatesSwiper />
      <FinancyServices />
      <section className="get-in-touch-banner">
        <img src={Getintouch} alt="" />
        <div className="get-in-touch-info">
          <h3>GET IN TOUCH</h3>
          <p>
            Contact us now to learn more about our financing options and take
            the first step towards your dream project.
          </p>
          <a  href="#financy-form-cont">CONTACT US</a>
        </div>
      </section>
      <OurStory />
      <FinancyForm />
      <ArrowUp />
      <Footer />
    </section>
  );
}
