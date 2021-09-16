import React, { useContext } from "react";
import { Link } from "react-router-dom";
import IconButton from "../../UI/HeaderIconButton/HeaderIconButton";

import classes from "./Navbar.module.css";
import NavbarItem from "./NavbarItem/NavbarItem";
import LanguageContext from "../../../context/language-context";
import LanguageSwitch from "./LanguageSwitch/LanguageSwitch";
import NavSearchBar from "./NavSearchBar/NavSearchBar";
import Logo from "./Logo/Logo";
import CartContext from "../../../context/cart-context";

const Navbar = () => {
  const {
    languageDict: texts,
    changeLanguage,
    language,
  } = useContext(LanguageContext);

  const cartState = useContext(CartContext);
  const navbarClasses = [classes.navbar, classes.sticky];

  const languageChangedHandler = () => {
    changeLanguage(language === "en" ? "mm" : "en");
  };

  return (
    <>
      <div className={classes.navbarGhost}></div>
      <div className={navbarClasses.join(" ")}>
        <div className={classes.navbar_inner}>
          <Logo />
          <ul className={classes.pages}>
            <NavbarItem active={true} to="/home">
              {texts.navbar["home"]}
            </NavbarItem>
            <NavbarItem to="/products">{texts.navbar["products"]}</NavbarItem>
            <NavbarItem to="/stores">{texts.navbar["stores"]}</NavbarItem>
          </ul>
          <div className={classes.actions}>
            <NavSearchBar placeholder="Search" autoFocus />
            <IconButton name="profile" />
            <Link to="/shopcart">
              <IconButton
                showNotification={cartState.items.length}
                name="bag"
              />
            </Link>
            <LanguageSwitch
              language={language}
              onClick={languageChangedHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
