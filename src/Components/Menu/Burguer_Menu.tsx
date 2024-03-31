import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Burguer_MenuCSS.css";

const BurguerMenu = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const closeMenu = () => {
    setBurgerClass("burger-bar unclicked");
    setMenuClass("menu hidden");
    setIsMenuClicked(false);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className="menu-links">
          <Link to="/home" className="links-home" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/table" className="links-table" onClick={closeMenu}>
            Tabla de Posiciones
          </Link>
          <Link to="/teams" className="links-teams" onClick={closeMenu}>
            Equipos
          </Link>
          <Link to="/players" className="links-players" onClick={closeMenu}>
            Jugadores
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurguerMenu;
