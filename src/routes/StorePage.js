import React from "react";

import { getStore } from "../api/getStores";

import { Tab, Panal } from "../components/Tab";
import ImageLoader from "../components/UI/ImageLoader/ImageLoader";
import Button from "../components/UI/Button/Button";

import TabProducts from "../containers/Store/TabProducts";

import classes from "./StorePage.module.css";

const About = () => {
  return <div>About</div>;
};

const StorePage = (props) => {
  const storeId = Number(props.match.params.id);
  const store = getStore(storeId);

  return (
    <section title="store">
      <ImageLoader
        className={classes.background}
        alt={store.name}
        src={store.background}
      />
      <div className={classes["main"]}>
        <div className={classes["header"]}>
          <div className={classes["info"]}>
            <ImageLoader
              className={classes["logo"]}
              src={store.logo}
              alt={store.name + " logo"}
            />
            <div>
              <h2>{store.name}</h2>
              <span>{"1.2K Followers"}</span>
            </div>
            <Button type="outline" className={classes["action"]}>
              Follow
            </Button>
            <div className={classes["search-box"]}>
              <input type="text" placeholder="Search" />
              <ion-icon name="search" />
            </div>
          </div>
        </div>
        <Tab>
          <Panal name="products" component={TabProducts} />
          <Panal name="about" component={About} />
        </Tab>
      </div>
    </section>
  );
};

export default StorePage;
