import React from "react";

import { Tab, Panal } from "../components/Tab";

const StorePage = (props) => {
  const storeId = props.match.params.id;

  return (
    <Tab>
      <Panal name="about" />
      <Panal name="home" />
    </Tab>
  );
};

export default StorePage;
