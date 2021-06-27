import React, { useContext, useReducer } from "react"

import ProductsSectionBar from "../../components/Product/ProductsSectionBar/ProductsSectionBar"
import ListView from "../../components/UI/ListView/ListView"
import ProductItem from "../../components/Product/ProductItem/ProductItem"

import getProducts from "../../api/getProducts"
import LanguageContext from "../../context/language-context"

const initialPageState = {
  data: getProducts(0),
  page: 0
}

const pageReducer = (state, action) => {
  switch (action.type) {
    case "nextpage":
      const page = state.page + 100
      return {
        data: [...state.data, ...getProducts(page)],
        page: page
      }
    default:
      throw new Error()
  }
}

const SectionMore2Love = () => {
  const { languageDict: texts } = useContext(LanguageContext)
  const [pageState, dispatchPageState] = useReducer(
    pageReducer,
    initialPageState
  )

  const loadMoreHandler = () => {
    dispatchPageState({ type: "nextpage" })
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
        data={pageState.data}
      />
    </>
  )
}

export default SectionMore2Love
