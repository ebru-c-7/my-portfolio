import React from "react";

import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import profile from "../assets/profile-ebru-c-7.jpg";

const About = (props) => {
  return (
    <React.Fragment>
      <Modal.Header closeButton>
        <Modal.Title>who am I?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={profile} alt="profile" className="about-profile" />
        <p>
          I have provided the advisory and audit (post-control) services at EY
          Turkey to the global clients for almost 6 years after graduation.
          However, at the end of this long and fruitful career, I have decided
          to pursue a different path and started to work to become a front-end
          developer after leaving EY as the "Global Trade Manager".
        </p>
        <p>
          I have completed the double major program with MIS department in the
          university and participated in the system design and management of
          multiple projects to get my degree. Currently, I have a medium level
          of knowledge of HTML, CSS, and JavaScript languages and actively work
          on the projects with the libraries JQuery, React, Bootstrap and more
          (Check out{" "}
          <code onClick={props.change.bind(null, "skills")}>my skills</code>{" "}
          section here).
        </p>
        <p>
          Also, you can take a look at the projects on{" "}
          <code onClick={props.change.bind(null, "my-projects")}>
            my projects
          </code>{" "}
          section.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Header>
          <b>Contact: </b>
        </Modal.Header>
        <Modal.Body>
          <a
            className="about-social"
            target="blank"
            rel="noopener noreferrer"
            href={"https://www.linkedin.com/in/ebru-%C3%A7akmak-1b62b133/"}
          >
            <FontAwesomeIcon
              style={{ fontSize: "1.3rem" }}
              icon={faLinkedinIn}
            />
          </a>
          <a className="about-social" href={`mailto:ebru.cakmak00@gmail.com`}>
            <FontAwesomeIcon style={{ fontSize: "1.3rem" }} icon={faEnvelope} />
          </a>
          <a
            className="about-social"
            target="blank"
            rel="noopener noreferrer"
            href={"https://github.com/ebru-c-7/"}
          >
            <FontAwesomeIcon style={{ fontSize: "1.3rem" }} icon={faGithub} />{" "}
          </a>
        </Modal.Body>
      </Modal.Footer>
    </React.Fragment>
  );
};

export default About;
