import "./ContactArea.css";
import bgContact from "../../assets/bg-contact-area.jpg";
import cel from "../../assets/cel.svg";
import wss from "../../assets/wss.svg";
import mail from "../../assets/mail.svg";
import FormContact from "../FormContact/FormContact";

export default function ContactArea() {
  return (
    <section className="section-contact-area">
      <section className="info-contact-area">
        <div className="cont-info-area">
          <h4>Contact Us</h4>
          <h2>Schedule an <span>appointment</span></h2>
          <p>
            Contact us any time. We are available 24/7 via email or telephone.
          </p>
        </div>
        <div className="btns-cont-contact">
          <a href="tel:5025454375">
            <img src={cel} alt="icon-cel" />
          </a>
          <a href="https://wa.me/51955556653?text=Hola%20¿me%20brindas%20más%20información?">
            <img src={wss} alt="icon-wss" />
          </a>
          <a href="mailto:rrjconstructionremodeling@gmail.com">
            <img src={mail} alt="icon-mail" />
          </a>
        </div>
      </section>
      <section className="formulario-contact-area">
        <FormContact/>
      </section>
      <div className="bg-contact-area">
        <span></span>
        <span></span>
        <img src={bgContact} alt="bg-contact" />
      </div>
    </section>
  );
}
