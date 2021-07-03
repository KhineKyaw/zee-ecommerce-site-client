import React, { useContext } from "react"
import IconButton from "../../UI/IconButton/HeaderIconButton"

import classes from "./Navbar.module.css"
import NavbarItem from "./NavbarItem/NavbarItem"
import LanguageContext from "../../../context/language-context"
import LanguageSwitch from "./LanguageSwitch/LanguageSwitch"
import NavSearchBar from "./NavSearchBar/NavSearchBar"
import Logo from "./Logo/Logo"
import CartContext from "../../../context/cart-context"

const Navbar = () => {
  const {
    languageDict: texts,
    changeLanguage,
    language
  } = useContext(LanguageContext)

  const cartState = useContext(CartContext)

  const languageChangedHandler = () => {
    changeLanguage(language === "en" ? "mm" : "en")
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar_inner}>
        <Logo />
        <ul className={classes.pages}>
          <NavbarItem active={true}>{texts.navbar["page-1"]}</NavbarItem>
          <NavbarItem>{texts.navbar["page-2"]}</NavbarItem>
          <NavbarItem>{texts.navbar["page-3"]}</NavbarItem>
        </ul>
        <div className={classes.actions}>
          <NavSearchBar placeholder='Search' autoFocus />
          <IconButton name='profile' />
          <IconButton showNotification={cartState.items.length} name='bag' />
          <LanguageSwitch
            language={language}
            onClick={languageChangedHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
