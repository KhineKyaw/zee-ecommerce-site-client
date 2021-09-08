import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import classes from "./ItemList.module.css"

const DEFAULT_ITEM_COUNT_PER_PAGE = 4

const Pagination = props => {
  const { activePage } = props
  const pageLength = Math.floor(
    props.data.pageCount / DEFAULT_ITEM_COUNT_PER_PAGE
  )
  const pages = Array.from({ length: pageLength }, (_, i) => i + 1)

  return (
    <div className={classes.pagination}>
      <button disabled={activePage <= 1} onClick={props.onClickPrev}>
        <ion-icon name='chevron-back-outline'></ion-icon>
      </button>
      {pages.map(i => {
        return (
          <button
            onClick={props.onClick.bind(null, i)}
            className={i === activePage ? classes.active : classes.normal}
            key={i}>
            {i}
          </button>
        )
      })}
      <button disabled={pageLength === activePage} onClick={props.onClickNext}>
        <ion-icon name='chevron-forward-outline'></ion-icon>
      </button>
    </div>
  )
}

const ItemList = props => {
  const activePage = +props.activePage || 1
  const { onDataQuery } = props
  const [data, setData] = useState({})
  const history = useHistory()

  const handleClick = id => {
    history.push(`products?page=${id}`)
    // setData({
    //   count: 20,
    //   items: props.onDataQuery(0, id)
    // })
  }

  const handleNextClick = () => {
    if (activePage === data.pageCount) return
    handleClick(activePage + 1)
  }

  const handlePrevClick = () => {
    if (activePage === 1) return
    handleClick(activePage - 1)
  }

  useEffect(() => {
    setData({
      pageCount: 20,
      items: onDataQuery(0, activePage)
    })
  }, [activePage, onDataQuery])

  return (
    <>
      <div className={classes.itemlist}>
        {data.items &&
          data.items.map(item => {
            return (
              <div className={classes.item} key={item.id}>
                <props.renderItem item={item} />
              </div>
            )
          })}
      </div>
      <Pagination
        data={data}
        activePage={activePage}
        onClick={handleClick}
        onClickNext={handleNextClick}
        onClickPrev={handlePrevClick}
      />
    </>
  )
}

export default ItemList
