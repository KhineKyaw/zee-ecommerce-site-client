import React from "react"

import classes from "./Recommendations.module.css"
import ListView from "../../UI/ListView/ListView"
import ProductItem from "../ProductItem/ProductItem"
import getProducts from "../../../api/getProducts"

const ITEM_WIDTH = 185
const NOITEM = 6

const Recommendations = () => {
  return (
    <>
      <h4 className={classes.title}>Seller Recommendations</h4>
      <ListView
        renderItem={ProductItem}
        cols={NOITEM}
        childWidth={ITEM_WIDTH}
        data={getProducts().slice(0, NOITEM)}
      />
    </>
  )
}

export default Recommendations
