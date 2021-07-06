import React from "react"
import { Link } from "react-router-dom"

import classes from "./CartItem.module.css"

const CartItem = props => {
  const { item } = props
  return (
    <div className={classes.cartitem}>
      <Link
        to={`/product/${item.id}`}
        className={classes.imagelink}
        style={{
          backgroundImage: `url("${item.imageUrl}")`
        }}></Link>
      <div className={classes.content}>
        <Link className={classes.title} to={`/product/${item.id}`}>
          {item.title}
        </Link>
        <div className={classes.attr}>
          <dl>
            <dt>Color:</dt>
            <dd>Purple</dd>
            <dt>Size:</dt>
            <dd>XL</dd>
          </dl>
        </div>
        <div className={classes.price}>KS {item.price}</div>
      </div>
      <div className={classes.actions}>
        <div>picker</div>
        <div className={classes.selectdelete}>
          <input type='checkbox' />
          <button>DE</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
