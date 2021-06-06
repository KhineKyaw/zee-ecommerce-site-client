import React, { useContext } from "react"
import IconButton from "../../UI/IconButton/HeaderIconButton"

import classes from "./Navbar.module.css"
import NavbarItem from "./NavbarItem/NavbarItem"
import LanguageContext from "../../../context/language-context"
import LanguageSwitch from "./LanguageSwitch/LanguageSwitch"
import NavSearchBar from "./NavSearchBar/NavSearchBar"

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
        <NavbarItem active={true}>{texts.navbar["page-1"]}</NavbarItem>
        <NavbarItem>{texts.navbar["page-2"]}</NavbarItem>
        <NavbarItem>{texts.navbar["page-3"]}</NavbarItem>
      </ul>
      <div className={classes.actions}>
        <NavSearchBar placeholder='Search' autoFocus />
        <IconButton name='profile' />
        <IconButton name='bag' />
        <LanguageSwitch language={language} onClick={languageChangedHandler} />
      </div>
    </div>
  )
}

export default Navbar
