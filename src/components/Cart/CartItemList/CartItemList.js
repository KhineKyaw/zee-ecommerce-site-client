import React, { useContext } from "react"

import classes from "./CartItemList.module.css"
import CartItem from "../CartItem/CartItem"
import Checkbox from "../../UI/Checkbox/Checkbox"
import CartContext from "../../../context/cart-context"

const CartItemList = () => {
  const {
    items: cartItems,
    selectAll,
    addItem,
    removeItem,
    selectItem,
    selectAllItem,
    deleteItem
  } = useContext(CartContext)

  const onSelectItemHandler = id => {
    selectItem(id)
  }

  const onSelectAllHandler = () => {
    selectAllItem()
  }

  const onDeleteItemHandler = id => {
    deleteItem(id)
  }

  const onRemoveItemHandler = id => {
    removeItem(id)
  }

  const renderItem = item => (
    <CartItem
      onAdd={addItem}
      onSubtract={onRemoveItemHandler}
      onSelect={onSelectItemHandler}
      onDelete={onDeleteItemHandler}
      key={item.id}
      item={item}
    />
  )

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h2>Shopping Cart ({cartItems.length})</h2>
        <Checkbox onClick={onSelectAllHandler} checked={selectAll}>
          Select All
        </Checkbox>
      </div>
      {cartItems.length ? (
        cartItems.map(renderItem)
      ) : (
        <div className={classes.empty}>Shopping cart is Empty!</div>
      )}
    </div>
  )
}

export default CartItemList
