import "./Header.css";
import React, { useState } from "react";
import logo from "../../assets/logo-rrj.svg";
import logoWhite from "../../assets/logo-white-total.svg";
import burger from "../../assets/burger.svg";
import { Link } from "react-router-dom";
import SocialBtns from "../../components/SocialBtns/SocialBtns";

export default function Header() {
  const [mostrarDiv, setMostrarDiv] = useState(true);

  return (
    <header className="cont-header">
      <img className="logo-home" src={logo} alt="logo-rrj" />
      <nav className="cont-nav">
        <ul className="bar-nav">
          <li>
            <Link to={"/"} className="acces-page">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/Services"} className="acces-page">
              Services
            </Link>
          </li>
          <li>
            <Link to={"/Contact"} className="acces-page">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {mostrarDiv ? (
        <section
          className="responsive-menu"
          onClick={() => setMostrarDiv(false)}
        >
          <div className="container-nav-bar">
            <img src={burger} alt="icon-burger" />
          </div>
        </section>
      ) : (
        <section className="menu-responsive-screen">
          <div className="header-menu-responsive">
            <img src={logoWhite} alt="logo-menu" />
            <button onClick={() => setMostrarDiv(true)}>X</button>
          </div>
          <nav className="menu-responsive-nav">
            <ul>
              <li>
                <Link to={"/"} className="link-responsive">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/Services"} className="link-responsive">
                  Services
                </Link>
              </li>
              <li>
                <Link to={"/Contact"} className="link-responsive">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="container-socialbtns">
            <SocialBtns />
          </div>
          
        </section>
      )}
    </header>
  );
}
