import React from "react"

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  selectAll: false,
  addItem: item => {},
  removeItem: id => {},
  selectItem: id => {},
  selectAllItem: () => {}
})

export default CartContext
