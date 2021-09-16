import React from "react"

import classes from "./Pagination.module.css"

const DEFAULT_ITEM_COUNT_PER_PAGE = 4
const SHOWN_PAGE_LIMIT = 5
const SHOWN_PAGE_TAIL = 2
const END_BREAK = SHOWN_PAGE_LIMIT - SHOWN_PAGE_TAIL

const Pagination = props => {
  const { dataLength, onSelect } = props
  const activePage = props.activePage || 0
  const activePagePlus = activePage + 1
  const pageLength = Math.floor(dataLength / DEFAULT_ITEM_COUNT_PER_PAGE)
  const showEtc = pageLength > SHOWN_PAGE_LIMIT
  let [showStartEtc, showEndEtc] = [false, false]
  const pages = Array.from({ length: pageLength }, (_, i) => i + 1)
  let startPage = 0
  let endPage = pageLength

  if (activePagePlus >= SHOWN_PAGE_LIMIT) {
    startPage = activePage - SHOWN_PAGE_TAIL
    showStartEtc = true
  }

  if (activePage < pageLength - SHOWN_PAGE_LIMIT) {
    endPage =
      activePagePlus <= END_BREAK
        ? SHOWN_PAGE_LIMIT
        : activePagePlus + SHOWN_PAGE_TAIL
    showEndEtc = true
  }
  const focusRange = showEtc ? pages.slice(startPage, endPage) : pages

  const startEtc = showStartEtc ? (
    <>
      <button onClick={onSelect.bind(null, 1)} className={classes.normal}>
        1
      </button>
      <span>...</span>
    </>
  ) : null

  const endEtc = showEndEtc ? (
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
      <button disabled={activePagePlus <= 1} onClick={props.onClickPrev}>
        <ion-icon name='chevron-back-outline'></ion-icon>
      </button>
      {startEtc}
      {focusRange.map(i => {
        return (
          <button
            onClick={onSelect.bind(null, i)}
            className={i === activePagePlus ? classes.active : classes.normal}
            key={i}>
            {i}
          </button>
        )
      })}
      {endEtc}
      <button
        disabled={pageLength === activePagePlus}
        onClick={props.onClickNext}>
        <ion-icon name='chevron-forward-outline'></ion-icon>
      </button>
    </div>
  )
}

export default Pagination
