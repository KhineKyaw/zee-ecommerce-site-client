import React from "react"
import { useHistory } from "react-router-dom"

import classes from "./ItemList.module.css"

const DEFAULT_ITEM_COUNT_PER_PAGE = 4

const ItemList = props => {
  const activePage = props.activePage || 1
  const pages = Array.from(
    { length: Math.floor(props.data.length / DEFAULT_ITEM_COUNT_PER_PAGE) },
    (_, i) => i + 1
  )

  const history = useHistory()

  const handleClick = id => {
    history.push(`products?page=${id}`)
  }

  const Pagination = () => {
    return (
      <div className={classes.pagination}>
        <button>
          <ion-icon name='chevron-back-outline'></ion-icon>
        </button>
        {pages.map(i => {
          return (
            <button
              onClick={handleClick.bind(null, i)}
              className={i === +activePage ? classes.active : classes.normal}
              key={i}>
              {i}
            </button>
          )
        })}
        <button>
          <ion-icon name='chevron-forward-outline'></ion-icon>
        </button>
      </div>
    )
  }

  return (
    <>
      <div className={classes.itemlist}>
        {props.data.slice(0, DEFAULT_ITEM_COUNT_PER_PAGE).map(item => {
          return (
            <div className={classes.item} key={item.id}>
              <props.renderItem item={item} />
            </div>
          )
        })}
      </div>
      <Pagination />
    </>
  )
}

export default ItemList
