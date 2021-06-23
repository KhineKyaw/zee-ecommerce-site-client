import { products } from "./data"

const getProducts = id => {
  return products.filter((p, idx) => id === idx.toString())[0]
}

export default getProducts
