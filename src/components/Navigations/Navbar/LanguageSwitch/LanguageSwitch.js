import React from "react"

import classes from "./LanguageSwitch.module.css"
import MM from "../../../../assets/svg/mm.svg"
import EN from "../../../../assets/svg/gb.svg"

const LanguageSwitch = props => {
  const img = props.language === "en" ? MM : EN

  return (
    <button
      {...props}
      className={classes.switch}
      style={{
        backgroundImage: `url(${img})`
      }}></button>
  )
}

export default LanguageSwitch
