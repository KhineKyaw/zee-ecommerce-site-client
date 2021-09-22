import { products } from "./data";
import { shuffle } from "../utils";

const getAllProducts = () => {
  let fake_products = [];
  for (let i = 0; i < 10; i++) {
    const offset = fake_products.length;
    shuffle(
      products.map((pd, id) => {
        return {
          ...pd,
          title: pd.title,
          imageUrl: pd.images[0],
          price: pd.items[0].price,
        };
      }),
      i
    ).forEach((p, i) =>
      fake_products.push({
        ...p,
        id: offset + i,
      })
    );
  }
  return fake_products;
};

const getProducts = (start = 0, count = 10, category_id) => {
  let result = getAllProducts();
  category_id = Number(category_id);
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
  const length = result.length;
  return {
    result,
    nextId,
    length,
  };
};

export default getProducts;
