import React from "react"

import classes from "./HomePage.module.css"
import Banner from "../components/Banner/Banner"
import Categories from "../components/Navigations/Categories/Categories"
import ProductList from "../components/Product/ProductList/ProductList"

import getProducts from "../api/getProducts"

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className={classes.body}>
        <Categories />
        <ProductList cols={4} childWidth={200} data={getProducts()} />
      </div>
    </>
  )
}

export default HomePage
