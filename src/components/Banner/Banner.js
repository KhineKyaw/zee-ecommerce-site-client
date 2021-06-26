import React, { useState, useEffect } from "react"

import Card from '../UI/Card/Card'

import classes from "./Banner.module.css"

import { promotions } from '../../api/data'

const autoRotateInterval = 4000

const minRoundDistance = (i, t, r) => {
  const dd = t - i
  let rd;
  if (dd < 0) {
    rd = dd + r
  } else {
    rd = dd - r
  }
  if (Math.abs(dd) > Math.abs(rd)) {
    return rd
  } else {
    return dd
  }
}

const calcLeft = (offset) => {
  if (Math.abs(offset) > 2) {
    return '50%'
  }
  return `${50 - (offset * 7)}%`
}

const calcZIndex = (offset) => {
  return 3 - Math.abs(offset)
}

const calcScale = (offset) => {
  return 1 - (0.1 * Math.abs(offset))
}

const Banner = () => {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const slideStyle = (i) => {
    const offset = minRoundDistance(i, index, promotions.length)
    const left = calcLeft(offset)
    const zIndex = calcZIndex(offset)
    const scale = calcScale(offset)
    return {
      left: left,
      zIndex: zIndex,
      transform: `translate(-50%) scale(${scale})`
    }
  }

  const add = (offset) => {
    setAnimating(false)
    if (offset === 0 || animating) return
    const direction = (offset / Math.abs(offset))
    setIndex((prevIndex) => {
      let nextIndex = prevIndex + direction
      if (nextIndex < 0) 
        nextIndex += promotions.length
      else if (nextIndex >= promotions.length)
        nextIndex -= promotions.length
      return nextIndex
    })
    setAnimating(true)
    if (offset !== 0) {
      setTimeout(() => 
        add(offset - direction),
      500)
    }
  }

  const onSlideClick = (p, i) => {
    add(minRoundDistance(index, i, promotions.length))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      add(+1)
    }, autoRotateInterval)
    return () => clearInterval(interval)
  }, [add])

  return (
    <div className={classes["banner-container"]}>
      {promotions.map((p, i) => (
        <Card className={classes["slide"]} style={slideStyle(i)} onClick={() => onSlideClick(p, i)}>
          <img src={p.image} alt={p.title} />
        </Card>
      ))}
      <div className={classes.prev} onClick={() => add(-1)}>&#10094;</div>
      <div className={classes.next} onClick={() => add(+1)}>&#10095;</div>
    </div>
  )
}

export default Banner
