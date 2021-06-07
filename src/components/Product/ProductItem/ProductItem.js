import React from "react"

import classes from "./ProductItem.module.css"
import Card from "../../UI/Card/Card"
import Button from "../../UI/Button/Button"

const ProductItem = props => {
  const { item } = props
  // console.log(props.parentWidth)

  return (
    <Card
      className={classes.card}
      style={{
        marginRight: props.margin
      }}>
      <div className={classes.item}>
        <div className={classes.imageContainer}>
          <img src={item.imageUrl} alt={item.title + "image"}></img>
        </div>
        <div className={classes.itemInfo}>
          <p>{item.title}</p>
          <p>Ks {item.price}</p>
          <Button type='outline'>ADD TO CART</Button>
        </div>
      </div>
    </Card>
  )
}

export default ProductItem
