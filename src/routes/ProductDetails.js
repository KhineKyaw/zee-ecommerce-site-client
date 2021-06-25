import React, { useEffect, useState } from "react"

import classes from "./ProductDetails.module.css"
import getProduct from "../api/getProduct"
import ImageView from "../components/Product/ImageView/ImageView"

const ProductDetails = props => {
  const [data, setData] = useState()
  const productId = props.match.params.id

  useEffect(() => {
    setData(getProduct(productId))
  }, [productId])

  if (!data) return null

  return (
    <>
      <div className={classes.main}>
        {/* Replace this with own component */}
        <div style={{ flex: 1 }}>Product Info (Temp)</div>
        <ImageView data={data.images} />
      </div>
      <div className={classes.detail}>detail</div>
      <div className={classes.reviews}>reviews</div>
      <div className={classes.recommendation}>recommendation</div>
    </>
  )
}

export default ProductDetails
