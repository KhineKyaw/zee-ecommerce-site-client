import React, { useEffect, useRef, useState } from "react"

import ProductItem from "../ProductItem/ProductItem"
import classes from "./ProductList.module.css"

const ProductList = props => {
  const containerRef = useRef()
  const [childMrgin, setChildMrgin] = useState(0)
  const { childWidth, cols } = props

  useEffect(() => {
    const parentWidth = containerRef.current.offsetWidth
    setChildMrgin((parentWidth - cols * childWidth) / (cols - 1))
  }, [containerRef, childWidth, cols])

  return (
    <div ref={containerRef} className={classes.productList}>
      {props.data.map((item, idx) => (
        <ProductItem
          margin={(idx + 1) % props.cols ? childMrgin : 0}
          key={item.id}
          product={item}
        />
      ))}
    </div>
  )
}

export default ProductList
