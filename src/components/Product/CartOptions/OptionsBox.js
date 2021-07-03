import React from 'react'

import classes from './OptionsBox.module.css'

import OptionCategory from './OptionCategory'

const OptionsBox = props => {
    const { optionCategories } = props

    return (
      <div className={classes.container}>
        {optionCategories.map(category => (
          <OptionCategory category={category} />
        ))}
      </div>
    )
}

export default OptionsBox