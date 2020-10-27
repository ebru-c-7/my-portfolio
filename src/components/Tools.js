import React from "react";

const Tools = (props) => {
  return props.data.map((tool, i) => (
    <img
      src={tool.logo}
      alt={tool.name}
      key={i}
      style={{ width: "2rem" }}
      title={tool.name}
    />
  ));
};

export default Tools;
