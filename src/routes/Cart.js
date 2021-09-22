import React, { useContext } from "react"

import Layout from "../hoc/Layout"
import CartItemList from "../components/Cart/CartItemList/CartItemList"
import OrderSummary from "../components/Cart/OrderSummary/OrderSummary"
import classes from "./Cart.module.css"
import CartContext from "../context/cart-context"
import EmptyCartSvg from "../assets/svg/empty_cart.svg"
import { Link } from "react-router-dom"

const cartEmpty = (
  <div className={classes.empty}>
    <div style={{ backgroundImage: `url('${EmptyCartSvg}')` }}></div>
    <p>Your Shopping Cart is empty</p>
    <Link to='/'>Start shopping now!</Link>
  </div>
)

const Cart = () => {
  const { items } = useContext(CartContext)

  const content =
    items && items.length ? (
      <div className={classes.sectionrow}>
        <div className={classes.sectioncolumn}>
          <CartItemList />
        </div>
        <OrderSummary />
      </div>
    ) : (
      cartEmpty
    )

  return <Layout>{content}</Layout>
}

export default Cart
