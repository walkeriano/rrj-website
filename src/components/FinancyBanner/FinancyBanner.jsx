import "./FinancyBanner.css";
import { Link } from "react-router-dom";
import financyBannerBg from "../../assets/financy-banner.jpg";
import check from "../../assets/icons/circle-check-regular.svg";

export default function FinancyBanner() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Para un desplazamiento suave
    });
  };

  return (
    <section className="financy-banner-container">
      <div className="financy-title-parraf">
        <div className="financy-banner-info">
          <div className="financy-img-p">
            <img src={check} alt="" />
            <p className="financy-banner-title">Financing Available</p>
          </div>

          <hr />
          <h3>
            {" "}
            <span>"Excellent!</span>
            {""} Your Financing was approved"
          </h3>
          <p className="financy-second-parraf">
            Remodeling your house with a financing plan
          </p>
        </div>
        <div className="financy-btn">
          <Link
            to={"/financing-service"}
            onClick={scrollToTop}
            className="black-button-financy"
          >
            {" "}
            see more{" "}
          </Link>
        </div>
      </div>
      <img
        className="financy-banner-container-img"
        src={financyBannerBg}
        alt=""
      />
    </section>
  );
}
