import React from "react"

import classes from "./Pagination.module.css"

const DEFAULT_ITEM_COUNT_PER_PAGE = 4

const Pagination = props => {
  const { dataLength, onSelect, onClickNext, onClickPrev } = props
  let activePage = +props.activePage || 1

  const pageLength = Math.floor(dataLength / DEFAULT_ITEM_COUNT_PER_PAGE)
  const btnArray = Array.from({ length: pageLength }, (_, i) => i + 1)

  const btnPrev = (
    <button disabled={activePage <= 1} onClick={onClickPrev}>
      <ion-icon name='chevron-back-outline'></ion-icon>
    </button>
  )

  const btnNext = (
    <button disabled={pageLength === activePage} onClick={onClickNext}>
      <ion-icon name='chevron-forward-outline'></ion-icon>
    </button>
  )

  return (
    <div className={classes.pagination}>
      {btnPrev}
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
      {btnNext}
    </div>
  )
}

export default Pagination
