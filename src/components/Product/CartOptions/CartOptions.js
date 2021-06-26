import React from "react"

import classes from "./CartOptions.module.css"

const CartOptions = props => {
  const { data } = props
  return (
    <div className={classes.container}>
      <h3>{data.title}</h3>
    </div>
  )
}

export default CartOptions
