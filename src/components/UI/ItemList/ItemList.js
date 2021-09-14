import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import classes from "./ItemList.module.css"
import Pagination from "./Pagination/Pagination"
import Button from "../Button/Button"

const GRID = "grid"
const PAGER = "pager"

const ItemList = props => {
  const activePage = +props.activePage || 1
  const { onDataQuery, onLoadMore, type, startCols, pagintionType } = props
  const [data, setData] = useState({ items: [] })
  const history = useHistory()
  const listStyle = type === "grid" ? `${type}-${startCols || 4}` : type

  const handleClick = id => {
    history.push(`products?page=${id}`)
  }

  const handleNextClick = () => {
    if (activePage === data.pageCount) return
    handleClick(activePage + 1)
  }

  const handlePrevClick = () => {
    if (activePage === 1) return
    handleClick(activePage - 1)
  }

  const handleLoadMore = () => {
    onLoadMore()
  }

  useEffect(() => {
    if (pagintionType === PAGER) {
      setData({
        pageCount: 40,
        items: onDataQuery(activePage)
      })
    } else {
      setData(prev => {
        return { items: [...prev.items, ...onDataQuery(activePage)] }
      })
    }
  }, [activePage, onDataQuery, pagintionType])

  const List = (
    <div className={classes[listStyle]}>
      {data.items &&
        data.items.map(item => {
          return (
            <div className={classes[`${type}__item`]} key={item.id}>
              <props.renderItem item={item} />
            </div>
          )
        })}
    </div>
  )

  const actions = pagintionType ? (
    pagintionType === "pager" ? (
      <Pagination
        data={data}
        activePage={activePage}
        onClick={handleClick}
        onClickNext={handleNextClick}
        onClickPrev={handlePrevClick}
      />
    ) : (
      <Button onClick={handleLoadMore}>Load More</Button>
    )
  ) : null

  return (
    <>
      {List}
      <div className={classes["load-more"]}>{actions}</div>
    </>
  )
}

export default ItemList
