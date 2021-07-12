import React from "react"

import classes from "./ProductDescription.module.css"

const ProductDescription = props => {
  const { data } = props
  return (
    <div className={classes.desc}>
      <h3>Product Details</h3>
      <p>{data.details}</p>
      <h3>Specifications</h3>
      <ul className={classes.specs}>
        {data.specifications
          ? data.specifications.map((item, idx) => <li key={idx}>{item}</li>)
          : null}
      </ul>
    </div>
  )
}

export default ProductDescription
