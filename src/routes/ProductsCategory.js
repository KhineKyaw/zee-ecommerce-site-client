import React, { useEffect, useState } from "react"
import { useLocation, useHistory } from "react-router-dom"

import classes from "./ProductsCategory.module.css"
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb"
import StickyContainer from "../components/UI/StickyContainer/StickyContainer"
import Layout from "../hoc/Layout"
import ProductItem from "../components/Product/ProductItem/ProductItem"
import Categories from "../components/Navigations/Categories/Categories"
import ViewSwitch from "../components/Products/ViewSwitch/ViewSwitch"
import GridView from "../components/UI/GridView/GridView"
import Pagination from "../components/UI/Pagination/Pagination"
import getProducts from "../api/getProducts"
import ListView from "../components/UI/ListView/ListView"
import ProductListItem from "../components/Product/ProductListItem/ProductListItem"
import getCategory from "../api/getCategory"

const PRODUCTS_PER_PAGE = 12

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const ProductsCategory = () => {
  let query = useQuery()
  const category_id = Number(query.get("categoryId"))
  const page = Number(query.get("page")) || 1
  let history = useHistory()
  const [data, setData] = useState(null)
  const [switchState, setSwitchState] = useState(0)
  const [categoryName, setCategoryName] = useState("All Products")

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
    if (category_id) {
      setCategoryName(getCategory(category_id).name)
    }
    setData(
      getProducts(
        (page - 1) * PRODUCTS_PER_PAGE,
        PRODUCTS_PER_PAGE,
        category_id
      )
    )
  }, [category_id, page])

  const itemList = data ? (
    <>
      {!switchState ? (
        <GridView data={data.result} renderItem={ProductItem} />
      ) : (
        <ListView data={data.result} renderItem={ProductListItem} />
      )}

      <Pagination
        activePage={page}
        dataLength={data.length}
        itemsPerPage={PRODUCTS_PER_PAGE}
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
            <h2>{categoryName}</h2>
            <div className={classes.actionBar}>
              <p>{data ? data.length : null} results</p>
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
