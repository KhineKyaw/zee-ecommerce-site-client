import React from "react";

import TabButton from "./TabButton";
import Panal from "./Panal";
import { useState } from "react/cjs/react.development";

const Tab = (props) => {
  const panals = props.children.filter(({ type }) => type === Panal);
  const [current, setCurrent] = useState(
    panals.length !== 0 && panals[0].props.name
  );

  return (
    <div className="tab">
      <div className="tab-actions">
        {panals.map(({ props: { name } }) => (
          <TabButton
            key={name}
            text={name}
            active={current === name}
            handleClick={() => setCurrent(name)}
          />
        ))}
      </div>
      {panals.find(({ props: { name } }) => name === current)}
    </div>
  );
};

export default Tab;
