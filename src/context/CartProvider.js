import React, { useReducer } from "react"
import CartContext from "./cart-context"

const ADD = "ADD"
const REMOVE = "REMOVE"
const SELECT = "SELECT"
const DELETE = "DELETE"
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
      const items = state.items.map(item => {
        if (item.id === action.item.id)
          return { ...item, amount: item.amount + 1 }
        return item
      })
      return {
        ...state,
        items
      }
    }

    return {
      ...state,
      items: [...state.items, { ...action.item, amount: 1, checked: false }]
    }
  }
  // Remove
  if (action.type === REMOVE) {
  }

  // Delete
  if (action.type === DELETE) {
    return { ...state, item: state.items.filter(item => item.id !== action.id) }
  }

  // Select
  if (action.type === SELECT) {
    const items = state.items.map(item => ({
      ...item,
      checked: item.id === action.id ? !item.checked : item.checked
    }))
    const total = items.reduce(
      (obj, item) => obj + item.checked * item.price * item.amount,
      0
    )
    return { ...state, totalAmount: total, items }
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

  const deleteItemFromCartHandler = id => {
    dispatchCartAction({ type: DELETE, id })
  }

  const selectItemFromCartHandler = id => {
    dispatchCartAction({ type: SELECT, id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    deleteItem: deleteItemFromCartHandler,
    selectItem: selectItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
