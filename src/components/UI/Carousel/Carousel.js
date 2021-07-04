import React, { useRef } from "react"

import classes from "./Carousel.module.css"

const scrollTo = (ref, pos) => {
  ref.current.scroll({
    left: pos.current,
    behavior: "smooth"
  })
}

const Carousel = props => {
  const caroselRef = useRef()
  const itemRef = useRef()
  const currentPosition = useRef(0)
  const scrollNumber = 2

  const getPosition = (next = true) => {
    const itemWidth = itemRef.current.offsetWidth
    var pos =
      currentPosition.current + (next ? 1 : -1) * (scrollNumber * itemWidth)
    const maxScrollWidth =
      itemWidth * props.data.length - caroselRef.current.offsetWidth
    if (pos >= maxScrollWidth) pos = maxScrollWidth
    else if (pos <= 0) pos = 0
    return pos
  }

  const onNext = () => {
    currentPosition.current = getPosition()
    scrollTo(caroselRef, currentPosition)
  }

  const onPrev = () => {
    currentPosition.current = getPosition(false)
    scrollTo(caroselRef, currentPosition)
  }

  return (
    <div className={classes.carouselWrapper}>
      <button onClick={onPrev} className={classes.btnPrev}>
        A
      </button>
      <div ref={caroselRef} className={classes.carosel}>
        {props.data.map((item, index) => {
          return (
            <div
              ref={itemRef}
              key={item.id || index}
              className={classes.itemWrapper}>
              <props.renderItem item={item} index={index} />
            </div>
          )
        })}
      </div>
      <button onClick={onNext} className={classes.btnNext}>
        B
      </button>
    </div>
  )
}

export default Carousel
