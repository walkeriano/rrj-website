import "./InsurancePage.css";
import Header from "../../components/Header/Header";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import AlertMascot from "../../components/AlertMascot/AlertMascot";
import Footer from "../../components/Footer/Footer";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";
import ArrowUp from "../../components/ArrowUp/ArrowUp";
import bgStorm from "../../assets/img/website-home.jpg";
import bgInsuranceMobile from "../../assets/img/website-home-mobile.jpg";
import InsuranceIntro from "../../components/StormDamageComponents/InsuranceIntro/InsuranceIntro";
import InsuranceClaim from "../../components/StormDamageComponents/InsuranceClaim/InsuranceClaim";
import InsuranceContact from "../../components/StormDamageComponents/InsuranceContact/InsuranceContact";

export default function InsurancePage() {
  return (
    <section className="financy-page-container">
      <section className="cont-general-app">
        <Header />
        <section className="left-home-cont">
          <div className="cont-title">
            <div className="insurance-cont-info-items">
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
        <img className="insurance-bg-tablet" src={bgStorm} alt="bg-home" />
        <img className="insurance-bg-mobile" src={bgInsuranceMobile} alt="bg-home" />
      </section>
      <InsuranceIntro />
      <InsuranceClaim />
      <InsuranceContact />
      <ArrowUp />
      <Footer />
    </section>
  );
}
