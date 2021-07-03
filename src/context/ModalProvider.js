import React, { useReducer } from "react"
import ModalContext from "./modal-context"

const SHOW = "SHOW"
const HIDE = "HIDE"
const defaultModalState = {
  addedToCart: false
}

const modalReducer = (state, action) => {
  if (action.type === SHOW) {
    return { ...state, addedToCart: true }
  }
  if (action.type === HIDE) {
    return { ...state, addedToCart: false }
  }
  return defaultModalState
}

const ModalProvider = props => {
  const [modalState, dispatchModalAction] = useReducer(
    modalReducer,
    defaultModalState
  )

  const showModalHandler = () => {
    dispatchModalAction({ type: SHOW })
  }

  const hideModalHandler = () => {
    dispatchModalAction({ type: HIDE })
  }

  const modalContext = {
    modalState: modalState,
    showModal: showModalHandler,
    hideModal: hideModalHandler
  }

  return (
    <ModalContext.Provider value={modalContext}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
