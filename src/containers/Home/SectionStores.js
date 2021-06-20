import React, { useEffect, useState, useContext } from "react"

import ProductsSectionBar from "../../components/Product/ProductsSectionBar/ProductsSectionBar"
import ListView from "../../components/UI/ListView/ListView"
import StoreProfileItem from "../../components/Stores/StoreProfileItem/StoreProfileItem"

import getStores from "../../api/getStores"
import LanguageContext from "../../context/language-context"

const ITEM_DIM = 168

const SectionMore2Love = () => {
  const { languageDict: texts } = useContext(LanguageContext)
  const [data, setData] = useState()

  useEffect(() => {
    setData(getStores().slice(0, 5))
  }, [])

  return (
    <>
      <ProductsSectionBar
        title={texts.home["section-title-2"]}
        subTitle={texts.actions["view-more"]}
      />
      <ListView
        renderItem={StoreProfileItem}
        cols={5}
        childWidth={ITEM_DIM}
        childHeight={ITEM_DIM}
        data={data}
      />
    </>
  )
}

export default SectionMore2Love
