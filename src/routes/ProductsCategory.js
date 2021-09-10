import React from "react"
import { useLocation } from "react-router-dom"

import classes from "./ProductsCategory.module.css"
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb"
import StickyContainer from "../components/UI/StickyContainer/StickyContainer"
import Layout from "../hoc/Layout"
import getProducts from "../api/getProducts"
import ItemList from "../components/UI/ItemList/ItemList"
import ProductItem from "../components/Product/ProductItem1/ProductItem"
import Categories from "../components/Navigations/Categories1/Categories"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const ProductsCategory = () => {
  let query = useQuery()

  return (
    <Layout>
      <Breadcrumb links={{ Home: "Home" }} last={"Filter"} />
      <div className={classes.body}>
        <StickyContainer>
          <Categories />
        </StickyContainer>
        <div className={classes.container}>
          <div className={classes.topContainer}>
            <h2>All Products</h2>
            <div className={classes.actionBar}>
              <p>182 results</p>
              <div className={classes.viewSwitch}>
                View:
                <ion-icon name='grid-outline'></ion-icon>
                <ion-icon name='reorder-four-outline'></ion-icon>
              </div>
            </div>
          </div>
          <div className={classes.bottomContainer}>
            <ItemList
              activePage={query.get("page")}
              onDataQuery={getProducts}
              renderItem={ProductItem}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductsCategory
