import { categories } from "./data"

const getCategory = id => {
  return categories.reduce((obj, item) => {
    if (item.id === id) return item
    return obj
  }, {})
}

export default getCategory
