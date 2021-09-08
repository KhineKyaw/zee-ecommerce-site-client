import React from "react";

import { getStore } from "../api/getStores";

import { Tab, Panal } from "../components/Tab";
import ImageLoader from "../components/UI/ImageLoader/ImageLoader";

import classes from "./StorePage.module.css";

const About = () => {
  return <div>About</div>;
};

const Home = () => {
  return <div>Home</div>;
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
      <Tab>
        <Panal name="home" component={Home} />
        <Panal name="about" component={About} />
      </Tab>
    </section>
  );
};

export default StorePage;
