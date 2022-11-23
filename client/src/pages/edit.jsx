import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Edit = () => {
  const params = useParams();
  const id = params.id;
  console.log(id);

  const [user, setUser] = useState({
    startdate: "",
    stime: "",
    enddate: "",
    endtime: "",
    status: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const sd = async (e) => {
    e.preventDefault();
    const { startdate, stime, enddate, endtime, status } = user;
    const res = await fetch(`/edit/:${id}`, {
      // const res = await fetch("/apply", {
      // const res = await fetch(`http://localhost:4000/edit/:${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startdate,
        stime,
        enddate,
        endtime,
        status,
      }),
    });
    // const data = await res.json();
    if (res.status === 200) {
      window.alert(`Hello,you have successfully scheduled the interview`);
    } else {
      window.alert("some error occured");
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-success my-2">Reschedule Interview for</h1>
        <h3 className="text-danger my-2">user with id: {id} </h3>
        <Form method="post" className="my-2">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>New start Date</Form.Label>
            <Form.Control
              name="startdate"
              type="date"
              value={user.startdate}
              onChange={handleInput}
              placeholder="enter start date"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>New Start Time</Form.Label>
            <Form.Control
              name="stime"
              type="time"
              value={user.stime}
              onChange={handleInput}
              placeholder="enter start time"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>New End Date</Form.Label>
            <Form.Control
              name="enddate"
              type="date"
              value={user.enddate}
              onChange={handleInput}
              placeholder="enter end date"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>New End Time</Form.Label>
            <Form.Control
              name="endtime"
              type="time"
              value={user.endtime}
              onChange={handleInput}
              placeholder="enter end time"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Are you Sure</Form.Label>
            <Form.Control
              name="status"
              type="text"
              value={user.status}
              onChange={handleInput}
              placeholder="please type yes or no in small letters"
              required
            />
            <Form.Text className="text-muted">
              <span className="text-danger">
                please type yes or no in small letters
              </span>
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={sd}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Edit;
