import React from "react";

import Modal from "react-bootstrap/Modal";

import CustomFigure from "./CustomFigure";
import {skillsList} from "./source";

const Skills = (props) => {
  return (
    <React.Fragment>
      <Modal.Header closeButton>
        <Modal.Title>My Skills</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CustomFigure data={skillsList.project}>My Project-Based Skills</CustomFigure>
        <CustomFigure data={skillsList.basic}>General Knowledge</CustomFigure>
      </Modal.Body>
    </React.Fragment>
  );
};

export default Skills;
