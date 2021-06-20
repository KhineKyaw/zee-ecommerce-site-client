import React, { useEffect, useState, useContext } from "react"

import ProductsSectionBar from "../../components/Product/ProductsSectionBar/ProductsSectionBar"
import ListView from "../../components/UI/ListView/ListView"
import ProductItem from "../../components/Product/ProductItem/ProductItem"

import getProducts from "../../api/getProducts"
import LanguageContext from "../../context/language-context"

const SectionMore2Love = () => {
  const { languageDict: texts } = useContext(LanguageContext)
  const [data, setData] = useState()
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (data) {
      setData(prev => [...prev, ...getProducts(page)])
    } else setData(getProducts(0))
  }, [page])

  const loadMoreHandler = () => {
    setPage(prev => prev + 10)
  }

  return (
    <>
      <ProductsSectionBar type='mid' title={texts.home["section-title-3"]} />
      <ListView
        type={"button"}
        onButtonClick={loadMoreHandler}
        renderItem={ProductItem}
        cols={6}
        childWidth={186}
        data={data}
      />
    </>
  )
}

export default SectionMore2Love
