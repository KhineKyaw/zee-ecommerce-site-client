import React from "react"

import classes from "./RatingSelector.module.css"
import RatingStars from "../../UI/RatingStars/RatingStars"
import RatingStarsSelector from "../../UI/RatingStars/RatingStarsSelector"

const RatingSelector = props => {
  return (
    <div>
      {
        <p className={classes.title}>
          {props.action ? " Rate this product" : props.title}
        </p>
      }
      {props.action ? (
        <RatingStarsSelector />
      ) : (
        <RatingStars rating={props.rating} />
      )}
    </div>
  )
}

export default RatingSelector
