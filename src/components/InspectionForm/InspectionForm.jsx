import React, { useRef, useState } from "react";
import "./InspectionForm.css";
import cel from "../../assets/cel.svg";
import user from "../../assets/user.svg";
import mail from "../../assets/mail.svg";
import check from "../../assets/icons/circle-check-regular.svg"
import freecastor from "../../assets/castor.png";
import freetitlebox from "../../assets/freeinspectionlogo.svg";
import briefcase from "../../assets/icons/briefcase-solid.svg";
import tornillos from "../../assets/tornillos.svg"

function InspectionForm() {
  const formRef = useRef(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validar que todos los campos obligatorios estén llenos
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const email = event.target.elements.email.value;

    if (!name || !number || !email) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    const formData = new FormData(event.target);

    formData.append("access_key", "f965a69f-9b89-47ec-85df-3b960d40b56b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setIsSuccess(true);
      // Resetea el formulario después de un tiempo (puedes ajustar el tiempo según tus necesidades)
      setTimeout(() => {
        formRef.current.reset();
        setIsSuccess(false);
      }, 3000);
    }
  };

  return (
    <section className="free-inspection-container">
      <div className="free-container">
        <div className="first-column-contact">
          <div className="black-bg-box"></div>
          <img className="free-title-box" src={freetitlebox} alt="" />
          <div className="text-castor-container">
            <h3 className="text-explication">
              Get a free inspection anytime, any hour. Call us!
              Get a free inspection!
            </h3>
            <img className="castor-img" src={freecastor} alt="" />
          </div>
        </div>
        <div className="second-column-contact">
          <img className="tornillos-right" src={tornillos} alt="" />
          <img className="tornillos-left " src={tornillos} alt="" />
          <form className="form-container">
            <label htmlFor="service">
              <div className="icon-form">
                <img src={briefcase} alt="" />
              </div>
              <select className="select-box" name="" id="">
                <option value="">Select an option</option>
                <option value="fisrt">Commercial Roofing</option>
                <option value="second">Residencial Roofing</option>
                <option value="third">Emergency Roofing</option>
                <option value="fourth">Roof Installation</option>
                <option value="fifth">Roof Repairs</option>
                <option value="sixth">Roof Inspections</option>
                <option value="seventh">Siding</option>
                <option value="eighth">Remodeling</option>
                <option value="ninth">Painting</option>
              </select>
            </label>
            <label htmlFor="name">
              <div className="box-icon-form">
                <img src={user} alt="" />
              </div>
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                autoComplete="name"
              />
            </label>
            <label htmlFor="number">
              <div className="box-icon-form">
                <img src={cel} alt="" />
              </div>
              <input
                type="number"
                placeholder="Phone"
                id="number"
                name="number"
                autoComplete="tel"
              />
            </label>
            <label htmlFor="email">
              <div className="box-icon-form">
                <img src={mail} alt="" />
              </div>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                autoComplete="email"
              />
            </label>
            <button type="submit">Send Reserve</button>
            {isSuccess && (
        <div className="success-message">
          <img src={check} alt="" />
          Form submitted successfully!
        </div>
      )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default InspectionForm;
