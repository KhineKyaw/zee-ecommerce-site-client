import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import classes from "./ItemList.module.css"
import Pagination from "./Pagination/Pagination"

const ItemList = props => {
  const activePage = +props.activePage || 1
  const { onDataQuery } = props
  const [data, setData] = useState({})
  const history = useHistory()

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

  useEffect(() => {
    setData({
      pageCount: 40,
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
