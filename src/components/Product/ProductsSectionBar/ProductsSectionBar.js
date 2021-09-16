import React from "react"

import classes from "./ProductsSectionBar.module.css"

const ProductsSectionBar = props => {
  const className = [
    props.type && props.type === "mid" ? classes.section_mid : classes.section
  ]
  if (props.className) className.push(props.className)

  if (props.type && props.type === "mid") {
    return (
      <div className={className.join(" ")}>
        <h1>{props.title}</h1>
      </div>
    )
  }

  return (
    <div className={className.join(" ")}>
      <h1>{props.title}</h1>
      <p>{props.subTitle}</p>
    </div>
  )
}

export default ProductsSectionBar
