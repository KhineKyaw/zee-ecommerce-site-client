import React from "react"

import classes from "./ProductsCategory.module.css"
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb"
import Categories from "../components/Navigations/Categories/Categories"
import StickyContainer from "../components/UI/StickyContainer/StickyContainer"

const ProductsCategory = () => {
  return (
    <div className={classes.wrapper}>
      <Breadcrumb links={{ Home: "Home" }} last={"Filter"} />
      <div className={classes.body}>
        <StickyContainer>
          <div className={classes.temp}>Temp</div>
        </StickyContainer>
        <div>List</div>
      </div>
    </div>
  )
}

export default ProductsCategory
