import React from "react"

import classes from "./Reviews.module.css"
import RatingStats from "./RatingStats/RatingStats"

const Reviews = () => {
  return (
    <>
      <h4 className={classes.title}>Customer Reviews</h4>
      <RatingStats />
    </>
  )
}

export default Reviews
