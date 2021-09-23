import React, { useState, useEffect } from "react"

import classes from "./TabProducts.module.css"
import Dropdown from "../../components/UI/Dropdown/Dropdown"
import getCategories from "../../api/getCategories"
import GridView from "../../components/UI/GridView/GridView"
import ProductItem from "../../components/Product/ProductItem/ProductItem"
import getProducts from "../../api/getProducts"

const TabProducts = props => {
  const categories = getCategories()
  const [current, setCurrent] = useState(categories && categories[0].name)
  const [data, setData] = useState()

  useEffect(() => {
    setData(getProducts())
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes["action-bar"]}>
        <span>312 items</span>
        <Dropdown
          name={"Categories"}
          value={current}
          onChange={target => setCurrent(target.value)}>
          {categories.map(category => {
            return (
              <Dropdown.Item value={category.name}>
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
