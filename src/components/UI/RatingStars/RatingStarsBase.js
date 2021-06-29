import React from 'react'

import classes from './RatingStarsBase.module.css'

const RatingStarsBase = props => {
    const { rating, onRatingChange } = props

    if (rating > 5 || rating < 0) {
        return (
            <div>Expected rating between 0 and 5</div>
        )
    }

    const onMouseEnter = index => {
        onRatingChange(index + 1)
    }

    const onMouseLeave = () => {
        onRatingChange(0)
    }

    const fullStars = Math.floor(rating)
    const halfStars = Math.round(rating) - fullStars
    const outlineStars = 5 - fullStars - halfStars
    
    const stars = []
    for (let i = 0; i < fullStars; i++) {
        stars.push(<ion-icon key={i} onClick={props.onClick} onMouseEnter={() => onMouseEnter(i)} onMouseLeave={onMouseLeave} name="star"></ion-icon>)
    }
    for (let i = 0; i < halfStars; i++) {
        stars.push(<ion-icon key={i + fullStars} onClick={props.onClick} onMouseEnter={() => onMouseEnter(i + fullStars)} onMouseLeave={onMouseLeave} name="star-half"></ion-icon>)
    }
    for (let i = 0; i < outlineStars; i++) {
        stars.push(<ion-icon key={i + fullStars + halfStars} onClick={props.onClick} onMouseEnter={() => onMouseEnter(i + fullStars + halfStars)} onMouseLeave={onMouseLeave} name="star-outline"></ion-icon>)
    }

    return (
        <div className={classes.container} >
            {stars}
        </div>
    )
}

export default RatingStarsBase