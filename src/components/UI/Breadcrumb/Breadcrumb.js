import React from "react"
import { Link } from "react-router-dom"

import classes from "./Breadcrumb.module.css"
import { ReactComponent as Chevronicon } from "../SvgIcons/chevron-forward-outline.svg"

const Breadcrumb = props => {
  const keys = Object.keys(props.links)
  return (
    <div className={classes.Breadcrumb}>
      {keys.map((item, idx) => (
        <span className={classes.linkItem} key={idx}>
          <Link to={props.links[item]} className={classes.link}>
            {item}
          </Link>
          <Chevronicon />
        </span>
      ))}
      <div className={classes.last}>{props.last}</div>
    </div>
  )
}

export default Breadcrumb
