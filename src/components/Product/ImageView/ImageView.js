import React, { useState } from "react"

import classes from "./ImageView.module.css"

const ImageView = props => {
  const [selectedImageIndex, selectImageindex] = useState(0)

  const onSelect = id => () => {
    selectImageindex(id)
  }

  return (
    <div className={classes.view}>
      <div className={classes.imageMagnifier}>
        <img src={props.data[selectedImageIndex]} />
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
