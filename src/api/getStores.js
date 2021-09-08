import { stores } from "./data";

const getStores = () => {
  return stores.map((s, id) => {
    return { ...s, id };
  });
};

export const getStore = (_id) => {
  return getStores().find(({ id }) => id === _id);
};

export default getStores;
