import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import classes from "./ProductsCategory.module.css";
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb";
import StickyContainer from "../components/UI/StickyContainer/StickyContainer";
import Layout from "../hoc/Layout";
import getProducts from "../api/getProducts";
import ItemList from "../components/UI/ItemList/ItemList";
import ProductItem from "../components/Product/ProductItem/ProductItem";
import ProductListItem from "../components/Product/ProductListItem/ProductListItem";
import Categories from "../components/Navigations/Categories1/Categories";
import ViewSwitch from "../components/Products/ViewSwitch/ViewSwitch";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductsCategory = () => {
  let query = useQuery();
  const [switchState, setSwitchState] = useState(0);

  const onSwitchStateHandler = (s) => {
    setSwitchState(s);
  };

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
            <ItemList
              type={switchState ? "list" : "grid"}
              pagintionType="pager"
              activePage={query.get("page")}
              onDataQuery={() => []}
              renderItem={switchState ? ProductListItem : ProductItem}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsCategory;
