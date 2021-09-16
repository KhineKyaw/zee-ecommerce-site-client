import React from "react"

import classes from "./Pagination.module.css"

const DEFAULT_ITEM_COUNT_PER_PAGE = 4

const Pagination = props => {
  const { dataLength, onSelect } = props
  let activePage = +props.activePage || 1

  const pageLength = Math.floor(dataLength / DEFAULT_ITEM_COUNT_PER_PAGE)
  const btnArray = Array.from({ length: pageLength }, (_, i) => i + 1)

  return (
    <div className={classes.pagination}>
      {btnArray.map(i => {
        return (
          <button
            onClick={onSelect.bind(null, i)}
            className={i === activePage ? classes.active : classes.normal}
            key={i}>
            {i}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination
