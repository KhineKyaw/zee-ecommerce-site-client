import React from "react"

import classes from "./StoreProfileItem.module.css"
import Card from "../../UI/Card/Card"
import { Link } from "react-router-dom"

const StoreProfileItem = props => {
  const { item } = props
  return (
    <Link to={`/store/${item.id}`}>
      <Card className={classes.card}>
        <div className={classes.item}>
          <div
            className={classes.background}
            style={{
              backgroundImage: `url('${item.background}')`
            }}></div>
          <img src={item.logo} alt={item.name + " logo"} />
          <p>{item.name}</p>
        </div>
      </Card>
    </Link>
  )
}

export default StoreProfileItem
