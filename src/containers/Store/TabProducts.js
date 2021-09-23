import React, { useState, useEffect } from "react"

import classes from "./TabProducts.module.css"
import Dropdown from "../../components/UI/Dropdown/Dropdown"
import getCategories from "../../api/getCategories"
import GridView from "../../components/UI/GridView/GridView"
import ProductItem from "../../components/Product/ProductItem/ProductItem"
import getProducts from "../../api/getProducts"

const TabProducts = props => {
  const categories = getCategories()
  const [current, setCurrent] = useState(categories && categories[0])
  const [data, setData] = useState()

  useEffect(() => {
    setData(getProducts(0, -1, current.id))
  }, [current])

  const handleOnDropdownChange = (target) => {
    const newCategory = categories.find(c => c.id === target.value)
    if (newCategory)
      setCurrent(newCategory)
  }

  return (
    <div className={classes.container}>
      <div className={classes["action-bar"]}>
        <span>312 items</span>
        <Dropdown
          name={"Categories"}
          value={current.id}
          onChange={handleOnDropdownChange}>
          {categories.map(category => {
            return (
              <Dropdown.Item key={category.id} value={category.id}>
                {category.name}
              </Dropdown.Item>
            )
          })}
        </Dropdown>
      </div>
      <GridView data={data ? data.result : null} renderItem={ProductItem} />
    </div>
  )
}

export default TabProducts
