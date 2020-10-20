import React from "react";

const MenuItem = (props) => {
  return (
    <React.Fragment>
      <div className={props.class} onClick={()=>props.modalHandler(props.alt)}>
        <img variant="top" src={props.logo} alt={props.alt} />
        <div style={props.style}>
          <h5>{props.children}</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuItem;
