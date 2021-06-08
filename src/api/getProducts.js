import { products } from "./data"

const getProducts = (i = 0) => {
  return products.map((pd, id) => {
    return {
      id: id + i,
      title: pd.title,
      imageUrl: pd.images[0],
      price: pd.items[0].price
    }
  })
}

export default getProducts
