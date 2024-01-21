import "./Header.css";
import logo from "../../assets/logo-rrj.svg";
import { Link } from "react-router-dom";

export default function Header() {
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
    </header>
  );
}
