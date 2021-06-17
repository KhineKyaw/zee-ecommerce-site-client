import React, { useContext } from "react"

import classes from "./HomePage.module.css"
import Banner from "../components/Banner/Banner"
import Categories from "../components/Navigations/Categories/Categories"

import ProductsSectionBar from "../components/Product/ProductsSectionBar/ProductsSectionBar"
import ListView from "../components/UI/ListView/ListView"
import ProductItem from "../components/Product/ProductItem/ProductItem"
import StoreProfileItem from "../components/Stores/StoreProfileItem/StoreProfileItem"

import getProducts from "../api/getProducts"
import getStores from "../api/getStores"
import LanguageContext from "../context/language-context"

const ITEM_WIDTH = 210

const HomePage = () => {
  const { languageDict: texts } = useContext(LanguageContext)
  return (
    <>
      <Banner />
      <div className={classes.body}>
        <div className={classes.topContent}>
          <Categories />
          <div className={classes.innerContent}>
            <ProductsSectionBar
              title={texts.home["section-title-1"]}
              subTitle={texts.actions["view-more"]}
            />
            <ListView
              renderItem={ProductItem}
              cols={4}
              childWidth={ITEM_WIDTH}
              data={getProducts()}
            />
            <ProductsSectionBar
              title={texts.home["section-title-2"]}
              subTitle={texts.actions["view-more"]}
            />
            <ListView
              renderItem={StoreProfileItem}
              cols={4}
              childWidth={ITEM_WIDTH}
              data={getStores()}
            />
          </div>
        </div>
        <ProductsSectionBar type='mid' title={texts.home["section-title-3"]} />
        <ListView
          type={"button"}
          renderItem={ProductItem}
          cols={5}
          childWidth={ITEM_WIDTH}
          data={[...getProducts(), ...getProducts(10)]}
        />
      </div>
    </>
  )
}

export default HomePage
