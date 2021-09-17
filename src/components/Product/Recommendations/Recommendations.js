import React from "react"

import classes from "./Recommendations.module.css"
import ProductItem from "../ProductItem/ProductItem"
import getProducts from "../../../api/getProducts"
import Carousel from "../../UI/Carousel/Carousel"

const Recommendations = () => {
  const renderItem = ({ item }) => {
    return <div className={classes.temp}>{item.title}</div>
  }

  return (
    <>
      <h3 className={classes.title}>Seller Recommendations</h3>
      <Carousel data={getProducts(0, 10).result} renderItem={renderItem} />
    </>
  )
}

export default Recommendations
