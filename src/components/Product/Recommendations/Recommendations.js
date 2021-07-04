import React from "react"

import classes from "./Recommendations.module.css"
// import ProductItem from "../ProductItem/ProductItem"
import getProducts from "../../../api/getProducts"
import Carousel from "../../UI/Carousel/Carousel"

// const ITEM_WIDTH = 185
// const NOITEM = 6

const Recommendations = () => {
  return (
    <>
      <h4 className={classes.title}>Seller Recommendations</h4>
      <Carousel
        data={getProducts()}
        renderItem={({ item }) => (
          <div className={classes.temp}>{item.title}</div>
        )}
      />
    </>
  )
}

export default Recommendations
