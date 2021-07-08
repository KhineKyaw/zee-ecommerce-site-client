import React, { useContext } from "react"

import classes from "./CartItemList.module.css"
import CartItem from "../CartItem/CartItem"
import Checkbox from "../../UI/Checkbox/Checkbox"
import CartContext from "../../../context/cart-context"

const CartItemList = () => {
  const { items: cartItems, selectItem } = useContext(CartContext)

  const selectItemHandler = idx => {
    selectItem(idx)
    console.log(idx)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h2>Shopping Cart ({cartItems.length})</h2>
        <Checkbox>Select All</Checkbox>
      </div>
      {cartItems.map((item, index) => (
        <CartItem onSelect={selectItemHandler} key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CartItemList
