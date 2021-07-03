import React, { useState, useEffect, useCallback } from "react"

import Card from '../UI/Card/Card'

import classes from "./Banner.module.css"

import getPromotions from '../../api/getPromotions'

const promotions = getPromotions()
const autoRotateInterval = 4000
const transitionDuration = 500

const minRoundOffset = (start, target, range) => {
  const directDistance = target - start
  let roundDistance;
  if (directDistance < 0) {
    roundDistance = directDistance + range
  } else {
    roundDistance = directDistance - range
  }
  if (Math.abs(directDistance) > Math.abs(roundDistance)) {
    return roundDistance
  } else {
    return directDistance
  }
}

const roundAddition = (v1, v2, range) => {
  let result = v1 + v2
  if (result < 0)
    result += range
  else if (result > range)
    result -= range
  return result
}

const calcLeft = (offset) => {
  if (Math.abs(offset) > 2) {
    return '50%'
  } else {
    return `${50 - (offset * 7)}%`
  }
}

const calcZIndex = (offset) => {
  return 3 - Math.abs(offset)
}

const calcScale = (offset) => {
  return 1 - (0.1 * Math.abs(offset))
}

let transitionTimeout

const Banner = () => {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const move = useCallback((offset) => {
    setAnimating(false)
    if (offset !== 0 && !animating) {
      setAnimating(true)
      const unitDistance = (offset / Math.abs(offset))
      setIndex((prevIndex) => {
        return roundAddition(prevIndex, unitDistance, promotions.length)
      })
      transitionTimeout = setTimeout(() => 
        move(offset - unitDistance),
      transitionDuration)
    }
  }, [animating])

  const slideStyle = (slideIndex) => {
    const offset = minRoundOffset(slideIndex, index, promotions.length)
    const left = calcLeft(offset)
    const zIndex = calcZIndex(offset)
    const scale = calcScale(offset)
    return {
      left: left,
      zIndex: zIndex,
      transform: `translate(-50%) scale(${scale})`,
      transitionDuration: `${transitionDuration}ms`,
    }
  }

  const onSlideClick = (promotion, slideIndex) => {
    if (slideIndex === 0) {
    } else {
      move(minRoundOffset(index, slideIndex, promotions.length))
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      move(+1)
    }, autoRotateInterval)
    return () => {
      clearInterval(interval)
      clearTimeout(transitionTimeout)
    }
  }, [move])

  return (
    <div className={classes["banner-container"]}>
      {promotions.map((promotion, slideIndex) => (
        <Card key={promotion.id} className={classes["slide"]} style={slideStyle(slideIndex)} onClick={() => onSlideClick(promotion, slideIndex)}>
          <img src={promotion.image} alt={promotion.title} />
        </Card>
      ))}
      <div className={classes.prev} onClick={() => move(-1)}>&#10094;</div>
      <div className={classes.next} onClick={() => move(+1)}>&#10095;</div>
    </div>
  )
}

export default Banner
