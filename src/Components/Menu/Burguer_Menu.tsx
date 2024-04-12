import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Burguer_MenuCSS.css";
import { MENU_ITEMS } from "./Strings_NavMenu";

const BurguerMenu = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

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
    <div style={{ width: "100%", height: "50%" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>

      <div className={menuClass}>
        <div className="menu-links">
          <Link to="/home" className="links-to-home" onClick={closeMenu}>
            {MENU_ITEMS.HOME}
          </Link>
          <Link to="/table" className="links-to-table" onClick={closeMenu}>
            {MENU_ITEMS.TABLE}
          </Link>
          <Link to="/teams" className="links-to-teams" onClick={closeMenu}>
            {MENU_ITEMS.TEAMS}
          </Link>
          <Link to="/players" className="links-to-players" onClick={closeMenu}>
            {MENU_ITEMS.PLAYERS}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurguerMenu;
