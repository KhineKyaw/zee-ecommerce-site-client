import React, { useEffect, useRef, useState } from "react"

import classes from "./ListView.module.css"
import Button from "../Button/Button"

const ListView = props => {
  const containerRef = useRef()
  const [childMrgin, setChildMrgin] = useState(0)
  const { childWidth, childHeight, cols } = props
  var actionBar = null

  useEffect(() => {
    const parentWidth = containerRef.current.offsetWidth
    setChildMrgin((parentWidth - cols * childWidth) / (cols - 1))
  }, [containerRef, childWidth, cols])

  if (props.type) {
    actionBar =
      props.type === "pagination" ? (
        <div>Pagination</div>
      ) : (
        <div className={classes.moreAction}>
          <Button onClick={props.onButtonClick}>Load More</Button>
        </div>
      )
  }

  const theList = props.data ? (
    props.data.map((item, idx) => (
      <props.renderItem
        width={childWidth}
        height={childHeight}
        margin={childMrgin}
        lastChild={!((idx + 1) % props.cols)}
        key={item.id}
        item={item}
      />
    ))
  ) : (
    <p>Loading...</p>
  )

  return (
    <>
      <div ref={containerRef} className={classes.listView}>
        {theList}
      </div>
      {actionBar}
    </>
  )
}

export default ListView
