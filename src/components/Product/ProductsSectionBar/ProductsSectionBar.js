import React from "react"

import classes from "./ProductsSectionBar.module.css"

const ProductsSectionBar = props => {
  return (
    <div className={classes.section}>
      <h1>{props.title}</h1>
      <p>{props.subTitle}</p>
    </div>
  )
}

export default ProductsSectionBar
