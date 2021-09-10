import React, { useEffect, useRef, useState } from "react"

import classes from "./Categories.module.css"
import getCategories from "../../../api/getCategories"

const Categories = () => {
  const [categories, setCategories] = useState()

  useEffect(() => {
    setCategories(getCategories())
  }, [])

  const CategoriesList = categories
    ? categories.map(item => {
        return <p key={item.id}>{item.name}</p>
      })
    : "Loading"

  return (
    <div className={classes.categories}>
      <h5>Categories</h5>
      {CategoriesList}
    </div>
  )
}

export default Categories
