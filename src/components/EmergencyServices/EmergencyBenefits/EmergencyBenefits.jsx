import "./EmergencyBenefits.css";

import fastCar from "../../../assets/icons/truck.svg";
import hands from "../../../assets/icons/hands.svg";
import researcher from "../../../assets/icons/researcher.svg";
import specialist from "../../../assets/icons/specialist.svg";

export default function EmergencyBenefits() {
  return (
    <section className="emergency-benefits-container">
      <div className="emergency-intro">
        <h3>
          YOU CAN <span>TRUST US</span>
        </h3>
      </div>

      <section className="card-benefits-section">

        <div className="card-benefits-container">
          <span className="first-span"></span>
            <div className="card-items-container">
              <img src={fastCar} alt="" />
              <h6>titulo del benefit</h6>
              <p>
                Don't let finances hold back your dreams. With RRJ Remodeling.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          <span className="second-span"></span>
        </div>

        <div className="card-benefits-container">
          <span className="first-span"></span>
            <div className="card-items-container">
              <img src={hands} alt="" />
              <h6>titulo del benefit</h6>
              <p>
                Don't let finances hold back your dreams. With RRJ Remodeling.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          <span className="second-span"></span>
        </div>

        <div className="card-benefits-container">
          <span className="first-span"></span>
            <div className="card-items-container">
              <img src={researcher} alt="" />
              <h6>titulo del benefit</h6>
              <p>
                Don't let finances hold back your dreams. With RRJ Remodeling.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          <span className="second-span"></span>
        </div>

        <div className="card-benefits-container">
          <span className="first-span"></span>
            <div className="card-items-container">
              <img src={specialist} alt="" />
              <h6>ADVICE FROM A SPECIALIST</h6>
              <p>
                Don't let finances hold back your dreams. With RRJ Remodeling.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          <span className="second-span"></span>
        </div>

      </section>
    </section>
  );
}
