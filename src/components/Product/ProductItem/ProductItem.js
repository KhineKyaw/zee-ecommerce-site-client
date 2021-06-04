import React from "react"

import classes from "./ProductItem.module.css"
import Card from "../../UI/Card/Card"

const ProductItem = props => {
  return <Card className={classes.item}>{props.children}</Card>
}

export default ProductItem
