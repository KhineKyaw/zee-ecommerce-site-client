import React, { useEffect, useRef, useState } from "react"

import classes from "./ListView.module.css"

const ListView = props => {
  const containerRef = useRef()
  const [childMrgin, setChildMrgin] = useState(0)
  const { childWidth, cols } = props

  useEffect(() => {
    const parentWidth = containerRef.current.offsetWidth
    setChildMrgin((parentWidth - cols * childWidth) / (cols - 1))
  }, [containerRef, childWidth, cols])

  return (
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
  )
}

export default ListView
