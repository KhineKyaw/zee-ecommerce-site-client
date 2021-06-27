import React from "react"

import RatingBar from "../RatingBar/RatingBar"

const RatingBoard = props => {
  return (
    <div>
      {props.data.map((i, idx) => (
        <RatingBar key={idx} data={i} />
      ))}
    </div>
  )
}

export default RatingBoard
