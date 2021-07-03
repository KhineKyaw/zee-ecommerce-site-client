import React, { useContext } from "react"

import ModalContext from "../../../context/modal-context"
import Modal from "../../UI/Modal/Modal"
import classes from "./AddedToCartModal.module.css"

const AddedToCartModal = () => {
  const { modalState, hideModal } = useContext(ModalContext)

  const onAnimationEnd = () => {
    hideModal()
  }

  return (
    <Modal
      className={classes.addedToCartModal}
      show={modalState.addedToCart}
      onBackdropClick={hideModal}>
      <div onAnimationEnd={onAnimationEnd} className={classes.iconContainer}>
        <ion-icon name='checkmark-outline'></ion-icon>
      </div>
    </Modal>
  )
}

export default AddedToCartModal
