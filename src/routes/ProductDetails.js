import React, { useEffect, useState } from "react"

import classes from "./ProductDetails.module.css"
import getProduct from "../api/getProduct"

const ProductDetails = props => {
  const [data, setData] = useState()
  const productId = props.match.params.id

  useEffect(() => {
    setData(getProduct(productId))
  }, [productId])

  return <>{data ? <div className={classes.main}>{data.title}</div> : null}</>
}

export default ProductDetails
