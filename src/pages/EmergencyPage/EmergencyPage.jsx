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
import bgInsuranceMobile from "../../assets/portada-mobile-campain.jpg";
import CertificatesSwiper from "../../components/CertificatesSwiper/CertificatesSwiper";
import EmergencyIntro from "../../components/EmergencyServices/EmergencyIntro/EmergencyIntro";
import EmergencyBenefits from "../../components/EmergencyServices/EmergencyBenefits/EmergencyBenefits";
import EmergencyContact from "../../components/ContactArea/ContactArea";
import EmergencyServicesArea from "../../components/EmergencyServices/EmergencyServicesArea/EmergencyServicesArea";

export default function EmergencyPage() {
  return (
    <section className="financy-page-container">
      <section className="cont-general-app">
        <Header />
        <section className="left-home-cont">
          <div className="cont-title">
            <div className="financy-cont-info-items"></div>
            <div className="cont-contact-financy">
              <a href="tel:5025454375" className="btn-contact-financy">
                Call now !
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
        <a href="tel:5025454375" className="btn-financy-responsive">
          Call now !
        </a>
        <img className="insurance-bg-page" src={bgStorm} alt="bg-home" />
        <img
          className="insurance-bg-tablet"
          src={bgStorm}
          alt="bg-home"
        />
        <img
          className="insurance-bg-mobile"
          src={bgInsuranceMobile}
          alt="bg-home"
        />
      </section>
      <EmergencyIntro />
      <EmergencyBenefits />
      <EmergencyServicesArea />
      <CertificatesSwiper />
      <OurStory />
      <EmergencyContact />
      <ArrowUp />
      <Footer />
    </section>
  );
}
