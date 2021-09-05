import React, { useEffect, useState } from "react"

import classes from "./ProductsCategory.module.css"
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb"
import StickyContainer from "../components/UI/StickyContainer/StickyContainer"
import Layout from "../hoc/Layout"
import getProducts from "../api/getProducts"
import ItemList from "../components/UI/ItemList/ItemList"

const Item = ({ item }) => {
  return <div className={classes.item}>{item.title}</div>
}

const ProductsCategory = () => {
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
            <ItemList data={data} renderItem={Item} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductsCategory
