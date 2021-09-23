import React, { useState } from "react"

import classes from "./ImageLoader.module.css"

const ImageLoader = props => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleError = () => {
    setLoading(false)
    setError(true)
  }

  return (
    <>
      {loading && (
        <div className={props.className} style={{ position: "relative" }}>
          <div className={classes.loader}></div>
        </div>
      )}
      {error && (
        <div className={props.className} style={{ position: "relative" }}>
          <div className={classes.error}>
            <ion-icon
              style={{ margin: "auto", display: "block" }}
              name='alert-circle-sharp'
              size='large'></ion-icon>
            <p>Error loading image.</p>
          </div>
        </div>
      )}
      <img
        {...props}
        alt=''
        style={loading || error ? { display: "none" } : {}}
        onLoad={() => setLoading(false)}
        onError={handleError}
      />
    </>
  )
}

export default ImageLoader
