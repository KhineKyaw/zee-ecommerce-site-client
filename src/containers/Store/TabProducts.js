import React, { useState } from "react"

import classes from "./TabProducts.module.css"

import Dropdown from "../../components/UI/Dropdown/Dropdown"

import getCategories from "../../api/getCategories"

const TabProducts = props => {
  const categories = getCategories()
  const [current, setCurrent] = useState(categories && categories[0].name)

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
      <div>products</div>
    </div>
  )
}

export default TabProducts
