import React from "react"

import classes from "./Banner.module.css"

const Banner = () => {
  return (
    <div className={classes["banner-container"]}>
      <div className={classes.prev} onClick={() => null}>&#10094;</div>
      <div className={classes.next} onClick={() => null}>&#10095;</div>
    </div>
  )
}

export default Banner
