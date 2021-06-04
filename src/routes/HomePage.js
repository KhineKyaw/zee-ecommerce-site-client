import React from "react"

import classes from "./HomePage.module.css"
import Banner from "../components/Banner/Banner"
import Categories from "../components/Navigations/Categories/Categories"
import ProductList from "../components/Product/ProductList/ProductList"

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className={classes.body}>
        <Categories />
        <ProductList data={[1, 2, 3]} />
      </div>
    </>
  )
}

export default HomePage
