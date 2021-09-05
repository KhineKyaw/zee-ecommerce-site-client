import React from "react"

import classes from "./ItemList.module.css"

const ItemList = props => {
  return (
    <div className={classes.itemlist}>
      {props.data.map(item => {
        return (
          <div className={classes.item} key={item.id}>
            <props.renderItem item={item} />
          </div>
        )
      })}
    </div>
  )
}

export default ItemList
