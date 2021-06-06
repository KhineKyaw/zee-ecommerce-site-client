import React from "react"
// import Button from "../../UI/Button/Button"
import ProductItem from "../ProductItem/ProductItem"

import classes from "./ProductList.module.css"

const ProductList = props => {
  return (
    <div className={classes.productList}>
      {props.data.map(item => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  )
}

export default ProductList
