import React from "react"
import { useState, useEffect } from "react/cjs/react.development"
import getStores from "../api/getStores"
import StoreProfileItem from "../components/Stores/StoreProfileItem/StoreProfileItem"
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb"
import GridView from "../components/UI/GridView/GridView"
import Layout from "../hoc/Layout"

import classes from "./Stores.module.css"

const Stores = () => {
  const [data, setData] = useState()

  useEffect(() => {
    setData(getStores())
  }, [])

  return (
    <Layout>
      <Breadcrumb links={{ Home: "home" }} last={"Stores"} />
      <h1 className={classes.title}>Official Stores</h1>
      <GridView data={data} renderItem={StoreProfileItem} />
    </Layout>
  )
}

export default Stores
