import React from "react"

import Layout from "../hoc/Layout"
import CartItemList from "../components/Cart/CartItemList/CartItemList"
import OrderSummary from "../components/Cart/OrderSummary/OrderSummary"
import classes from "./Cart.module.css"

const Cart = () => {
  return (
    <Layout>
      <div className={classes.sectionrow}>
        <CartItemList />
        <OrderSummary />
      </div>
    </Layout>
  )
}

export default Cart
