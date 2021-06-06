import React from "react"

import classes from "./ProductItem.module.css"
import Card from "../../UI/Card/Card"

const ProductItem = props => {
  const { product } = props
  return (
    <Card className={classes.item}>
      <img src={product.imageUrl}></img>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </Card>
  )
}

export default ProductItem
