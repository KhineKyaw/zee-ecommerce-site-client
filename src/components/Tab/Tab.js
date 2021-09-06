import React from "react";

import TabButton from "./TabButton";
import Panal from "./Panal";

const Tab = (props) => {
  const panals = props.children.filter(({ type }) => type === Panal);
  return (
    <>
      {panals.map(({ props: { name } }) => (
        <TabButton key={name} text={name} />
      ))}
    </>
  );
};

export default Tab;
