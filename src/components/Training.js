import React, { useState } from "react";
import axios from "../utility/axios";

import Modal from "react-bootstrap/Modal";

import CustomTable from "./CustomTable";

const Training = (props) => {
  const [list, setList] = useState(null);

  let head1 = ["", "University", "Department"];
  let head2 = ["", "Institution", "Subject", "Certificate"];

  const loadTraining = async () => {
    const training = await axios.get("/trainingList.json");
    setList(training.data);
  };

  if (!list) {
    loadTraining();
  }

  let content = list ? (
    <React.Fragment>
      <Modal.Header closeButton>
        <Modal.Title>Education & Certificates</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CustomTable data={list.education} head={head1}>
          Education
        </CustomTable>
        <CustomTable data={list.certificates} head={head2}>
          Certificates
        </CustomTable>
      </Modal.Body>
    </React.Fragment>
  ) : null;

  return content;
};

export default Training;
