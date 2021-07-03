import React, { useState } from 'react'

import classes from './OptionCategory.module.css'

import Card from '../../UI/Card/Card'

const OptionCategory = (props) => {
    const [index, setIndex] = useState(0)

    const {category} = props

    return (
        <div className={classes.category}>
            <span className={classes.category_name}>{category.name}:</span>
            <span className={classes.option_selected}>{category.options[index].value}</span>
            <div className={classes.option_container}>
                {category.options.map((option, optionIndex) => (
                <Card className={`${classes.option} ${optionIndex === index && classes.selected}`}>
                    {option.image ? (
                    <img className={classes.option_image} src={option.image}></img>
                    ) : (
                    option.value[0]
                    )}
                </Card>
                ))}
            </div>
        </div>
    )
}

export default OptionCategory