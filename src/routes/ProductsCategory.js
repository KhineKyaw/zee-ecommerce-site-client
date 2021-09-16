import React, { useEffect, useState } from "react"
import { useLocation, useHistory } from "react-router-dom"

import classes from "./ProductsCategory.module.css"
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb"
import StickyContainer from "../components/UI/StickyContainer/StickyContainer"
import Layout from "../hoc/Layout"
import ProductItem from "../components/Product/ProductItem/ProductItem"
import Categories from "../components/Navigations/Categories1/Categories"
import ViewSwitch from "../components/Products/ViewSwitch/ViewSwitch"
import GridView from "../components/UI/GridView/GridView"
import Pagination from "../components/UI/Pagination/Pagination"
import getProducts from "../api/getProducts"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const ProductsCategory = () => {
  let query = useQuery()
  const category_id = query.get("categoryId")
  const page = +query.get("page") || 1
  let history = useHistory()
  const [data, setData] = useState(null)
  const [switchState, setSwitchState] = useState(0)

  const switchStateHandler = s => {
    setSwitchState(s)
  }

  const handlePageChange = pageNumber => {
    let updateQuery = `products?page=${pageNumber}`
    if (category_id) updateQuery += `&categoryId=${category_id}`
    history.push(updateQuery)
  }

  const handleNext = () => {
    handlePageChange(page + 1)
  }

  const handlePrev = () => {
    handlePageChange(page - 1)
  }

  useEffect(() => {
    setData(getProducts(page, 12, category_id))
  }, [category_id, page])

  const itemList = data ? (
    <>
      <GridView data={data ? data.result : null} renderItem={ProductItem} />
      <Pagination
        activePage={page}
        dataLength={data.length}
        onSelect={handlePageChange}
        onClickPrev={handlePrev}
        onClickNext={handleNext}
      />
    </>
  ) : null

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
              <ViewSwitch state={switchState} onSwitch={switchStateHandler} />
            </div>
          </div>
          <div className={classes.bottomContainer}>{itemList}</div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductsCategory
