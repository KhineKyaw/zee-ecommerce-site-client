import React from "react";

import classes from "./TabButton.module.css";

const TabButton = (props) => {
  const { active, text, handleClick } = props;
  return (
    <button
      className={`${classes.tabbutton} ${active && classes.active}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default TabButton;
