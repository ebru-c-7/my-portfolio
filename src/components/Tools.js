import React from "react";

const Tools = (props) => {
  return props.data.map((tool, i) => (
    <img src={tool} alt="tool" key={i} style={{ width: "2rem" }} />
  ));
};

export default Tools;
