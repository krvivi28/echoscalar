import React from "react";
// import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Tabledark2 = (props) => {
  const navigate = useNavigate();
  const gosch = () => {
    navigate(`/edit/${props.id}`);
  };
  return (
    <tr>
      <td>{props.ind}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>
        {props.sd} at {props.st}
      </td>
      <td>
        {props.ed} at {props.et}
      </td>
      <td>
        <Button variant="success" size="sm">
          View
        </Button>{" "}
      </td>
      <td>
        <Button onClick={gosch} variant="danger" size="sm">
          Edit
        </Button>{" "}
      </td>
    </tr>
  );
};

export default Tabledark2;
