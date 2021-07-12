import React from 'react'

import classes from './OptionsBox.module.css'

const OptionsBox = props => {
    return (
      <div className={classes.container}>
        {props.children}
      </div>
    )
}

export default OptionsBox