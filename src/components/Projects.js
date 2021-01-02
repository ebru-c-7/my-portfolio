import React, { useState } from "react";
import axios from "../utility/axios";

import Modal from "react-bootstrap/Modal";

import CustomCard from "./CustomCard";

const Projects = (props) => {
  const [list, setList] = useState(null);

  const loadProjects = async () => {
    const projects = await axios.get("/projectList.json");
    setList(projects.data);
  };

  if (!list) {
    loadProjects();
  }

  let content = list ? (
    <React.Fragment>
      <Modal.Header closeButton>
        <Modal.Title>My Projects</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CustomCard data={list} />
      </Modal.Body>
    </React.Fragment>
  ) : null;

  return content;
};

export default Projects;
