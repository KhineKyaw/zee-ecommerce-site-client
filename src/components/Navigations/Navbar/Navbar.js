import React, { useContext } from "react"
import IconButton from "../../UI/IconButton/HeaderIconButton"

import classes from "./Navbar.module.css"
import NavbarItem from "./NavbarItem/NavbarItem"
import LanguageContext from "../../../context/language-context"

const Navbar = () => {
  const {
    languageDict: texts,
    changeLanguage,
    language
  } = useContext(LanguageContext)

  const languageChangedHandler = () => {
    changeLanguage(language === "en" ? "mm" : "en")
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>Logo</div>
      <ul className={classes.pages}>
        <NavbarItem active={true}>{texts["page-title-1"]}</NavbarItem>
        <NavbarItem>{texts["page-title-2"]}</NavbarItem>
        <NavbarItem>{texts["page-title-3"]}</NavbarItem>
      </ul>
      <div className={classes.actions}>
        <IconButton name='search' />
        <IconButton name='profile' />
        <IconButton name='bag' />
        <button onClick={languageChangedHandler}>Language</button>
      </div>
    </div>
  )
}

export default Navbar
