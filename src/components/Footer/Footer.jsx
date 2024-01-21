import "./Footer.css";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/logo-white.svg";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";
import cel from "../../assets/cel.svg";
import wss from "../../assets/wss.svg";
import mail from "../../assets/mail.svg";
import inst from "../../assets/inst.svg";
import fb from "../../assets/fb.svg";


export default function Footer() {
  return (
    <footer className="section-footer">
      <section className="footer-first">
        <section className="footer-logo">
          <img src={logoWhite} className="logo-footer" alt="logo-footer" />
          <p>Frankfort, KY & Surrounding Areas United States.</p>
          <div className="logos-certified-footer">
            <img src={certifiedOne} alt="" />
            <img src={certifiedTwo} alt="" />
          </div>
        </section>
        <section className="footer-services">
          <p>Services</p>
          <ul>
            <li><Link className="link-foot" to={"/Services"}>Commercial Roofing</Link></li>
            <li><Link className="link-foot" to={"/Services"}>Residencial Roofing</Link></li>
            <li><Link className="link-foot" to={"/Services"}>Emergency Roofing</Link></li>
            <li><Link className="link-foot" to={"/Services"}>Roof Instalation</Link></li>
            <li><Link className="link-foot" to={"/Services"}>Roof Inspection</Link></li>
            <li><Link className="link-foot" to={"/Services"}>Flooring</Link></li>
            <li><Link className="link-foot" to={"/Services"}>Roof Repairs</Link></li>
            <li><Link className="link-foot" to={"/Services"}>Siding</Link></li>
            <li><Link className="link-foot" to={"/Services"}>Remodeling</Link></li>
          </ul>
        </section>
        <section className="footer-contact">
          <p className="title-footer-sec">Contact</p>
          <ul>
            <li>
              <img src={cel} alt="icon-cel" />
              <a href="tel:5025454375">67 54 544</a>
            </li>
            <li>
              <img src={wss} alt="icon-wss" />
              <a href="https://wa.me/51955556653?text=Hola%20¿me%20brindas%20más%20información?">+34 67 54 544</a>
            </li>
            <li>
              <img src={mail} alt="icon-mail" />
              <a href="mailto:rrjconstructionremodeling@gmail.com">contact@rrjconstruction.com</a>
            </li>
          </ul>
          <div className="box-social-footer">
            <a href="https://www.instagram.com/rrjconstructionremodelingllc/" className="box-item-social">
              <img src={inst} alt="icon-instagram" />
            </a>
            <a href="https://www.facebook.com/RRJConstructionRemodeling" className="box-item-social">
              <img src={fb} alt="icon-facebook" />
            </a>
          </div>
        </section>
      </section>
      <section className="footer-last">
        <p>2024 All Rights Reserved - RRJ Construction & Remodeling</p>
      </section>
    </footer>
  );
}
