import "./InsuranceClaim.css";
import InsuranceImgCard1 from "../../../assets/insurance-claim-1.jpg";
import InsuranceImgCard2 from "../../../assets/insurance-claim-2.jpg";
import InsuranceImgCard3 from "../../../assets/insurance-claim-3.jpg";

export default function InsuranceClaims() {
  return (
    <section className="insurance-claims-container">
      <div className="insurance-claims-tag">
        <p>ALL SERVICES INCLUDED</p>
      </div>
      <h2 className="insurance-claims-title">
        <span>Support throughout </span>the entire process
      </h2>
      <p className="insurance-claims-info">
        At RRJ Remodeling we take care of the entire process on behalf of our
        clients, from the initial submission of the claim to the successful
        conclusion of the process. Trust the experts!
      </p>
      <section className="insurance-claims-cards">
        <div className="insurance-claims-card1">
          <div className="text-claim-cards-container">
            <h4>ROOF REPAIRS</h4>
            <p>
              Your roof shields your home from harsh weather. When storm damage
              strikes, prompt repairs are essential. At RRJ Remodeling, we
              specialize in comprehensive roofing solutions. From minor repairs
              to replacements, our experienced team delivers lasting results
              with industry-leading techniques and materials, ensuring your home
              stays safe and secure.
            </p>
          </div>
          <div className="first-insurance-card-img">
            <img src={InsuranceImgCard1} alt="Imagen de ..." />
          </div>
        </div>
        <div className="insurance-claims-card2">
          <div className="text-claim-cards-container">
            <h4>SIDING</h4>
            <p>
              Your home's siding is its first impression and primary defense.
              When storm damage compromises it, RRJ Remodeling is here to
              restore it to its former glory. Our skilled technicians repair or
              replace damaged siding with precision, choosing materials that
              match your home's style while providing superior protection and
              insulation.
            </p>
          </div>
          <div className="first-insurance-card-img">
            <img src={InsuranceImgCard2} alt="Imagen de ..." />
          </div>
        </div>
        <div className="insurance-claims-card3">
          <div className="text-claim-cards-container">
            <h4>GUTTERS</h4>
            <p>
              Gutters are crucial for protecting your home from water damage. At
              RRJ Remodeling, we excel in repairing and replacing damaged
              gutters. With top-quality materials and precise craftsmanship, we
              ensure optimal performance and durability. Trust us to keep your
              gutters in optimal conditions.
            </p>
          </div>
          <div className="first-insurance-card-img">
            <img src={InsuranceImgCard3} alt="Imagen de ..." />
          </div>
        </div>
      </section>
    </section>
  );
}
