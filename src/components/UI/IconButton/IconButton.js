import React from 'react'

import classes from './IconButton.module.css'

const IconButton = props => {
    const {name, variant } = props

    const classNames = [classes.button]

    if (variant === 'outline') {
        classNames.push(classes.outline)
    } else {
        classNames.push(classes.solid)
    }

    const Props = { ...props }
    delete Props.name
    delete Props.variant

    return (
        <button className={classNames.join(' ')} {...props}>
            <ion-icon name={name}></ion-icon>
        </button>
    )
}

export default IconButton