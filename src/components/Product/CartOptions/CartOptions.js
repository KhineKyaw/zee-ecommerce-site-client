import React, { useEffect, useState } from "react"

import { numberWithCommas } from '../../../utils'

import OptionsBox from "./OptionsBox"
import OptionCategory from './OptionCategory'

import Button from '../../UI/Button/Button'
import IconButton from '../../UI/IconButton/IconButton'

import classes from "./CartOptions.module.css"

const CartOptions = props => {
  const { data } = props
  const [selectedItems, setSelectedItems] = useState(data.items)
  const numItemsLeft = selectedItems.reduce((acc, item) => acc + item.count, 0)
  const [selectedOptions, setSelectedOptions] = useState(data.optionCategories.map(()=>null))
  const [quantity, setQuantity] = useState(Math.min(1, numItemsLeft))

  useEffect(() => {
    const optionsUnselected = selectedOptions.every((value) => value === null)
    if (optionsUnselected) {
      setSelectedItems(data.items)
    } else {
      const selectedOptionIds = selectedOptions.map((oIndex, cIndex) => oIndex !== null && data.optionCategories[cIndex].options[oIndex].id)
      const onlyIds = selectedOptionIds.filter(id => id !== false)
      const filteredItems = data.items.filter(item => {
        return onlyIds.every(id => {
          return item.options.find(option => option.id === id)
        })
      })
      setSelectedItems(filteredItems)
    }
  }, [selectedOptions])

  useEffect(() => {
    setQuantity(Math.min(1, numItemsLeft))
  }, [numItemsLeft])

  const handleOptionClick = (cIndex, oIndex) => {
    setSelectedOptions(prev => 
      prev.map((option, i) => i === cIndex ? (option === oIndex ? null : oIndex) : option)
    )
  }

  const handleQuantityChange = amount => {
    setQuantity(prev => {
      let nextQuantity = amount + prev
      if (nextQuantity <= 0) {
        nextQuantity = 1
      }
      if (nextQuantity > numItemsLeft) {
        nextQuantity = numItemsLeft
      }
      return nextQuantity
    })
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{data.title}</h3>
      <div className={classes.rating_box}>
        <div className={classes.rating_star}>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>
        <span><a href="#reviews">10 reviews</a></span>
      </div>
      <div className={classes.splitter}></div>
      <OptionsBox>
        {data.optionCategories.map((category, cIndex) => (
          <OptionCategory category={category} selectedOption={selectedOptions[cIndex]} handleOptionClick={(i) => handleOptionClick(cIndex, i)} />
        ))}
      </OptionsBox>
      <div className={classes.splitter}></div>
      <h1 className={classes.price}>Ks {numberWithCommas(selectedItems && selectedItems[0].price)}</h1>
      <div className={classes.splitter}></div>
      <div className={classes.quantity_container}>
        <span className={classes.quantity_label}>Quantity</span>
        <div className={classes.quantity_controller}>
          <IconButton name="remove" disabled={quantity <= 1} onClick={() => handleQuantityChange(-1)} />
          <span className={classes.quantity_value}>{quantity}</span>
          <IconButton name="add" disabled={quantity===numItemsLeft} onClick={() => handleQuantityChange(+1)} />
        </div>
        <span className={classes.quantity_left}>{numItemsLeft} items left</span>
      </div>
      <div className={classes.delivery_info}>
        <h5>Home Delivery: Ks {`1,000`}</h5>
        <p>to {`Yangon, Mayangone`} <a href="#">Change</a></p>
        <span className={classes.text_secondary}>on {10} to {20} days</span>
      </div>
      <div className={classes.actions}>
        <Button className={classes.action_button}>Buy Now</Button>
        <Button type="outline" className={classes.action_button}>Add to Cart</Button>
      </div>
    </div>
  )
}

export default CartOptions
