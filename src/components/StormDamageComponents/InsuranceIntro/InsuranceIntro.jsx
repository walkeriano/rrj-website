import "./InsuranceIntro.css";
import phone from "../../../assets/cel.svg";
import triangle from "../../../assets/img/triangle-sky.jpg";

export default function InsuranceIntro() {
  return (
    <section className="storm-intro-container">
      <div className="storm-intro-title">
        <h2>
          APPROVED <span>INSURANCE CLAIM</span>
        </h2>
      </div>
      <section className="storm-items">
        <section className="storm-intro-info">
          <p>
            Renewing your roof has never been easier! In special situations such
            as natural disasters, storms or rain, the insurance covers the
            repair of the damage and we will support you throughout the approval
            process. Book a free inspection to assess the damage and start your
            insurance claim!
          </p>
          <a href="tel:5025454375" className="storm-intro-btn">
            <img src={phone} alt="call-us-button" />
            call us
          </a>
        </section>
        <section className="second-storm-column">
          <img src={triangle} alt="damage-roof" />
        </section>
        <span className="black-span-bg"></span>
        <span className="black-span-bg-responsive"></span>
      </section>
    </section>
  );
}
