import React, { useContext } from "react"

import classes from "./OrderSummary.module.css"
import Button from "../../UI/Button/Button"
import CartContext from "../../../context/cart-context"

const OrderSummary = () => {
  const { totalAmount } = useContext(CartContext)

  return (
    <div className={classes.wrapper}>
      <h2>Order Summary</h2>
      <dl className={classes.section}>
        <dt>Subtotal</dt>
        <dd>KS {totalAmount || "0.00"}</dd>
      </dl>
      <dl className={classes.section}>
        <dt>Shipping</dt>
        <dd>KS 0.00</dd>
      </dl>
      <dl className={`${classes.section} ${classes.total}`}>
        <dt>Total</dt>
        <dd>KS {totalAmount || "0.00"}</dd>
      </dl>
      <Button className={classes.checkout}>CHECKOUT</Button>
    </div>
  )
}

export default OrderSummary
