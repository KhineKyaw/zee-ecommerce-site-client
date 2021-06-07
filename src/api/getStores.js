import { stores } from "./data"

const getStores = () => {
  return stores.map((s, id) => {
    return { ...s, id }
  })
}

export default getStores
