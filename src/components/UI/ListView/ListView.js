import React, { useEffect, useRef, useState } from "react"

import classes from "./ListView.module.css"

const ListView = props => {
  return (
    <div className={classes.list}>
      {props.data.map(i => (
        <props.renderItem key={i} item={i} />
      ))}
    </div>
  )
}

export default ListView
