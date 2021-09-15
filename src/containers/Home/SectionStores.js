import React, { useEffect, useState, useContext } from "react"

import ProductsSectionBar from "../../components/Product/ProductsSectionBar/ProductsSectionBar"
import StoreProfileItem from "../../components/Stores/StoreProfileItem/StoreProfileItem"
import ItemList from "../../components/UI/ItemList/ItemList"
import getStores from "../../api/getStores"
import LanguageContext from "../../context/language-context"

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
      <ItemList
        type='grid'
        onDataQuery={getStores}
        renderItem={StoreProfileItem}
      />
    </>
  )
}

export default SectionMore2Love
