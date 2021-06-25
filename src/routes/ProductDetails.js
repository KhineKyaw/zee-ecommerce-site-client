import React, { useEffect, useState } from "react"

import classes from "./ProductDetails.module.css"
import getProduct from "../api/getProduct"

const ProductDetails = props => {
  const [data, setData] = useState()
  const productId = props.match.params.id

  useEffect(() => {
    setData(getProduct(productId))
  }, [productId])

  if (!data) return null

  return (
    <>
      <div className={classes.main}>{data.title}</div>
      <div className={classes.detail}>detail</div>
      <div className={classes.reviews}>reviews</div>
      <div className={classes.recommendation}>recommendation</div>
    </>
  )
}

export default ProductDetails
