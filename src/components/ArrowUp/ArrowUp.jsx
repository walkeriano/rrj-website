import React, { useState, useEffect } from "react";
import "./ArrowUp.css";
import  Arrowup from "../../assets/arrow.svg";

export default function ArrowUp() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const showThreshold = documentHeight - windowHeight - 4200; // Ajusta este valor según tu preferencia

      setShowButton(scrollY > showThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el evento de desplazamiento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`arrow-up-button ${showButton ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      <img className="arrowup-img" src={Arrowup}/>
    </button>
  );
}
