import React from "react"

import classes from "./StoreProfileItem.module.css"
import Card from "../../UI/Card/Card"

const StoreProfileItem = props => {
  const { item } = props
  return (
    <Card
      className={classes.card}
      style={{
        width: props.childWidth || 200,
        marginRight: props.margin
      }}>
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
  )
}

export default StoreProfileItem
