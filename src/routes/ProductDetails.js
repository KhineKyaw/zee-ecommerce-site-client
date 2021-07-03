import React, { useEffect, useState } from "react"

import classes from "./ProductDetails.module.css"
import getProduct from "../api/getProduct"
import ImageView from "../components/Product/ImageView/ImageView"
import CartOptions from "../components/Product/CartOptions/CartOptions"
import ProductDescription from "../components/Product/ProductDescription/ProductDescription"
import Reviews from "../components/Reviews/Reviews"
import Recommendations from "../components/Product/Recommendations/Recommendations"
import SectionWrapper from "../hoc/SectionWrapper"
import LinkLocator from "../components/UI/LinkLocator/LinkLocator"
import getCategories from "../api/getCategories"

const FIXED_LINKS = { Home: "/", Products: "/products" }

const ProductDetails = props => {
  const [data, setData] = useState()
  const [category, setCategory] = useState()
  const productId = props.match.params.id

  const loc_links =
    category && data
      ? { ...FIXED_LINKS, [category.name]: `/category/${category.id}` }
      : FIXED_LINKS

  useEffect(() => {
    const product = getProduct(productId)
    const categories = getCategories()
    const category = categories.reduce((obj, item) => {
      if (item.id === product.categories_id) return item
      return obj
    }, {})

    setData(product)
    setCategory(category)
  }, [productId])

  if (!data) return null

  return (
    <div className={classes.wrapper}>
      <SectionWrapper>
        <LinkLocator links={loc_links} last={data ? data.title : null} />
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
