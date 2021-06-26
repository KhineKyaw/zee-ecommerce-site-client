import React from "react"

import classes from "./HomePage.module.css"
import Banner from "../components/Banner/Banner"
import Categories from "../components/Navigations/Categories/Categories"

import SectionMore2Love from "../containers/Home/SectionMore2Love"
import SectionTopProducts from "../containers/Home/SectionTopProducts"
import SectionStores from "../containers/Home/SectionStores"
import Layout from "../hoc/Layout"

const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <div className={classes.body}>
        <div className={classes.topContent}>
          <Categories />
          <div className={classes.innerContent}>
            <SectionTopProducts />
            <SectionStores />
          </div>
        </div>
        <SectionMore2Love />
      </div>
    </Layout>
  )
}

export default HomePage
