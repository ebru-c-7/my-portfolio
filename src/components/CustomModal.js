import React from "react";

import Modal from "react-bootstrap/Modal";

import About from "./About";
import Training from "./Training";
import Skills from "./Skills";
import Projects from "./Projects";

const CustomModal = (props) => {
  let content;

  const changeHandler = (section) => {
    props.change(section);
  }

  switch(props.type) {
    case "education-certificates": content = (<Training />); break;
    case "about-me": content = (<About change={changeHandler} />); break;
    case "my-projects": content = (<Projects />); break;
    case "skills": content = (<Skills />); break;
    default: content = null;
  }



  return (
    <Modal show={!!props.type} onHide={props.close}>
      {content}
    </Modal>
  );
};

export default CustomModal;
