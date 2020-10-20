import React from "react";

import Modal from "react-bootstrap/Modal";

import { trainingList } from "./source";
import CustomTable from "./CustomTable";

const Training = (props) => {
  let head1 = ["", "University", "Department"];
  let head2 = ["", "Institution", "Subject", "Certificate"];

  return (
    <React.Fragment>
      <Modal.Header closeButton>
        <Modal.Title>Education & Certificates</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CustomTable data={trainingList.education} head={head1}>
          Education
        </CustomTable>
        <CustomTable data={trainingList.certificates} head={head2}>
          Certificates
        </CustomTable>
      </Modal.Body>
    </React.Fragment>
  );
};

export default Training;
