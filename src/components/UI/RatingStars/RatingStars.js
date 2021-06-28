import React from 'react'

import RatingStarsBase from './RatingStarsBase'

const RatingStars = props => {
    const { rating } = props

    return (
        <RatingStarsBase rating={rating} onRatingChange={() => null} />
    )
}

export default RatingStars