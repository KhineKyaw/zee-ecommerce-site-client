import React, { useReducer } from "react"
import CartContext from "./cart-context"

const ADD = "ADD"
const REMOVE = "REMOVE"
const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  // ADD
  if (action.type === ADD) {
    const itemId = state.items.findIndex(i => i.id === action.item.id)
    const existingCartItem = state.items[itemId]

    if (existingCartItem) {
      let temp = [...state.items]
      temp[itemId] = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      return {
        items: temp,
        totalAmount: state.totalAmount + action.item.price * action.item.amount
      }
    }

    return {
      items: [...state.items, action.item],
      totalAmount: state.totalAmount + action.item.price * action.item.amount
    }
  }
  // Remove
  if (action.type === REMOVE) {
    const itemId = state.items.findIndex(i => i.id === action.id)
    const existingCartItem = state.items[itemId]

    let tempItems = [...state.items]
    if (existingCartItem.amount > 1) {
      tempItems[itemId] = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1
      }
    } else {
      tempItems.splice(itemId, 1)
    }
    return {
      items: tempItems,
      totalAmount: state.totalAmount - existingCartItem.price
    }
  }
  return defaultCartState
}

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: ADD, item })
  }

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: REMOVE, id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
