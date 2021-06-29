import React from "react"

import RatingBar from "../RatingBar/RatingBar"

const RatingBoard = props => {
  const keys = Object.keys({ ...props.data }).reverse()
  return (
    <div>
      {keys.map(i => (
        <RatingBar key={i} rating={i} data={props.data[i] / props.count} />
      ))}
    </div>
  )
}

export default RatingBoard
