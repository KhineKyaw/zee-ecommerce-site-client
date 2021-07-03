import React, { useContext } from "react"

import ModalContext from "../../../context/modal-context"
import Button from "../../UI/Button/Button"

const AddToCartButton = props => {
  const { showModal } = useContext(ModalContext)

  const addToCart = () => {
    props.onClick()
    showModal()
  }

  return (
    <Button onClick={addToCart} type='outline'>
      ADD TO CART
    </Button>
  )
}

export default AddToCartButton
