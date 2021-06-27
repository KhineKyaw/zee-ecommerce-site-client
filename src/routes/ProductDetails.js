import React, { useEffect, useState } from "react"

import classes from "./ProductDetails.module.css"
import getProduct from "../api/getProduct"
import ImageView from "../components/Product/ImageView/ImageView"
import CartOptions from "../components/Product/CartOptions/CartOptions"
import ProductDescription from "../components/Product/ProductDescription/ProductDescription"
import Reviews from "../components/Product/Reviews/Reviews"
import Recommendations from "../components/Product/Recommendations/Recommendations"
import SectionWrapper from "../hoc/SectionWrapper"
import LinkLocator from "../components/UI/LinkLocator/LinkLocator"

const temp = ["Home", "Products", "Men's Fashion", "Ballerry Men Long Wallet"]

const ProductDetails = props => {
  const [data, setData] = useState()
  const productId = props.match.params.id

  useEffect(() => {
    setData(getProduct(productId))
  }, [productId])

  if (!data) return null

  return (
    <div className={classes.wrapper}>
      <SectionWrapper>
        <LinkLocator links={temp} />
      </SectionWrapper>
      <SectionWrapper background='light'>
        <div className={classes.main}>
          <CartOptions data={data} />
          <ImageView data={data.images} />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className={classes.description}>
          <ProductDescription data={data} />
        </div>
      </SectionWrapper>
      <SectionWrapper background='light'>
        <div className={classes.reviews}>
          <Reviews data={{}} />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className={classes.recommendation}>
          <Recommendations />
        </div>
      </SectionWrapper>
    </div>
  )
}

export default ProductDetails
