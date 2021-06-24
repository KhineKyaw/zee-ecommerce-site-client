import React, {useState} from "react"

import Card from '../UI/Card/Card'

import classes from "./Banner.module.css"

import { promotions } from '../../api/data'

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
  return `${50 + (offset * 7)}%`
}

const calcZIndex = (offset) => {
  return 3 - Math.abs(offset)
}

const calcScale = (offset) => {
  return 1 - (0.1 * Math.abs(offset))
}

const Banner = () => {
  const [index, setIndex] = useState(0)

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

  return (
    <div className={classes["banner-container"]}>
      {promotions.map((p, i) => (
        <Card className={classes["slide"]} style={slideStyle(i)}>
          <img src={p.image} alt={p.title} />
        </Card>
      ))}
      <div className={classes.prev} onClick={() => null}>&#10094;</div>
      <div className={classes.next} onClick={() => null}>&#10095;</div>
    </div>
  )
}

export default Banner
