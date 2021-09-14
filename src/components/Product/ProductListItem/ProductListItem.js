import React from "react"
import { Link } from "react-router-dom"

import Card from "../../UI/Card/Card"
import classes from "./ProductListItem.module.css"

const ProductListItem = props => {
  const { id, title, price, imageUrl } = props.item
  return (
    <Card className={classes.container}>
      <Link to={`product/${id}`} className={classes["image-container"]}>
        <img src={imageUrl} alt={title} />
      </Link>
      <div className={classes["inner-container"]}>
        <Link to={`product/${id}`} className={classes.title}>
          {title}
        </Link>
        <p className={classes.price}>Ks {price}</p>
      </div>
    </Card>
  )
}

export default ProductListItem
