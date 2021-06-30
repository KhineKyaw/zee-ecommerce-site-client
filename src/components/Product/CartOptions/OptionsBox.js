import React from 'react'

import classes from './OptionsBox.module.css'

import Card from '../../UI/Card/Card'

const OptionsBox = props => {
    const { data } = props

    return (
      <div className={classes.container}>
        <div className={classes.option}>
          <span className={classes.option_name}>Color:</span>
          <span className={classes.option_item_value}>{data.items[0].options[0].value}</span>
          <div className={classes.option_item_container}>
            <Card className={`${classes.option_item} ${classes.selected}`}>
              <img className={classes.option_item_image} src={data.items[0].options[0].image}></img>
            </Card>
            <Card className={classes.option_item}>
              <img className={classes.option_item_image} src={data.items[1].options[0].image}></img>
            </Card>
          </div>
        </div>
        <div className={classes.option}>
          <span className={classes.option_name}>Size:</span>
          <span className={classes.option_item_value}>{data.items[0].options[1].value}</span>
          <div className={classes.option_item_container}>
            <Card className={`${classes.option_item} ${classes.selected}`}>
              {data.items[0].options[1].value[0]}
            </Card>
            <Card className={classes.option_item}>
              {data.items[1].options[1].value[0]}
            </Card>
          </div>
        </div>
      </div>
    )
}

export default OptionsBox