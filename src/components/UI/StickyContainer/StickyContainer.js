import React, { useRef, useEffect, useState } from "react"

import classes from "./StickyContainer.module.css"

const EVENT_TYPE = "scroll"

const StickyContainer = props => {
  const wrapperRef = useRef()
  const stickyRef = useRef()
  const stickyRect = useRef()
  const [wrapperStyle, setWrapperStyle] = useState({})
  const [stickyStyle, setStickyStyle] = useState({})
  const topOffset = props.topOffset || 58

  const initializeStyles = () => {
    const temp = stickyRef.current.getBoundingClientRect()
    setWrapperStyle({ marginRight: temp.width })
    stickyRect.current = { bottom: temp.bottom }
  }

  useEffect(() => {
    initializeStyles()

    const onDocumentScroll = () => {
      if (!wrapperRef.current) return
      const wrapperRect = wrapperRef.current.getBoundingClientRect()
      // console.log("wrb: ", wrapperRect.bottom)
      // console.log("srb: ", stickyRect.current.bottom)

      if (wrapperRect.bottom < stickyRect.current.bottom) {
        setStickyStyle({ position: "absolute", bottom: 0 })
      } else if (wrapperRect.top >= topOffset) {
        setStickyStyle({ position: "relative" })
      } else {
        setStickyStyle({ position: "fixed", top: topOffset })
        stickyRect.current = {
          bottom: stickyRef.current.getBoundingClientRect().bottom
        }
      }
    }

    window.addEventListener(EVENT_TYPE, onDocumentScroll)
    return () => {
      window.removeEventListener(EVENT_TYPE, onDocumentScroll)
    }
  }, [topOffset])

  return (
    <div
      ref={wrapperRef}
      style={wrapperStyle}
      className={classes.stickyContainerWrapper}>
      <div
        ref={stickyRef}
        className={classes.stickyContainer}
        style={stickyStyle}>
        {props.children}
      </div>
    </div>
  )
}

export default StickyContainer
