import React from "react"

// import classes from "./RatingSelector.module.css"

const RatingSelector = props => {
  return (
    <div>
      {props.action ? <p>Rate this product</p> : <p>{props.title}</p>}
      <p>*****</p>
    </div>
  )
}

export default RatingSelector
