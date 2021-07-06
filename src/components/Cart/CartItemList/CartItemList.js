import React from "react"

import classes from "./CartItemList.module.css"
import CartItem from "../CartItem/CartItem"
import getProducts from "../../../api/getProducts"

const CartItemList = () => {
  const temp = getProducts().slice(0, 4)

  return (
    <div className={classes.wrapper}>
      {temp.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CartItemList
