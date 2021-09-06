import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import classes from "./ProductsCategory.module.css"
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb"
import StickyContainer from "../components/UI/StickyContainer/StickyContainer"
import Layout from "../hoc/Layout"
import getProducts from "../api/getProducts"
import ItemList from "../components/UI/ItemList/ItemList"
import ProductItem from "../components/Product/ProductItem1/ProductItem"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const ProductsCategory = props => {
  let query = useQuery()
  const [data, setData] = useState([])

  useEffect(() => {
    setData(getProducts)
  }, [])

  return (
    <Layout>
      <Breadcrumb links={{ Home: "Home" }} last={"Filter"} />
      <div className={classes.body}>
        <StickyContainer>
          <div className={classes.temp}>Temp</div>
        </StickyContainer>
        <div className={classes.container}>
          <div className={classes.topContainer}>Top</div>
          <div className={classes.bottomContainer}>
            <ItemList
              activePage={query.get("page")}
              data={data}
              renderItem={ProductItem}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductsCategory
