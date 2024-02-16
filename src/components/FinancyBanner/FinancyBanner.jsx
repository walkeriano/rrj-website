import "./FinancyBanner.css";
import { Link } from "react-router-dom";

export default function FinancyBanner() {
  return (
    <div className="financy-banner-container">
      <div className="financy-title-parraf">
        <h2 className="financy-title">
          FINANCY <br />
          <span>AVAILABLE</span>
        </h2>
        <p>Financing Available: Your pathway to success. Explore options.</p>
      </div>

      <div className="financy-btn-container">
        <Link to={"/financy"} className="financy-btn"> see more </Link>
      </div>
    </div>
  );
}
