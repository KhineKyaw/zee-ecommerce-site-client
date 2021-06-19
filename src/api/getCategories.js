import { categories } from "./data"

const getCategories = () => {
  return categories.map((s, id) => {
    return { ...s, id }
  })
}

export default getCategories
