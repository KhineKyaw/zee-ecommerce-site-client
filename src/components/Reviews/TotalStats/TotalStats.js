import React from "react"

import classes from "./TotalStats.module.css"
import RatingStars from "../../UI/RatingStars/RatingStars"

const TotalStats = props => {
  return (
    <div className={classes.stats}>
      <h1>{props.data}/5</h1>
      <RatingStars rating={props.data} />
      <div className={classes.rating_count}>{props.count} ratings</div>
    </div>
  )
}

export default TotalStats
