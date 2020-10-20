import React from "react";

import Card from "react-bootstrap/Card";

import Tools from "./Tools";
import logo from "../assets/icons/tools/mern2.jpg";

const CustomCard = (props) => {
  return (
    <div className="card-container">
      {props.data.map((pro, i) => (
        <Card bg="light" text="dark" className="custom-card" key={i}>
          <Card.Img variant="top" src={pro.logo || logo} />
          <Card.Body>
            <Card.Title>{pro.name}</Card.Title>
            <Card.Text>{pro.description}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link target="blank" href={pro.codeURL}>Code</Card.Link>
            <Card.Link target="blank" href={pro.link}>Live</Card.Link>
          </Card.Body>
          <Card.Footer>
            <Tools data={pro.tools} />
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default CustomCard;
