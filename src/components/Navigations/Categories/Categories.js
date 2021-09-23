import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Categories.module.css";
import getCategories from "../../../api/getCategories";

const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  const CategoriesList = categories
    ? categories.map((item) => {
        return (
          <Link to={"/products?categoryId=" + item.id} key={item.id}>
            <p>{item.name}</p>
          </Link>
        );
      })
    : "Loading";

  return (
    <div className={classes.categories}>
      <h5>Categories</h5>
      {CategoriesList}
    </div>
  );
};

export default Categories;
