import "./EmergencyPage.css";
import Header from "../../components/Header/Header";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import AlertMascot from "../../components/AlertMascot/AlertMascot";
import OurStory from "../../components/OurStory/OurStory";
import Footer from "../../components/Footer/Footer";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";
import ArrowUp from "../../components/ArrowUp/ArrowUp";
import bgStorm from "../../assets/its-roofing-home.jpg";
import bgInsuranceMobile from "../../assets/bg-services-mobile.jpg";
import CertificatesSwiper from "../../components/CertificatesSwiper/CertificatesSwiper";
import EmergencyIntro from "../../components/EmergencyServices/EmergencyIntro/EmergencyIntro";
import EmergencyBenefits from "../../components/EmergencyServices/EmergencyBenefits/EmergencyBenefits";
import EmergencyContact from "../../components/ContactArea/ContactArea";
import EmergencyServicesArea from "../../components/EmergencyServices/EmergencyServicesArea/EmergencyServicesArea";


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
                      <span className="first">EMERGENCY</span>
                      <span className="second">SERVICES</span>
                    </span>
                  </h2>
                  <h3>Fast solutions for your home</h3>
                </div>
                <div className="cont-contact-financy">
                  <a href="#emergency-contact" className="btn-contact-financy">
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
            <a href="#emergency-contact" className="btn-financy-responsive">
              reserve
            </a>
            <img className="insurance-bg-page" src={bgStorm} alt="bg-home" />
            <img className="insurance-bg-tablet" src={bgInsuranceMobile} alt="bg-home" />
            <img className="insurance-bg-mobile" src={bgInsuranceMobile} alt="bg-home" />
          </section>
          <EmergencyIntro/>
          <EmergencyBenefits/>
          <EmergencyServicesArea/>
          <CertificatesSwiper />
          <OurStory />
          <EmergencyContact/>
          <ArrowUp />
          <Footer />
        </section>
      );
    }