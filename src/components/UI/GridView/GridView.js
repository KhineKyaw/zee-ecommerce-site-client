import React from "react"

import classes from "./GridView.module.css"

const GridView = props => {
  return (
    <div className={classes.grid}>
      {props.data
        ? props.data.map(item => <props.renderItem key={item.id} item={item} />)
        : null}
    </div>
  )
}

export default GridView
