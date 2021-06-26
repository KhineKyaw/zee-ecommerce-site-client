import React from "react"

import classes from "./ProductDescription.module.css"

const ProductDescription = props => {
  const { data } = props
  return (
    <div className={classes.desc}>
      <h4>Product Details</h4>
      <p>{data.details}</p>
      <h4>Specifications</h4>
      <ul className={classes.specs}>
        {data.specifications.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductDescription
