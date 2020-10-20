import React, { useState } from "react";

import rocket from "../assets/icons/rocket-solid.svg";
import code from "../assets/icons/laptop-code-solid.svg";
import cap from "../assets/icons/graduation-cap-solid.svg";
import tools from "../assets/icons/tools-solid.svg";

import MenuItem from "./MenuItem";
import CustomModal from "./CustomModal";

const Container = () => {
  const [modal, setModal] = useState(null);

  const modalHandler = (section) => setModal(section);

  const modalCloseHandler = () => setModal(null);
  
  return (
    <React.Fragment>
      <div className="App">
        <MenuItem
          class="App-top"
          logo={rocket}
          alt="about-me"
          modalHandler={modalHandler}
        >
          About Me
        </MenuItem>
        <div className="App-middle">
          <MenuItem logo={code} alt="my-projects" modalHandler={modalHandler}>
            My Projects
          </MenuItem>
          <MenuItem
            logo={cap}
            alt="education-certificates"
            modalHandler={modalHandler}
          >
            Education & {"\n"}
            Certificates
          </MenuItem>
        </div>
        <MenuItem
          class="App-bottom"
          logo={tools}
          alt="skills"
          modalHandler={modalHandler}
        >
          My Skills
        </MenuItem>
      </div>
      <CustomModal type={modal} close={modalCloseHandler} />
    </React.Fragment>
  );
}

export default Container;
