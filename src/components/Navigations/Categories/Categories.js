import React, { useEffect, useRef, useState } from "react"

import classes from "./Categories.module.css"

const CATE_HEIGHT = 400
const CATE_TOP = 32

const Categories = () => {
  const wrapperRef = useRef()
  const [categoriesType, setCategoriesType] = useState("abs-top")
  var categoriesStyle = {}

  const onDocumentScroll = () => {
    if (!wrapperRef.current) return
    const wrapperRect = wrapperRef.current.getBoundingClientRect()

    if (wrapperRect.top <= CATE_TOP) {
      if (wrapperRect.bottom < CATE_HEIGHT + CATE_TOP) {
        setCategoriesType("abs-bot")
        return
      }
      setCategoriesType("fix-top")
    } else setCategoriesType("abs-top")
  }

  useEffect(() => {
    window.addEventListener("scroll", onDocumentScroll)
  }, [])

  if (categoriesType === "fix-top") {
    categoriesStyle = {
      position: "fixed",
      top: CATE_TOP
    }
  }
  if (categoriesType === "abs-bot") {
    categoriesStyle = {
      position: "absolute",
      bottom: "0"
    }
  }

  return (
    <div ref={wrapperRef} className={classes.categoriesWrapper}>
      <div className={classes.categories} style={categoriesStyle}>
        Categories
      </div>
    </div>
  )
}

export default Categories
