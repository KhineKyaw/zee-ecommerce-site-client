import React, { useContext, useState, useEffect } from "react"

import ProductsSectionBar from "../../components/Product/ProductsSectionBar/ProductsSectionBar"
// import ListView from "../../components/UI/ListView/ListView"
// import ProductItem from "../../components/Product/ProductItem/ProductItem"
import ProductItem from "../../components/Product/ProductItem/ProductItem"

import getAllProducts from "../../api/getProducts"
import LanguageContext from "../../context/language-context"
import GridView from "../../components/UI/GridView/GridView"

const SectionMore2Love = () => {
  const { languageDict: texts } = useContext(LanguageContext)
  const [activePage, setActivePage] = useState(1)
  const [data, setData] = useState()

  const loadMoreHandler = props => {
    setActivePage(prev => prev + 1)
  }

  useEffect(() => {
    setData(getAllProducts().result[0])
  }, [])

  return (
    <>
      <ProductsSectionBar type='mid' title={texts.home["section-title-3"]} />
      <GridView data={data} renderItem={ProductItem} />
    </>
  )
}

export default SectionMore2Love
