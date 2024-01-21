import "./AlertMascot.css";
import iconNotification from "../../assets/icon-notifiaction.svg";
import castor from "../../assets/castor.png";

export default function AlertMascot() {
  return (
    <section className="cont-alert-mascot">
      <div className="cont-icon-alert">
        <img src={iconNotification} alt="icon-alert" />
      </div>
      <img className="icon-castor" src={castor} alt="castor-personaje" />
      <h3>Insurance Claim</h3>
      <p>We support the insurance company's procedures.</p>
    </section>
  );
}
