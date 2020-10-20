import React from "react";

import Figure from "react-bootstrap/Figure";

const CustomFigure = (props) => {
  let figuresElement = props.data.map((el, i) => (
    <Figure key={i}>
      <Figure.Image alt="tool" src={el.logo} />
      <Figure.Caption>{el.description}</Figure.Caption>
    </Figure>
  ));

  return (
    <section>
      <h6>{props.children}</h6>
      <div className="figure-container">{figuresElement}</div>
    </section>
  );
};

export default CustomFigure;
