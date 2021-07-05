import React, { useCallback, useEffect, useRef, useState } from "react"

import classes from "./Carousel.module.css"

const scrollTo = (ref, pos) => {
  ref.current.scroll({
    left: pos.current,
    behavior: "smooth"
  })
}

const Carousel = props => {
  const [margin, setMargin] = useState(0)
  const [showBtn, setShowBtn] = useState([false, true])
  const caroselRef = useRef()
  const itemRef = useRef()
  const currentPosition = useRef(0)
  const scrollNumber = props.scrollItemCount || 4
  const showItemCount = 5

  const setPosition = (next = true) => {
    const itemWidth = itemRef.current.offsetWidth + margin * 2
    var pos =
      currentPosition.current + (next ? 1 : -1) * (scrollNumber * itemWidth)
    const maxScrollWidth =
      itemWidth * props.data.length - caroselRef.current.offsetWidth

    if (pos >= maxScrollWidth) pos = maxScrollWidth
    else if (pos <= 0) pos = 0

    currentPosition.current = pos
    setShowBtn([pos > 0, pos < maxScrollWidth])
  }

  const onNext = () => {
    setPosition()
    scrollTo(caroselRef, currentPosition)
  }

  const onPrev = () => {
    setPosition(false)
    scrollTo(caroselRef, currentPosition)
  }

  useEffect(() => {
    const netWidth =
      caroselRef.current.offsetWidth -
      itemRef.current.offsetWidth * showItemCount
    setMargin(netWidth / (showItemCount * 2))
  }, [])

  const itemWrapper = useCallback(
    (item, index) => {
      return (
        <div
          ref={itemRef}
          key={item.id || index}
          className={classes.itemWrapper}
          style={{
            margin: `0 ${margin}px`
          }}>
          <props.renderItem item={item} index={index} />
        </div>
      )
    },
    [margin]
  )

  const btnPrevClass = [classes.btnPrev]
  const btnNextClass = [classes.btnNext]

  if (!showBtn[0]) btnPrevClass.push(classes.hide)
  if (!showBtn[1]) btnNextClass.push(classes.hide)

  return (
    <div className={classes.carouselWrapper}>
      <button onClick={onPrev} className={btnPrevClass.join(" ")}>
        <ion-icon name='chevron-back-outline'></ion-icon>
      </button>

      <div ref={caroselRef} className={classes.carosel}>
        {props.data.map(itemWrapper)}
      </div>

      <button onClick={onNext} className={btnNextClass.join(" ")}>
        <ion-icon name='chevron-forward-outline'></ion-icon>
      </button>
    </div>
  )
}

export default Carousel
