import "./StormIntro.css";
import phone from "../../../assets/cel.svg";
import triangle from "../../../assets/img/triangle-sky.jpg";

export default function StormIntro() {
  return (
    <section className="storm-intro-container">
      <div className="storm-intro-title">
        <h2>
          <span>STORM DAMAGE </span>SERVICES
        </h2>
      </div>
      <section className="storm-items">
        <div className="storm-intro-info">
          <div className="info-storm-cont">
            <p>
              At RRJ Remodeling, we understand that facing damage to your home
              due to events like storms can be overwhelming. That's why we offer
              comprehensive insurance claims management services.
            </p>
            <br />
            <p>
              When a client experiences property damage, whether it's from a
              storm, wind, hail, or other events covered by their insurance
              policy, the first step is to contact RRJ Remodeling. Once we
              receive the notification, our team of experts springs into action
              to assess the damage and work on behalf of the client to initiate
              the claims process with their insurance company.
            </p>
            <br />
            <p>
              At RRJ Remodeling, we take pride in providing personalized and
              transparent service every step of the way. We keep our clients
              informed and updated throughout the claims process, giving them
              peace of mind knowing they're in good hands.
            </p>
            <button className="storm-intro-btn">
              <img src={phone} alt="" />
              call us
            </button>
          </div>
          <span className="black-span-bg"></span>
        </div>
        <aside className="second-storm-column">
          <img src={triangle} alt="" />
        </aside>
        <span className="black-span-bg-responsive"></span>
      </section>
    </section>
  );
}
