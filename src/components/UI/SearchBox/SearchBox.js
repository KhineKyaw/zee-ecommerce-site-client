import React from "react"

import classes from "./SearchBox.module.css"

const SearchBox = props => {
  const className = [classes.search]

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
