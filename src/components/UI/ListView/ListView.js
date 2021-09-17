import React from "react"

import classes from "./ListView.module.css"

const ListView = props => {
  return (
    <div className={classes.list}>
      {props.data
        ? props.data.map(item => <props.renderItem key={item.id} item={item} />)
        : null}
    </div>
  )
}

export default ListView
