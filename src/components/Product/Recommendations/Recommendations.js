import React from "react"
import { Link } from "react-router-dom"

import classes from "./Recommendations.module.css"
import getProducts from "../../../api/getProducts"
import Carousel from "../../UI/Carousel/Carousel"

const Recommendations = () => {
  const renderItem = ({ item }) => {
    return (
      <div className={classes.item}>
        <Link to={`${item.id}`}>
          <div
            className={classes["item-img-container"]}
            style={{ backgroundImage: `url('${item.imageUrl}')` }}></div>
        </Link>
        <div className={classes["item-info"]}>
          <Link to={`${item.id}`}>{item.title}</Link>
          <p>Ks {item.price}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <h3 className={classes.title}>Seller Recommendations</h3>
      <Carousel data={getProducts(0, 10).result} renderItem={renderItem} />
    </>
  )
}

export default Recommendations
