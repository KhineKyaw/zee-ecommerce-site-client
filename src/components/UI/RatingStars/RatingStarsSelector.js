import React, { useState } from 'react'

import RatingStarsBase from './RatingStarsBase'

const RatingStarsSelector = props => {
    const [rating, setRating] = useState(0)
    const { onRatingSelect } = props

    const onRatingChange = index => {
        setRating(index)
    }

    return (
        <RatingStarsBase onClick={() => onRatingSelect(rating)} rating={rating} onRatingChange={onRatingChange} />
    )
}

export default RatingStarsSelector