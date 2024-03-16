import "./InsuranceContact.css";
import phone from "../../../assets/cel.svg";
import React, { useRef, useState } from "react";
import cel from "../../../assets/cel.svg";
import user from "../../../assets/user.svg";
import mail from "../../../assets/mail.svg";
import check from "../../../assets/icons/circle-check-regular.svg";
import formBackground from "../../../assets/form-background.png";

export default function InsuranceContact() {
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
    <section className="insurance-contact">
      <section className="contact-banner">
        <div className="banner-text">
          <h2>
            NEED MORE INFORMATION?
            <br /> <span>HAVE AN EMERGENCY?</span>
          </h2>
        </div>
        <div className="banner-button">
          <a href="tel:5025454375" className="call-us-button">
            <img src={phone} alt="Call Us Button" />
            CALL US
          </a>
        </div>
      </section>
      <br />
      <section className="contacting-container">
        <div className="contact-container">
          <div className="title-parraf-contact-form">
            <h3>SCHEDULE AN APPOINTMENT</h3>
            <p>
              Contact us anytime. We are available 24/7 via email or telephone .
            </p>
          </div>
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="contact-form-container"
          >
            <label htmlFor="name">
              <div className="box-icon-contact-form">
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
              <div className="box-icon-contact-form">
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
              <div className="box-icon-contact-form">
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
            <button type="submit">SEND</button>
            {isSuccess && (
              <div className="success-message">
                <img src={check} alt="" />
                Form submitted successfully!
              </div>
            )}
          </form>
        </div>

        <img className="contact-form-bg" src={formBackground} alt="" />
      </section>
    </section>
  );
}
