import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Apply = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    resume: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const submitdata = async (e) => {
    e.preventDefault();
    const { name, email, mobile, resume } = user;
    const res = await fetch("/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        resume,
      }),
    });
    // const data = await res.json();
    if (res.status === 200) {
      window.alert(`Hello, ${user.name}! Congrats have applied successfully!`);
    } else {
      window.alert("some error occured");
    }
  };

  return (
    <>
      <div className="container">
        <h1 className={"text-success my-2"}>Apply Now</h1>
        <Form method="post" className="my-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={user.email}
              onChange={handleInput}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              value={user.name}
              onChange={handleInput}
              placeholder="Enter your name"
            />
            <Form.Text className="text-muted">Full Name</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mob No:</Form.Label>
            <Form.Control
              name="mobile"
              type="text"
              value={user.mobile}
              onChange={handleInput}
              placeholder="Enter your contact no"
            />
            <Form.Text className="text-muted">Contact No</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Resume</Form.Label>
            <Form.Control
              name="resume"
              type="text"
              value={user.resume}
              onChange={handleInput}
              placeholder="upload your resume"
            />
            <Form.Text className="text-muted">
              resume should be in pdf form
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={submitdata}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Apply;
