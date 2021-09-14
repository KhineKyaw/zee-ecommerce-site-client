import React, { useContext, useState } from "react"

import ProductsSectionBar from "../../components/Product/ProductsSectionBar/ProductsSectionBar"
// import ListView from "../../components/UI/ListView/ListView"
// import ProductItem from "../../components/Product/ProductItem/ProductItem"
import ItemList from "../../components/UI/ItemList/ItemList"
import ProductItem from "../../components/Product/ProductItem/ProductItem"

import getProducts from "../../api/getProducts"
import LanguageContext from "../../context/language-context"

const SectionMore2Love = () => {
  const { languageDict: texts } = useContext(LanguageContext)
  const [activePage, setActivePage] = useState(1)

  const loadMoreHandler = props => {
    setActivePage(prev => prev + 1)
  }

  return (
    <>
      <ProductsSectionBar type='mid' title={texts.home["section-title-3"]} />
      <ItemList
        type='grid'
        startCols={6}
        pagintionType='loader'
        activePage={activePage}
        onDataQuery={getProducts}
        onLoadMore={loadMoreHandler}
        renderItem={ProductItem}
      />
    </>
  )
}

export default SectionMore2Love
