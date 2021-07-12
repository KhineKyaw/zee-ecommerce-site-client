import React, { useState } from "react"

import classes from "./Reviews.module.css"
import TotalStats from "./TotalStats/TotalStats"
import RatingBoard from "./RatingBoard/RatingBoard"
import SectionDivider from "./SectionDivider/SectionDivider"
import RatingSelector from "./RatingSelector/RatingSelector"
import SubmitReview from "./SubmitReview/SubmitReview"
import Button from "../UI/Button/Button"
import getReviews from "../../api/getReviews"

const Reviews = props => {
  const data = getReviews()
  const review_count = data.length
  const avg_rating = data.reduce((obj, i) => i.rating + obj, 0) / review_count
  const rating_stats = data.reduce((obj, i) => {
    return { ...obj, [i.rating]: (obj[i.rating] || 0) + 1 }
  }, {})

  const loading_count = 4
  const [EOR, setEOR] = useState(false)
  const [pageIndex, setPageIndex] = useState(loading_count)

  const loadMore = () => {
    setPageIndex(prev => {
      const page = prev + loading_count
      if (page >= review_count) {
        setEOR(true)
        return review_count
      }
      return page
    })
  }

  const reviews = data
    .slice(0, pageIndex)
    .map((item, idx) => (
      <SectionDivider
        key={idx}
        marginBottom={true}
        item1={<RatingSelector rating={item.rating} title={item.name} />}
        item2={<p className={classes.reviewText}>{item.comment}</p>}
      />
    ))

  return (
    <>
      <h3 className={classes.title}>Customer Reviews</h3>
      <SectionDivider
        item1={<TotalStats data={avg_rating} count={review_count} />}
        item2={<RatingBoard data={rating_stats} count={review_count} />}
      />
      <SectionDivider
        marginBottom={true}
        item1={<RatingSelector action={true} />}
        item2={<SubmitReview />}
      />
      {reviews}
      <div className={classes.btnContainer}>
        {!EOR ? (
          <Button onClick={loadMore} type='outline'>
            Load More
          </Button>
        ) : (
          <p>Nothing to load!</p>
        )}
      </div>
    </>
  )
}

export default Reviews
