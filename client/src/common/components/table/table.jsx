import React from "react";
// import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Tabledark = (props) => {
  const navigate =useNavigate();
  const gosch=()=>
  {
      navigate(`/schedule/${props.id}`);

  }
  return (
    <tr>
      <td>{props.ind}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.mobile}</td>
      <td>
        <Button variant="success" size="sm">View</Button>{" "}
      </td>
      <td>
        <Button  onClick={gosch} variant="danger" size="sm">Schedule an Interview</Button>{" "}
        
      </td>
      <td>
        <Button variant="info" size="sm">{props.status}</Button>{" "}
      </td>
    </tr>
  );
};

export default Tabledark;
