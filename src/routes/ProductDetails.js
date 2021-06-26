import React, { useEffect, useState } from "react"

import classes from "./ProductDetails.module.css"
import getProduct from "../api/getProduct"
import ImageView from "../components/Product/ImageView/ImageView"
import CartOptions from "../components/Product/CartOptions/CartOptions"
import ProductDescription from "../components/Product/ProductDescription/ProductDescription"

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
        <CartOptions data={data} />
        <ImageView data={data.images} />
      </div>
      <div className={classes.description}>
        <ProductDescription data={data} />
      </div>
      <div className={classes.reviews}>reviews</div>
      <div className={classes.recommendation}>recommendation</div>
    </>
  )
}

export default ProductDetails
