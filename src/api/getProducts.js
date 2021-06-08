import { products } from "./data"

const getProducts = () => {
  return products.map((pd, id) => {
    return {
      id,
      title: pd.title,
      imageUrl: pd.images[0],
      price: pd.items[0].price
    }
  })
}

export default getProducts