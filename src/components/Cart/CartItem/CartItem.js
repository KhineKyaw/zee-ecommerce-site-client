import React from "react"
import { Link } from "react-router-dom"

import classes from "./CartItem.module.css"
import Checkbox from "../../UI/Checkbox/Checkbox"

const LinkImage = props => {
  return (
    <Link
      to={props.to}
      className={classes.imagelink}
      style={{
        backgroundImage: `url("${props.imageUrl}")`
      }}></Link>
  )
}

const CartItem = props => {
  const { item } = props

  const onSelect = () => {
    props.onSelect(item.id)
  }

  const onDelete = () => {
    props.onDelete(item.id)
  }

  return (
    <div className={classes.cartitem}>
      <LinkImage to={`/product/${item.id}`} imageUrl={item.imageUrl} />
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
        <div>Amount: {item.amount} </div>
        <div className={classes.selectdelete}>
          <Checkbox checked={item.checked} onClick={onSelect} />
          <button onClick={onDelete} className={classes.delete}>
            <ion-icon name='trash-outline'></ion-icon>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
