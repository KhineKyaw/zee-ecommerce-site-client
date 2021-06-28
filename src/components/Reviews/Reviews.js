import React from "react"

import classes from "./Reviews.module.css"
import TotalStats from "./TotalStats/TotalStats"
import RatingBoard from "./RatingBoard/RatingBoard"
import SectionDivider from "./SectionDivider/SectionDivider"
import RatingSelector from "./RatingSelector/RatingSelector"
import SubmitReview from "./SubmitReview/SubmitReview"
import Button from "../UI/Button/Button"

const temp = ["60", "25", "10", "0", "5"]
const temp_review =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique viverra lorem, nec dictum velit. Donec commodo elit non dolor finibus tempor. Donec viverra tortor urna. In fringilla lorem sed felis rhoncus, id maximus odio tincidunt. Pellentesque dictum ornare porttitor. Phasellus ut neque tortor. Fusce iaculis vestibulum justo, id hendrerit lacus tincidunt ut. Proin commodo augue id accumsan efficitur."
const temp_customer = ["Customer 1", "Customer 2"]

const Reviews = props => {
  const reviews = temp_customer.map((item, idx) => (
    <SectionDivider
      key={idx}
      item1={<RatingSelector title={item} />}
      item2={<p className={classes.reviewText}>{temp_review}</p>}
    />
  ))

  return (
    <>
      <h4 className={classes.title}>Customer Reviews</h4>
      <SectionDivider
        item1={<TotalStats />}
        item2={<RatingBoard data={temp} />}
      />
      <SectionDivider
        item1={<RatingSelector action={true} />}
        item2={<SubmitReview />}
      />
      {reviews}
      <div className={classes.btnContainer}>
        <Button type='outline'>Load More</Button>
      </div>
    </>
  )
}

export default Reviews
