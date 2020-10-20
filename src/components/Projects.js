import React from "react";

import Modal from "react-bootstrap/Modal";

import CustomCard from "./CustomCard";

import {projectList} from "./source";

const Projects = (props) => {
  return (
    <React.Fragment>
      <Modal.Header closeButton>
        <Modal.Title>My Projects</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CustomCard data={projectList} />
      </Modal.Body>
    </React.Fragment>
  );
};

export default Projects;
