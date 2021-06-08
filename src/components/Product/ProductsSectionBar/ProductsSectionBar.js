import React from "react"

import classes from "./ProductsSectionBar.module.css"

const ProductsSectionBar = props => {
  if (props.type && props.type === "mid") {
    return (
      <div className={classes.section_mid}>
        <h1>{props.title}</h1>
      </div>
    )
  }

  return (
    <div className={classes.section}>
      <h1>{props.title}</h1>
      <p>{props.subTitle}</p>
    </div>
  )
}

export default ProductsSectionBar
