import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import IconButton from "../../UI/IconButton/IconButton"

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
  const navbarClasses = [classes.navbar, classes.sticky]

  const languageChangedHandler = () => {
    changeLanguage(language === "en" ? "mm" : "en")
  }

  return (
    <>
      <div className={classes.navbarGhost}></div>
      <div className={navbarClasses.join(" ")}>
        <div className={classes.navbar_inner}>
          <Logo />
          <ul className={classes.pages}>
            <NavbarItem to='' exact>{texts.navbar["home"]}</NavbarItem>
            <NavbarItem to='/products'>{texts.navbar["products"]}</NavbarItem>
            <NavbarItem to='/stores'>{texts.navbar["stores"]}</NavbarItem>
          </ul>
          <div className={classes.actions}>
            <NavSearchBar placeholder='Search' autoFocus />
            <NavLink className={classes.navlink} to='person'> 
              <IconButton name='person-outline' variant='outline' />
            </NavLink>
            <NavLink 
              className={`${classes.navlink} ${cartState.items.length && classes.noti}`}
              activeClassName={classes["active-shopping-cart"]}
              to='/shopcart'>
              <IconButton
                showNotification={cartState.items.length}
                variant='outline'
                name='bag-outline'
              />
            </NavLink>
            <LanguageSwitch
              language={language}
              onClick={languageChangedHandler}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
