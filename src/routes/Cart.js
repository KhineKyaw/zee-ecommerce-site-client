import React from "react"

import Layout from "../hoc/Layout"
import CartItemList from "../components/Cart/CartItemList/CartItemList"

const Cart = () => {
  return (
    <Layout>
      <h1>Shopping Cart</h1>
      <CartItemList />
    </Layout>
  )
}

export default Cart
