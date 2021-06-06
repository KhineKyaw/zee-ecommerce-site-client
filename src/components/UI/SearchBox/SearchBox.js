import React from "react"

import classes from "./SearchBox.module.css"
import styles from "../Style.module.css"

const SearchBox = props => {
  const className = [styles.clear_bo, classes.search]

  if (props.className) {
    className.push(props.className)
  }

  const Props = { ...props }
  delete Props.children

  return (
    <input {...Props} className={className.join(" ")}>
      {props.children}
    </input>
  )
}

export default SearchBox
