import React, { useEffect, useRef, useState } from "react"

import classes from "./ListView.module.css"
import Button from "../Button/Button"

const ListView = props => {
  const containerRef = useRef()
  const [childMrgin, setChildMrgin] = useState(0)
  const { childWidth, cols } = props
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
          <Button>Load More</Button>
        </div>
      )
  }

  return (
    <>
      <div ref={containerRef} className={classes.listView}>
        {props.data.map((item, idx) => (
          <props.renderItem
            childWidth={childWidth}
            margin={(idx + 1) % props.cols ? childMrgin : 0}
            key={item.id}
            item={item}
          />
        ))}
      </div>
      {actionBar}
    </>
  )
}

export default ListView
