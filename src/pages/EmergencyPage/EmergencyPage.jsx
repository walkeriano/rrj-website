import "./EmergencyPage.css";

import Header from "../../components/Header/Header";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import AlertMascot from "../../components/AlertMascot/AlertMascot";
import OurStory from "../../components/OurStory/OurStory";
import Footer from "../../components/Footer/Footer";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";
import ArrowUp from "../../components/ArrowUp/ArrowUp";

import bgStorm from "../../assets/img/website-home.jpg";
import bgInsuranceMobile from "../../assets/bg-home-mobile.jpg";

import CertificatesSwiper from "../../components/CertificatesSwiper/CertificatesSwiper";
import EmergencyIntro from "../../components/EmergencyServices/EmergencyIntro/EmergencyIntro";
import EmergencyBenefits from "../../components/EmergencyServices/EmergencyBenefits/EmergencyBenefits";
// import EmergencyIntro from "../../components/EmergencyServices/EmergencyIntro/EmergencyIntro";
// import EmergencyIntro from "../../components/EmergencyServices/EmergencyIntro/EmergencyIntro";

export default function EmergencyPage(){
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
            <img className="insurance-bg-page" src={bgStorm} alt="bg-home" />
            <img className="insurance-bg-tablet" src={bgInsuranceMobile} alt="bg-home" />
            <img className="insurance-bg-mobile" src={bgInsuranceMobile} alt="bg-home" />
          </section>
          <EmergencyIntro/>
          <EmergencyBenefits/>
          <CertificatesSwiper />
          <OurStory />
          <ArrowUp />
          <Footer />
        </section>
      );
    }