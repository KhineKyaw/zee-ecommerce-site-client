import React from "react"

import classes from "./Pagination.module.css"

const SHOWN_PAGE_LIMIT = 5
const SHOWN_PAGE_TAIL = 3

const Pagination = props => {
  const { dataLength, onSelect, onClickNext, onClickPrev, itemsPerPage } = props
  let activePage = +props.activePage || 1
  const pageLength = Math.ceil(dataLength / itemsPerPage)

  let startPage = 0
  let endPage = SHOWN_PAGE_LIMIT

  if (activePage > 3) {
    startPage = activePage - SHOWN_PAGE_TAIL
    endPage = activePage + SHOWN_PAGE_TAIL
  }

  if (activePage >= pageLength - SHOWN_PAGE_TAIL) {
    endPage = pageLength
  }

  let btnArray = Array.from({ length: pageLength }, (_, i) => i + 1)
  let overPageLimit = pageLength > SHOWN_PAGE_LIMIT
  btnArray = overPageLimit ? btnArray.slice(startPage, endPage) : btnArray

  const btnPrev = (
    <button disabled={activePage <= 1} onClick={onClickPrev}>
      <ion-icon name='chevron-back-outline'></ion-icon>
    </button>
  )

  const btnNext = (
    <button
      disabled={!pageLength || pageLength === activePage}
      onClick={onClickNext}>
      <ion-icon name='chevron-forward-outline'></ion-icon>
    </button>
  )

  const startBtn =
    overPageLimit && activePage > 3 ? (
      <>
        <button onClick={onSelect.bind(null, 1)} className={classes.normal}>
          1
        </button>
        <span>...</span>
      </>
    ) : null

  const endBtn =
    overPageLimit && activePage + SHOWN_PAGE_TAIL < pageLength ? (
      <>
        <span>...</span>
        <button
          onClick={onSelect.bind(null, pageLength)}
          className={classes.normal}>
          {pageLength}
        </button>
      </>
    ) : null

  return (
    <div className={classes.pagination}>
      {btnPrev}
      {startBtn}
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
      {endBtn}
      {btnNext}
    </div>
  )
}

export default Pagination
