import React from "react"
import { withRouter } from "react-router-dom"

import classes from "./ProductItem.module.css"
import Card from "../../UI/Card/Card"
import Button from "../../UI/Button/Button"

const ProductItem = props => {
  const { item } = props

  const toProductDetail = () => {
    props.history.push({
      pathname: "/product/" + item.id
    })
  }

  return (
    <Card
      className={classes.card}
      style={{
        marginRight: props.lastChild ? 0 : props.margin,
        marginBottom: props.margin,
        width: props.width || 210
      }}>
      <div className={classes.item}>
        <div onClick={toProductDetail} className={classes.imageContainer}>
          <img src={item.imageUrl} alt={item.title + "image"}></img>
        </div>
        <div className={classes.itemInfo}>
          <p onClick={toProductDetail}>{item.title}</p>
          <p>Ks {item.price}</p>
          <Button type='outline'>ADD TO CART</Button>
        </div>
      </div>
    </Card>
  )
}

export default withRouter(ProductItem)
