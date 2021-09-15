import { products } from "./data";
import { shuffle } from "../utils";

const getAllProducts = () => {
  let fake_products = [];
  for (let i = 0; i < 10; i++) {
    fake_products.push(
      shuffle(
        products.map((pd, id) => {
          return {
            ...pd,
            id: fake_products.length + id,
            title: pd.title,
            imageUrl: pd.images[0],
            price: pd.items[0].price,
          };
        }),
        i
      )
    );
  }
  return fake_products;
};

const getProducts = (start = 0, count = 10, category_id) => {
  let result = getAllProducts();
  const length = result.length;
  if (category_id)
    result = result.filter(({ categoryId }) => category_id === categoryId);
  if (start < 0) {
    result = result.reverse();
    start = -start - 1;
    result = result.slice(start, start + count);
    result = result.reverse();
  } else {
    result = result.slice(start, start + count);
  }
  const nextId = result.length && start + count;
  return {
    result,
    nextId,
    length,
  };
};

export default getProducts;
