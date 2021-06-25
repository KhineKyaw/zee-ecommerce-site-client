import React, { useState } from "react"

import classes from "./ImageView.module.css"

const ImageView = props => {
  const [selectedImageIndex, selectImageindex] = useState(0)
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 })
  const [scaleImage, setScaleImage] = useState({ x: 1, y: 1 })

  const onSelect = id => () => {
    selectImageindex(id)
  }

  const onImageZoom = e => {
    var rect = e.target.getBoundingClientRect()
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top
    setImgPos({ x: x, y: y })
  }

  const onMouseLeave = () => {
    setImgPos({ x: 0, y: 0 })
    setScaleImage({ x: 1, y: 1 })
  }

  const onMouseEnter = () => {
    setImgPos({ x: 0, y: 0 })
    setScaleImage({ x: 1.46, y: 1.46 })
  }

  return (
    <div className={classes.view}>
      <div className={classes.imageMagnifier}>
        <img
          style={{
            transformOrigin: `${imgPos.x}px ${imgPos.y}px`,
            transform: `scale(${scaleImage.x}, ${scaleImage.y})`
          }}
          src={props.data[selectedImageIndex]}
        />
        <div
          className={classes.eventListenerDiv}
          onMouseMove={onImageZoom}
          onMouseEnter={onMouseEnter}
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
