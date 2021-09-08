import React from "react";

import { Tab, Panal } from "../components/Tab";

const About = () => {
  return <div>About</div>;
};

const Home = () => {
  return <div>Home</div>;
};

const StorePage = (props) => {
  const storeId = props.match.params.id;

  return (
    <Tab>
      <Panal name="home" component={Home} />
      <Panal name="about" component={About} />
    </Tab>
  );
};

export default StorePage;
