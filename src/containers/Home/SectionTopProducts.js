import React, { useEffect, useState, useContext } from "react"

import ProductsSectionBar from "../../components/Product/ProductsSectionBar/ProductsSectionBar"
import ListView from "../../components/UI/ListView/ListView"
import ProductItem from "../../components/Product/ProductItem/ProductItem"

import getProducts from "../../api/getProducts"
import LanguageContext from "../../context/language-context"

const ITEM_WIDTH = 210

const SectionMore2Love = () => {
  const { languageDict: texts } = useContext(LanguageContext)
  const [data, setData] = useState()

  useEffect(() => {
    setData(getProducts(0).slice(0, 8))
  }, [])

  return (
    <>
      <ProductsSectionBar
        title={texts.home["section-title-1"]}
        subTitle={texts.actions["view-more"]}
      />
      <ListView
        renderItem={ProductItem}
        cols={4}
        childWidth={ITEM_WIDTH}
        data={data}
      />
    </>
  )
}

export default SectionMore2Love
