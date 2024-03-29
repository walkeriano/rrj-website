import "./CertificatesSwiper.css";

import certicate1 from "../../assets/LOGOS_RRJ-02.png";
import certicate2 from "../../assets/LOGOS_RRJ-03.png";
import certicate3 from "../../assets/LOGOS_RRJ-04.png";
import certicate4 from "../../assets/LOGOS_RRJ-01.png";
import certicate5 from "../../assets/LOGOS_RRJ-05.png";

export default function CertificatesSwiper() {
  return (
    <section className="certificate-container">
      <h2>Certified Business</h2>
      <section className="logo-certificate-container">
        <img className="certificate-logo" src={certicate1} alt="" />
        <img className="certificate-logo" src={certicate2} alt="" />
        <img className="certificate-logo" src={certicate3} alt="" />
        <img className="certificate-logo" src={certicate4} alt="" />
        <img className="certificate-logo-last " src={certicate5} alt="" />
      </section>
    </section>
  );
}
