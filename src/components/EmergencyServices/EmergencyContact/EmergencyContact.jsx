import "./EmergencyContact.css";

import React, { useRef, useState } from "react";
import cel from "../../../assets/cel.svg";
import user from "../../../assets/user.svg";
import mail from "../../../assets/mail.svg";
import check from "../../../assets/icons/circle-check-regular.svg";
import financyBg from "../../../assets/benefits-two.jpg";

function EmergencyContact() {
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
    <section id="emergency-contact" className="financy-container">
      <div className="financing-container">
        <div className="title-parraf-financy-form">
          <h3>RRJ EMERGENCY SERVICES</h3>
          <p>
            Please fill out the emergency services form below so we can provide
            you with the necessary assistance quickly and effectively. Your
            safety is our priority!
          </p>
        </div>
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="financy-form-container"
        >
          <label htmlFor="name">
            <div className="box-icon-financy-form">
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
            <div className="box-icon-financy-form">
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
            <div className="box-icon-financy-form">
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
          <button type="submit">Send</button>
          {isSuccess && (
            <div className="success-message">
              <img src={check} alt="" />
              Form submitted successfully!
            </div>
          )}
        </form>
      </div>
      <img className="financy-form-bg" src={financyBg} alt="" />
    </section>
  );
}

export default EmergencyContact;
