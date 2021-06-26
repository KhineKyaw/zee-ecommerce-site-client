import { promotions } from "./data"

const getPromotions = () => {
  return promotions.map((p, id) => {
    return { ...p, id }
  })
}

export default getPromotions