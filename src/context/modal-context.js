import React from "react"

const ModalContext = React.createContext({
  modalState: false,
  showModal: () => {},
  hideModal: () => {}
})

export default ModalContext
