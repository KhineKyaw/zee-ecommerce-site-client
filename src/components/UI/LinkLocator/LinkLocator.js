import React from "react"
import { Link } from "react-router-dom"

import classes from "./LinkLocator.module.css"
import { ReactComponent as Chevronicon } from "../SvgIcons/chevron-forward-outline.svg"

const LinkLocator = props => {
  const keys = Object.keys(props.links)
  return (
    <div className={classes.linkLocator}>
      {keys.map((item, idx) => (
        <span className={classes.linkItem} key={idx}>
          <Link to={props.links[item]} className={classes.link}>
            {item}
          </Link>
          <Chevronicon />
        </span>
      ))}
      <div className={classes.link}>{props.last}</div>
    </div>
  )
}

export default LinkLocator
