import { reviews } from "./data"

const getReviews = () => {
  return reviews.map((p, id) => {
    return { ...p, id, name: p.user.firstname + " " + p.user.lastname }
  })
}

export default getReviews
