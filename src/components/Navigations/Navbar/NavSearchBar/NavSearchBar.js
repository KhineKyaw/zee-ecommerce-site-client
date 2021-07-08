import React, { useState } from "react"

import classes from "./NavSearchBar.module.css"

import HeaderIconButton from "../../../UI/HeaderIconButton/HeaderIconButton"
import SearchBox from "../../../UI/SearchBox/SearchBox"

const NavSearchBar = props => {
  const [showSearchBox, setShowSearchBox] = useState(false)

  const toggleSearchBoxHandler = () => {
    setShowSearchBox(prev => !prev)
  }

  return (
    <span className={classes.searchbar}>
      {showSearchBox ? <SearchBox {...props} /> : null}
      <HeaderIconButton onClick={toggleSearchBoxHandler} name='search' />
    </span>
  )
}

export default NavSearchBar
