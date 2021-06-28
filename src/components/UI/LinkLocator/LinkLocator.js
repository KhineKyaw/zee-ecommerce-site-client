import React from "react"

import classes from "./LinkLocator.module.css"
import { ReactComponent as Chevronicon } from "../SvgIcons/chevron-forward-outline.svg"

const LinkLocator = props => {
  const end = props.links.length

  return (
    <div className={classes.linkLocator}>
      {props.links.map((item, idx) => (
        <span className={classes.linkItem} key={idx}>
          <div className={classes.link}>{item}</div>
          {end === idx + 1 ? null : <Chevronicon />}
        </span>
      ))}
    </div>
  )
}

export default LinkLocator
