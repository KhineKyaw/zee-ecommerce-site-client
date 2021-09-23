import React from "react"

import classes from "./StoreProfileItem.module.css"
import Card from "../../UI/Card/Card"
import { Link } from "react-router-dom"
import ImageLoader from "../../UI/ImageLoader/ImageLoader"

const StoreProfileItem = props => {
  const { item } = props

  return (
    <Link to={`/store/${item.id}`}>
      <Card className={classes.card}>
        <div className={classes.item}>
          <ImageLoader
            className={classes.background}
            src={item.background}
            alt={item.name + " background"}
          />
          <ImageLoader
            className={classes.logo}
            src={item.logo}
            alt={item.name + " logo"}
          />
          <p>{item.name}</p>
        </div>
      </Card>
    </Link>
  )
}

export default StoreProfileItem
