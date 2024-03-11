import "./InsuranceClaim.css";
import InsuranceImgCard1 from "../../../assets/insurance-claim-1.jpg";
import InsuranceImgCard2 from "../../../assets/insurance-claim-2.jpg";
import InsuranceImgCard3 from "../../../assets/insurance-claim-3.jpg";

export default function InsuranceClaims() {
  return (
    <section className="insurance-claims-container">
      <div className="insurance-claims-title">
        <h2>
          <span>INSURANCE</span> CLAIMS
        </h2>
      </div>
      <div className="insurance-claims-text">
        <p>
          It is the process by which a client affected by damage to their
          property covered by their insurance policy contacts their service
          provider to request compensation. At RRJ Remodeling, we handle the
          entire process on behalf of our clients, from the initial submission
          of the claim to the successful conclusion of the process.
        </p>
      </div>
      <div className="insurance-claims-tag">
        <p>HOW CAN WE HELP?</p>
      </div>
      <section className="insurance-claims-cards">
        <div className="insurance-claims-card1">
          <p>
            What is an insurance claim? It is the process by which a client
            affected by damage to their property covered by their insurance
            policy contacts their service provider to request compensation. At
            RRJ Remodeling, we handle the entire process on behalf of our
            clients, from the initial submission of the claim to the successful
            conclusion of the process.
          </p>
          <img src={InsuranceImgCard1} alt="Imagen de ..." />
        </div>
        <div className="insurance-claims-card2">
          <p>
            When you trust RRJ Remodeling to handle your insurance claim, you
            can be assured that your property will be restored to its original
            state quickly and efficiently. Our commitment is to ensure that our
            clients receive the best possible service and return to enjoying the
            safety and comfort of their home as soon as possible.
          </p>
          <img src={InsuranceImgCard2} alt="Imagen de ..." />
        </div>
        <div className="insurance-claims-card3">
          <p>
            At RRJ Remodeling, we're here to help you overcome any challenge
            your home may face. Trust us to handle your insurance claims and
            restore peace of mind during times of crisis.
          </p>
          <img src={InsuranceImgCard3} alt="Imagen de ..." />
        </div>
      </section>
    </section>
  );
}
