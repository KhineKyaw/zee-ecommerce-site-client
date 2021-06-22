import React from "react"

import Card from '../UI/Card/Card'

import classes from "./Banner.module.css"

import { promotions } from '../../api/data'

const Banner = () => {
  return (
    <div className={classes["banner-container"]}>
      <Card className={classes["slide"]} style={{left: '50%', zIndex: 3, transform: 'translateX(-50%) scale(1)'}}>
        <img src={promotions[0].image} alt={promotions[0].title}/>
      </Card>
      <Card className={classes["slide"]} style={{left: '43%', zIndex: 2, transform: 'translateX(-50%) scale(0.9)'}}>
        <img src={promotions[1].image} alt={promotions[1].title}/>
      </Card>
      <Card className={classes["slide"]} style={{left: '57%', zIndex: 2, transform: 'translateX(-50%) scale(0.9)'}}>
        <img src={promotions[2].image} alt={promotions[2].title}/>
      </Card>
      <Card className={classes["slide"]} style={{left: '36%', zIndex: 1, transform: 'translateX(-50%) scale(0.8)'}}>
        <img src={promotions[3].image} alt={promotions[3].title}/>
      </Card>
      <Card className={classes["slide"]} style={{left: '64%', zIndex: 1, transform: 'translateX(-50%) scale(0.8)'}}>
        <img src={promotions[4].image} alt={promotions[4].title}/>
      </Card>
      <Card className={classes["slide"]} style={{left: '50%', zIndex: 0, transform: 'translateX(-50%) scale(0)'}}>
        <img src={promotions[4].image} alt={promotions[4].title}/>
      </Card>
      <div className={classes.prev} onClick={() => null}>&#10094;</div>
      <div className={classes.next} onClick={() => null}>&#10095;</div>
    </div>
  )
}

export default Banner
