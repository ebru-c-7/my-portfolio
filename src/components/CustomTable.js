import React from "react";

import Table from "react-bootstrap/Table";

const CustomTable = (props) => {
  const tdElement = props.data.map((el, i) => {
    let dataArr = [];
    for (let obj in el) {
      if (obj === "logo") {
        dataArr.unshift(
          <td key={obj}>
            <img src={el[obj]} alt="logo" />
          </td>
        );
      } else if (obj === "link") {
        dataArr.push(
          <td key={obj}>
            <a href={el[obj]} target="blank">Link</a>
          </td>
        );
      } else {
        dataArr.push(<td key={obj}>{el[obj]}</td>);
      }
    }
    return <tr key={i}>{dataArr}</tr>;
  });

  const headElement = props.head.map((el) => <th key={el}>{el}</th>);

  return (
    <section>
      <h6>{props.children}</h6>
      <Table striped bordered hover>
        <thead>
          <tr>{headElement}</tr>
        </thead>
        <tbody>{tdElement}</tbody>
      </Table>
    </section>
  );
};

export default CustomTable;
