import React, { useRef, useEffect, useState } from "react"

import classes from "./StickyContainer.module.css"

const EVENT_TYPE = "scroll"

const StickyContainer = props => {
  const wrapperRef = useRef()
  const stickyRef = useRef()
  const stickyRect = useRef()
  const [wrapperStyle, setWrapperStyle] = useState({})
  const [stickyStyle, setStickyStyle] = useState({})

  const onDocumentScroll = () => {
    if (!wrapperRef.current) return
    const wrapperRect = wrapperRef.current.getBoundingClientRect()

    if (wrapperRect.bottom < stickyRect.current.bottom) {
      setStickyStyle({ position: "absolute", bottom: 0 })
    } else {
      setStickyStyle({ position: "fixed" })
    }
  }

  const initializeStyles = () => {
    const temp = stickyRef.current.getBoundingClientRect()
    setWrapperStyle({ width: temp.width })
    stickyRect.current = { bottom: temp.bottom }
  }

  useEffect(() => {
    initializeStyles()
    window.addEventListener(EVENT_TYPE, onDocumentScroll)
    return () => {
      window.removeEventListener(EVENT_TYPE, onDocumentScroll)
    }
  }, [])

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
