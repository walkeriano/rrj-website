import React, { useRef, useState } from "react";
import "./FreeInspectionContact.css";
import cel from "../../assets/cel.svg";
import user from "../../assets/user.svg";
import mail from "../../assets/mail.svg";
import freecastor from "../../assets/castor.png";

function FreeInspectionContact() {
 
  return(
   <section className="free-inspection-container">
    <div className="free-container">
    <div className="first-column-contact">
      <div className="black-bg-box"></div>
      <h2 className="free-title-box">
        <span>Get a free</span>
        <span>Inspection</span>
      </h2>
      <h3 className="text-explication">
        Get a free inspection anytime, any hour. Call us!
      </h3>
      <img className="castor-img" src={freecastor} alt="" />
    </div>
    <div className="second-column-contact">
    <form className="form-container">
      <label htmlFor="service">
        <div>
          <img src="" alt="" />
        </div>
        <select name="" id="">
          <option value="Commercial Roofing">Commercial Roofing</option>
          <option value="Residencial Roofing">Residencial Roofing</option>
          <option value="Emergency Roofing">Emergency Roofing</option>
          <option value="Roof Installation">Roof Installation</option>
          <option value="Roof Repairs">Roof Repairs</option>
          <option value="Roof Inspections">Roof Inspections</option>
          <option value="Siding">Siding</option>
          <option value="Remodeling">Remodeling</option>
          <option value="Painting">Painting</option>
        </select>
      </label>
      <label htmlFor="name">
        <div className="box-icon-form">
          <img src={user} alt="" />
        </div>
        <input type="text" placeholder="Name" id="name" name="name" autoComplete="name"/>
      </label>
      <label htmlFor="number">
        <div className="box-icon-form">
          <img src={cel} alt="" />
        </div>
        <input type="number" placeholder="Phone" id="number" name="number" autoComplete="tel"/>
      </label>
      <label htmlFor="email">
        <div className="box-icon-form">
          <img src={mail} alt="" />
        </div>
        <input type="email" placeholder="Email" id="email" name="email" autoComplete="email"/>
      </label>
      <button type="submit">Send Reserve</button>
    </form>
    </div>
    </div>
   </section>
  );
}

export default FreeInspectionContact;
