import FreeInspectionContact from "../../components/FreeInspectionContact/FreeIspectionContact";
import "./FreeInspectionPage.css"
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import bgHome from "../../assets/bg-home.jpg";
import bgHomeMobile from "../../assets/bg-home-mobile.jpg";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import AlertMascot from "../../components/AlertMascot/AlertMascot";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";

export default function FreeInspectionPage() {
  return (
    <section className="free-inspecton-container">
      <section className="banner-container">
        <Header />
        <section className="left-home-cont">
          <div className="cont-title">
            <div className="cont-info-items">
              <h1>
                <span className="box-first-title">
                  <span className="first">Get a free</span>
                  <span className="second">inspection</span>
                </span>
              </h1>
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
        <Link to={"/Contact"} className="btn-contact-responsive">
          Contact
        </Link>
        <img className="bg-home" src={bgHome} alt="bg-home" />
        <img className="bg-home-mobile" src={bgHomeMobile} alt="bg-home" />
      </section>
      <FreeInspectionContact />
    </section>
  );
}
