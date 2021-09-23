import React, { useEffect, useState } from "react"

import { numberWithCommas } from "../../../utils"

import OptionsBox from "./OptionsBox"
import OptionCategory from "./OptionCategory"

import Button from "../../UI/Button/Button"
import IconButton from "../../UI/IconButton/IconButton"
import RatingStars from "../../UI/RatingStars/RatingStars"

import classes from "./CartOptions.module.css"

const CartOptions = props => {
  const { data } = props
  const [itemsFiltered, setItemsFiltered] = useState(data.items)
  const maxAvailableItems = itemsFiltered.reduce(
    (acc, item) => acc + item.count,
    0
  )
  const minAvailableItems = Math.min(1, maxAvailableItems)
  const [optionsSelected, setOptionsSelected] = useState(
    data.optionCategories.map(() => null)
  )
  const [quantity, setQuantity] = useState(minAvailableItems)

  useEffect(() => {
    const idsSelected = optionsSelected
      .map(
        (optionIndex, categoryIndex) =>
          optionIndex !== null &&
          data.optionCategories[categoryIndex].options[optionIndex].id
      )
      .filter(id => id !== false)
    const nextItemsFiltered = data.items.filter(item => {
      return idsSelected.every(id => {
        return item.options.find(option => option.id === id)
      })
    })
    setItemsFiltered(nextItemsFiltered)
  }, [optionsSelected, data])

  useEffect(() => {
    setQuantity(minAvailableItems)
  }, [maxAvailableItems, minAvailableItems])

  const handleOptionClick = (categoryIndex, optionIndex) => {
    setOptionsSelected(prevState =>
      prevState.map((prevOptionIndex, i) =>
        i === categoryIndex
          ? prevOptionIndex === optionIndex
            ? null
            : optionIndex
          : prevOptionIndex
      )
    )
  }

  const handleQuantityChange = amount => {
    setQuantity(prevState => {
      let nextQuantity = amount + prevState
      if (nextQuantity <= 0) {
        nextQuantity = 1
      }
      if (nextQuantity > maxAvailableItems) {
        nextQuantity = maxAvailableItems
      }
      return nextQuantity
    })
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{data.title}</h3>
      <div className={classes.rating_box}>
        <RatingStars rating={data.rating} />
        <span>
          <a href='#reviews'>10 reviews</a>
        </span>
      </div>
      <div className={classes.splitter}></div>
      <OptionsBox>
        {data.optionCategories.map((category, categoryIndex) => (
          <OptionCategory
            key={category.name}
            category={category}
            selectedOption={optionsSelected[categoryIndex]}
            handleOptionClick={optionIndex =>
              handleOptionClick(categoryIndex, optionIndex)
            }
          />
        ))}
      </OptionsBox>
      <div className={classes.splitter}></div>
      <h1 className={classes.price}>
        Ks{" "}
        {itemsFiltered.length > 0
          ? numberWithCommas(itemsFiltered[0].price)
          : data.items.length > 0
          ? numberWithCommas(data.items[0].price)
          : "NaN"}
      </h1>
      <div className={classes.splitter}></div>
      <div className={classes.quantity_container}>
        <span className={classes.quantity_label}>Quantity</span>
        <div className={classes.quantity_controller}>
          <IconButton
            name='remove'
            disabled={quantity <= 1}
            onClick={() => handleQuantityChange(-1)}
          />
          <span className={classes.quantity_value}>{quantity}</span>
          <IconButton
            name='add'
            disabled={quantity === maxAvailableItems}
            onClick={() => handleQuantityChange(+1)}
          />
        </div>
        <span className={classes.quantity_left}>
          {maxAvailableItems} items left
        </span>
      </div>
      <div className={classes.delivery_info}>
        <h5>Home Delivery: Ks {`1,000`}</h5>
        <p>
          to {`Yangon, Mayangone`} <a href='#location'>Change</a>
        </p>
        <span className={classes.text_secondary}>
          on {10} to {20} days
        </span>
      </div>
      <div className={classes.actions}>
        <Button className={classes.action_button}>Buy Now</Button>
        <Button type='outline' className={classes.action_button}>
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default CartOptions
