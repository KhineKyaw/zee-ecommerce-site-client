import React, { useEffect, useRef, useState } from "react"

import classes from "./Categories.module.css"
import getCategories from "../../../api/getCategories"

const CATE_HEIGHT = 400
const CATE_TOP = 32

const Categories = () => {
  const [categories, setCategories] = useState()
  const wrapperRef = useRef()
  const [categoriesType, setCategoriesType] = useState("abs-top")
  var categoriesStyle = {}

  const onDocumentScroll = () => {
    if (!wrapperRef.current) return
    const wrapperRect = wrapperRef.current.getBoundingClientRect()

    if (wrapperRect.top <= CATE_TOP) {
      if (wrapperRect.bottom < CATE_HEIGHT + CATE_TOP * 2) {
        setCategoriesType("abs-bot")
        return
      }
      setCategoriesType("fix-top")
    } else setCategoriesType("abs-top")
  }

  useEffect(() => {
    setCategories(getCategories())
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
      bottom: CATE_TOP
    }
  }

  const CategoriesList = categories
    ? categories.map(item => {
        return <p key={item.id}>{item.name}</p>
      })
    : "Loading"

  return (
    <div ref={wrapperRef} className={classes.categoriesWrapper}>
      <div className={classes.categories} style={categoriesStyle}>
        <h5>Categories</h5>
        {CategoriesList}
      </div>
    </div>
  )
}

export default Categories
