import React from "react"
import { Link } from "react-router-dom"

import classes from "./Logo.module.css"
import { ReactComponent as LogoIcon } from "../../../../assets/logo/logo.svg"

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Link to='/' className={classes.logo_container}>
        <LogoIcon />
      </Link>
    </div>
  )
}

export default Logo
