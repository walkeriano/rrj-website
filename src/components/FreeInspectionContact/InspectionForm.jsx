import React, { useRef, useState } from "react";
import "./InspectionForm.css";
import cel from "../../assets/cel.svg";
import user from "../../assets/user.svg";
import mail from "../../assets/mail.svg";
import freecastor from "../../assets/castor.png";
import freetitlebox from "../../assets/freeinspectionlogo.svg"
import briefcase from "../../assets/icons/briefcase-solid.svg"

function InspectionForm() {
 
  return(
   <section className="free-inspection-container">
    <div className="free-container">
    <div className="first-column-contact">
      <div className="black-bg-box"></div>
      <img className="free-title-box" src={freetitlebox} alt="" />
      <h3 className="text-explication">
        Get a free inspection anytime, any hour. Call us!
      </h3>
      <img className="castor-img" src={freecastor} alt="" />
    </div>
    <div className="second-column-contact">
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

export default InspectionForm;
