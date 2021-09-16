import React from "react"

import Layout from "../hoc/Layout"
import CartItemList from "../components/Cart/CartItemList/CartItemList"
import OrderSummary from "../components/Cart/OrderSummary/OrderSummary"
import classes from "./Cart.module.css"
import Recommendations from "../components/Product/Recommendations/Recommendations"
import PaymentMethods from "../components/Cart/PaymentMethods/PaymentMethods"

const Cart = () => {
  return (
    <Layout>
      <div className={classes.sectionrow}>
        <div className={classes.sectioncolumn}>
          <CartItemList />
          <PaymentMethods />
        </div>
        <OrderSummary />
      </div>
      {/* <Recommendations /> */}
    </Layout>
  )
}

export default Cart
