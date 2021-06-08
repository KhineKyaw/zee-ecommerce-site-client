import React, { useState, useEffect, useCallback } from "react"

import classes from "./Banner.module.css"

import { promotions } from '../../api/data'

const bannerSlideInterval = 3000

const Banner = () => {
  const [index, setIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(0)
  const [direction, setDirection] = useState("left")
  const [isAnimating, setAnimating] = useState(true)

  const moveIndex = useCallback(offset => {
    if (isAnimating) return

    let nextIndex = index + offset;
    if (nextIndex >= promotions.length) {
      nextIndex = nextIndex - promotions.length 
    } else if (nextIndex < 0) {
      nextIndex = nextIndex + promotions.length 
    }

    setIndex(nextIndex)
    setLastIndex(index)

    if (offset !== 0) {
      const nextDirection = offset < 0 ? "right" : "left"
      setDirection(nextDirection)
      setAnimating(true)
    }
  }, [index, isAnimating])

  useEffect(() => {
    const interval = setInterval(() => {
      moveIndex(+1)
    }, bannerSlideInterval)
    return () => clearInterval(interval)
  }, [moveIndex])

  return (
    <div className={classes["banner-container"]}>
      {promotions.map((promotion, i) => {
        let classNames = classes.slide
        switch (i) {
          case index:
            classNames += ` ${classes[`slide-in-${direction}`]} ${classes["slide-show"]}`
            break;
          case lastIndex:
            classNames += ` ${classes[`slide-out-${direction}`]}`
            break
          default:
            break;
        }
        return <img key={i} className={classNames} src={promotion.image} alt={promotion.title} onAnimationEnd={() => setAnimating(false)} />
      })}
      <div className={classes.prev} onClick={() => moveIndex(-1)}>&#10094;</div>
      <div className={classes.next} onClick={() => moveIndex(+1)}>&#10095;</div>

      <div className={classes["dot-container"]}>
        {promotions.map((_, i) => {
          const offset = i - index

          let classNames = classes.dot
          if (i === index) {
            classNames += ` ${i === index && classes.active}`
          }

          return <span key={i} className={classNames} onClick={() => moveIndex(offset)}></span>
        })}
      </div>
    </div>
  )
}

export default Banner
