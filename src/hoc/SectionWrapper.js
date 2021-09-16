import React from "react";

import classes from "./SectionWrapper.module.css";

const SectionWrapper = (props) => {
  const className = [classes.sectionWrapper];

  if (props.className) {
    className.push(props.className);
  }

  if (props.background) {
    className.push(classes["sw_background_" + props.background]);
  }

  const Props = { ...props };
  delete Props.children;
  delete Props.level;

  return (
    <div {...Props} className={className.join(" ")}>
      {props.children}
    </div>
  );
};

export default SectionWrapper;
