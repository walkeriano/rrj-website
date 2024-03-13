// import { Link } from "react-router-dom";
import "./StormPage.css";
import Header from "../../components/Header/Header";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import AlertMascot from "../../components/AlertMascot/AlertMascot";
import OurStory from "../../components/OurStory/OurStory";
import Footer from "../../components/Footer/Footer";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";
import ArrowUp from "../../components/ArrowUp/ArrowUp";
import bgStorm from "../../assets/img/website-home.jpg";
// import bgStormMobile from "../../assets/img/website-home.jpg";
import CertificatesSwiper from "../../components/CertificatesSwiper/CertificatesSwiper";
import StormIntro from "../../components/StormDamageComponents/StormIntro/StormIntro";
import StormSlider from "../../components/StormDamageComponents/StormSlider/StormSlider";
import InsuranceClaim from "../../components/StormDamageComponents/InsuranceClaim/InsuranceClaim";
import InsuranceContact from "../../components/StormDamageComponents/Contact/Contact";

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
                  <span className="first">INSURANCE</span>
                  <span className="second">CLAIMS</span>
                </span>
                <span className="tercer">EXPERTS </span>
              </h2>
              <h3>WIND DAMAGE? DON'T WORRY</h3>
            </div>
            <div className="cont-contact-financy">
              <a href="#financy-form-cont" className="btn-contact-financy">
                Reserve
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
        <a href="#financy-form-cont" className="btn-financy-responsive">
          reserve
        </a>
        <img className="bg-home" src={bgStorm} alt="bg-home" />
        <img className="bg-home-mobile" src={bgStorm} alt="bg-home" />
      </section>
      <StormIntro />
      <StormSlider />
      {/* <div className="title-container">
        <h2 className="financy-title">
          RRJ FINANCE
          <br />
          <span className="financy-span">YOUR REMODELING</span>
        </h2>
        <p className="financy-text">
          Don't let finances hold back your dreams. With RRJ Remodeling, you can
          confidently pursue your home or business improvements
        </p>
      </div> */}
      <InsuranceClaim />
      <InsuranceContact />
      <CertificatesSwiper />
      <OurStory />
      <ArrowUp />
      <Footer />
    </section>
  );
}
