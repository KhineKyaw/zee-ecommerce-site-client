import React from "react"

import classes from "./SubmitReview.module.css"
import Button from "../../UI/Button/Button"

const SubmitReview = () => {
  return (
    <div className={classes.wrapper}>
      <textarea placeholder='What do you think of the product ...' />
      <Button type='outline'>Submit</Button>
    </div>
  )
}

export default SubmitReview
