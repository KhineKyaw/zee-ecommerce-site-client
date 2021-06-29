import React from "react"

import Button from '../../UI/Button/Button'
import Card from '../../UI/Card/Card'

import classes from "./CartOptions.module.css"

const CartOptions = props => {
  const { data } = props
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
      <div className={classes.option_container}>
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
      <div className={classes.splitter}></div>
      <h1 className={classes.price}>Ks {`19,000`}</h1>
      <div className={classes.splitter}></div>
      <div className={classes.quantity_container}>
        <span className={classes.quantity_label}>Quantity</span>
        <div className={classes.quantity_controller}>
          <ion-icon name="remove"></ion-icon>
          <span className={classes.quantity_value}>1</span>
          <ion-icon name="add"></ion-icon>
        </div>
        <span className={classes.quantity_left}>{10} items left</span>
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
