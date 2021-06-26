import React, { useState } from "react"

import classes from "./ImageView.module.css"

const SCALE = 1.46

const ImageView = props => {
  const [selectedImageIndex, selectImageindex] = useState(0)
  const [transformOrigin, setTransformOrigin] = useState({ x: 0, y: 0 })
  const [scaleImage, setScaleImage] = useState({ x: 1, y: 1 })

  const onSelect = id => () => {
    selectImageindex(id)
  }

  const onImageHover = e => {
    var rect = e.target.getBoundingClientRect()
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top
    setTransformOrigin({ x: x, y: y })
  }

  const onMouseLeave = () => {
    setTransformOrigin({ x: 0, y: 0 })
    setScaleImage({ x: 1, y: 1 })
  }

  const onMouseEnter = () => {
    setTransformOrigin({ x: 0, y: 0 })
    setScaleImage({ x: SCALE, y: SCALE })
  }

  return (
    <div className={classes.view}>
      <div className={classes.imageMagnifier}>
        <img
          style={{
            transformOrigin: `${transformOrigin.x}px ${transformOrigin.y}px`,
            transform: `scale(${scaleImage.x}, ${scaleImage.y})`
          }}
          src={props.data[selectedImageIndex]}
        />
        <div
          className={classes.eventListenerDiv}
          onMouseEnter={onMouseEnter}
          onMouseMove={onImageHover}
          onMouseLeave={onMouseLeave}></div>
      </div>
      <ul className={classes.imagesWrapper}>
        {props.data.map((item, id) => (
          <li
            onMouseEnter={onSelect(id)}
            key={id}
            className={
              selectedImageIndex === id ? classes.selected : classes.plain_li
            }
            style={{
              backgroundImage: `url('${item}')`
            }}></li>
        ))}
      </ul>
    </div>
  )
}

export default ImageView
