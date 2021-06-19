import React from "react"

import classes from "./Logo.module.css"
import { ReactComponent as LogoIcon } from "../../../../assets/logo/logo.svg"

const Logo = () => {
  return (
    <div className={classes.logo}>
      <div className={classes.logo_container}>
        <LogoIcon />
      </div>
    </div>
  )
}

export default Logo
