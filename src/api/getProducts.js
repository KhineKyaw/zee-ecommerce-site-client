import { products } from "./data"
import { shuffle } from "../utils"

const DEFAULT_PRODUCT_COUNT = 8

const getProducts = (seed = 1) => {
  return shuffle(
    products.map((pd, id) => {
      return {
        id: id + (seed - 1) * DEFAULT_PRODUCT_COUNT,
        title: pd.title,
        imageUrl: pd.images[0],
        price: pd.items[0].price
      }
    }),
    seed
  )
}

export default getProducts
