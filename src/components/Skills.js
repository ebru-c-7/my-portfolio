import React, { useState } from "react";
import axios from "../utility/axios";

import Modal from "react-bootstrap/Modal";

import CustomFigure from "./CustomFigure";

const Skills = (props) => {
  const [list, setList] = useState(null);

  const loadSkills = async () => {
    const skills = await axios.get("/skillsList.json");
    setList(skills.data);
  };

  if (!list) {
    loadSkills();
  }

  let content = list ? (<React.Fragment>
    <Modal.Header closeButton>
      <Modal.Title>My Skills</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <CustomFigure data={list && list.project}>My Project-Based Skills</CustomFigure>
      <hr />
      <CustomFigure data={list && list.basic}>General Knowledge</CustomFigure>
    </Modal.Body>
  </React.Fragment>) : null;
 
  return content;
};

export default Skills;
