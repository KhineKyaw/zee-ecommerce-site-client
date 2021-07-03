import React from 'react'

import classes from './OptionsBox.module.css'

import Card from '../../UI/Card/Card'

const OptionsBox = props => {
    const { optionCategories } = props

    return (
      <div className={classes.container}>
        {optionCategories.map(category => (
          <div className={classes.category}>
            <span className={classes.category_name}>{category.name}:</span>
            <span className={classes.option_selected}>{category.options[0].value}</span>
            <div className={classes.option_container}>
              {category.options.map(option => (
                <Card className={`${classes.option} ${classes.selected}`}>
                  {option.image ? (
                    <img className={classes.option_image} src={option.image}></img>
                  ) : (
                    option.value[0]
                  )}
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
}

export default OptionsBox