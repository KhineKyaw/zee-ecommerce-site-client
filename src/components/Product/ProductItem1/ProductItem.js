import React, { useContext } from "react"
import { withRouter } from "react-router-dom"

import classes from "./ProductItem.module.css"
import Card from "../../UI/Card/Card"
import AddToCartButton from "../../Cart/AddToCartButton/AddToCartButton"
import CartContext from "../../../context/cart-context"

const ProductItem = props => {
  const { item } = props
  const { addItem } = useContext(CartContext)
  const className = [classes.card]

  if (props.className) className.push(props.className)

  const toProductDetail = () => {
    props.history.push({
      pathname: "/product/" + item.id
    })
  }

  const onAddToCart = () => {
    addItem(item)
  }

  return (
    <Card className={className.join(" ")}>
      <div className={classes.item}>
        <div onClick={toProductDetail} className={classes.imageContainer}>
          <img src={item.imageUrl} alt={item.title + "image"}></img>
        </div>
        <div className={classes.itemInfo}>
          <p onClick={toProductDetail}>{item.title}</p>
          <p>Ks {item.price}</p>
          <AddToCartButton onClick={onAddToCart} />
        </div>
      </div>
    </Card>
  )
}

export default withRouter(ProductItem)
