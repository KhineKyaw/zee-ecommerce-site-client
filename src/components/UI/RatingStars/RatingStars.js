import React from 'react'

import classes from './RatingStars.module.css'

const RatingStars = props => {
    const { rating } = props

    if (rating > 5 || rating < 0) {
        return (
            <div>Expected rating between 0 and 5</div>
        )
    }

    const fullStars = Math.floor(rating)
    const halfStars = Math.round(rating) - fullStars
    const outlineStars = 5 - fullStars - halfStars
    
    const stars = []
    for (let i = 0; i < fullStars; i++) {
        stars.push(<ion-icon name="star"></ion-icon>)
    }
    for (let i = 0; i < halfStars; i++) {
        stars.push(<ion-icon name="star-half"></ion-icon>)
    }
    for (let i = 0; i < outlineStars; i++) {
        stars.push(<ion-icon name="star-outline"></ion-icon>)
    }

    return (
        <div className={classes.container}>
            {stars}
        </div>
    )
}

export default RatingStars