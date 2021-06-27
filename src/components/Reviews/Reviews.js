import React from "react"

import classes from "./Reviews.module.css"
import TotalStats from "./TotalStats/TotalStats"
import RatingBoard from "./RatingBoard/RatingBoard"
import SectionDivider from "./SectionDivider/SectionDivider"

const temp = ["60", "25", "10", "0", "5"]

const Reviews = () => {
  return (
    <>
      <h4 className={classes.title}>Customer Reviews</h4>
      <div className={classes.stats}>
        <SectionDivider
          item1={<TotalStats />}
          item2={<RatingBoard data={temp} />}
        />
      </div>
    </>
  )
}

export default Reviews
