import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import classes from "./ProductsCategory.module.css";
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb";
import StickyContainer from "../components/UI/StickyContainer/StickyContainer";
import Layout from "../hoc/Layout";
import ProductItem from "../components/Product/ProductItem/ProductItem";
import Categories from "../components/Navigations/Categories1/Categories";
import ViewSwitch from "../components/Products/ViewSwitch/ViewSwitch";
import GridView from "../components/UI/GridView/GridView";
import Pagination from "../components/UI/Pagination/Pagination";
import getProducts from "../api/getProducts";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductsCategory = () => {
  let query = useQuery();
  const category_id = query.get("categoryId");
  const page = query.get("page");
  let history = useHistory();
  const [data, setData] = useState();
  const [switchState, setSwitchState] = useState(0);

  const onSwitchStateHandler = (s) => {
    setSwitchState(s);
  };

  const handlePageChange = (pageNumber) => {
    let updateQuery = `products?page=${pageNumber}`;
    if (category_id) updateQuery += `&categoryId=${category_id}`;
    history.push(updateQuery);
  };

  useEffect(() => {
    setData(getProducts(0, 10, category_id).result);
  }, [category_id]);

  return (
    <Layout>
      <Breadcrumb links={{ Home: "home" }} last={"Filter"} />
      <div className={classes.body}>
        <StickyContainer>
          <Categories />
        </StickyContainer>
        <div className={classes.container}>
          <div className={classes.topContainer}>
            <h2>All Products</h2>
            <div className={classes.actionBar}>
              <p>182 results</p>
              <ViewSwitch state={switchState} onSwitch={onSwitchStateHandler} />
            </div>
          </div>
          <div className={classes.bottomContainer}>
            <GridView data={data} renderItem={ProductItem} />
            <Pagination
              activePage={page}
              dataLength={20}
              onSelect={handlePageChange}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsCategory;
