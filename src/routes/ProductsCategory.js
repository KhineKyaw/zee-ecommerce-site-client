import React, { useEffect, useState } from "react"
import { useLocation, useHistory } from "react-router-dom"

import classes from "./ProductsCategory.module.css"
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb"
import StickyContainer from "../components/UI/StickyContainer/StickyContainer"
import Layout from "../hoc/Layout"
import ProductItem from "../components/Product/ProductItem/ProductItem"
import ProductListItem from "../components/Product/ProductListItem/ProductListItem"
import Categories from "../components/Navigations/Categories1/Categories"
import ViewSwitch from "../components/Products/ViewSwitch/ViewSwitch"
import GridView from "../components/UI/GridView/GridView"
import Pagination from "../components/UI/Pagination/Pagination"
import getAllProducts from "../api/getProducts"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const ProductsCategory = () => {
  let query = useQuery()
  let history = useHistory()
  const [data, setData] = useState()
  const [switchState, setSwitchState] = useState(0)

  const onSwitchStateHandler = s => {
    setSwitchState(s)
  }

  const handleClick = id => {
    history.push(`products?page=${id}`)
  }

  useEffect(() => {
    setData(getAllProducts().result[0])
  }, [])

  return (
    <Layout>
      <Breadcrumb links={{ Home: "home" }} last={"Filter"} />
      <div className={classes.body}>
        <StickyContainer>
          <Categories />
        </StickyContainer>
        <div className={classes.container}>
          <div className={classes.topContainer}>
            <h2>All Products</h2>
            <div className={classes.actionBar}>
              <p>182 results</p>
              <ViewSwitch state={switchState} onSwitch={onSwitchStateHandler} />
            </div>
          </div>
          <div className={classes.bottomContainer}>
            <GridView data={data} renderItem={ProductItem} />
            <Pagination
              activePage={query.get("page")}
              dataLength={20}
              onSelect={handleClick}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductsCategory
