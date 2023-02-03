import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function NavBar() {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const bgDiv = useRef("");
  const linksActive = useRef("");

  const handleClick = () => {
    bgDiv.current.classList.toggle("active");
    linksActive.current.classList.toggle("d-flex");
    setClicked(!clicked);
  };

  const changeBg = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <nav className="navbar-container">
      <div className={navbar ? "navbar-bg" : "navbar-nobg"}>
        <div className="left">
          <a href="/">
            <motion.h2 whileHover={{ scale: 1.1 }} className="logo">
              SPA
            </motion.h2>
          </a>
        </div>
        <div className="right">
          <div className="links">
            <a className={navbar ? "text-secondary" : "text-white"} href="/">
              Inicio
            </a>
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="/nosotros"
            >
              Nosotros
            </a>
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="/tratamientos"
            >
              Tratamientos
            </a>
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="/spa-relax"
            >
              Spa de Relax
            </a>
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="/tecnologia"
            >
              Tecnología
            </a>
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="/electro-fitness"
            >
              Electrofitness
            </a>
            <a
              className={navbar ? "text-secondary" : "text-white"}
              href="#contacto"
            >
              Contacto
            </a>
          </div>
          <i
            type="button"
            onClick={handleClick}
            className={`bi ${navbar ? "text-dark" : "text-white "} ${
              clicked ? "bi-x text-white" : "bi-list"
            }`}
          ></i>
        </div>
        <div ref={bgDiv} className="bg-div">
          <div ref={linksActive} className="links-active">
            <a href="/">Inicio</a>
            <a href="/nosotros">Nosotros</a>
            <a href="/tratamientos">Tratamientos</a>
            <a href="/spa-relax">Spa de Relax</a>
            <a href="/tecnologia">Tecnología</a>
            <a href="/electro-fitness">Electrofitness</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
