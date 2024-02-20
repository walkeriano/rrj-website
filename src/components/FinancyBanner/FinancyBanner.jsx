import "./FinancyBanner.css";
import { Link } from "react-router-dom";
import financyBannerBg from "../../assets/financy-campaña-portada.jpg"

export default function FinancyBanner() {
  return (
    <div className="financy-banner-container">
      <div className="financy-title-parraf">
        <h2 className="financy-banner-title">
          FINANCY <br />
          <span>AVAILABLE</span>
        </h2>
        <p>Financing Available: Your pathway to success. Explore options.</p>
        <Link to={"/financy"} className="financy-btn"> see more </Link>
      </div>
      <img className="financy-banner-container-img" src={financyBannerBg} alt="" />
    </div>
  );
}
