import "./EmergencyIntro.css";

import haunted from "../../../assets/img/haunted-house.jpg";
import women from "../../../assets/img/woman.jpg";

export default function EmergencyIntro() {
  return (
    <section className="emergency-container">
      <img className="first-emergency-img" src={women} alt="woman-picture" />

      <article className="intro-items-container">
        <div className="emergency-title">
          <h2>
            BECAUSE WE CARE <br />
            <span> ABOUT YOU</span>
          </h2>
        </div>

        <div className="emergency-intro-info">
          {/* <h3>HOW CAN WE HELP YOU?</h3> */}
          <h4>
            RRJ Construction <span>& remodeling</span>
          </h4>
          <p>
            Don't let finances hold back your dreams. With RRJ Remodeling, you
            can confidently pursue your home or business improvements
          </p>
          <a href="">SEND RESERVE</a>
        </div>
      </article>
      
      <img className="second-emergency-img" src={haunted} alt="haunted-house" />
    </section>
  );
}
