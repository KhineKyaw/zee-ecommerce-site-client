import React from "react"
import Button from "../../UI/Button/Button"
import ProductItem from "../ProductItem/ProductItem"

import classes from "./ProductList.module.css"

const ProductList = props => {
  return (
    <div className={classes.productList}>
      {props.data.map(item => (
        <ProductItem key={item}>
          item {item}
          <Button>Button</Button>
          <Button type='outline'>Outline</Button>
        </ProductItem>
      ))}
    </div>
  )
}

export default ProductList
