import React, { useEffect } from "react";
import Tabledark from "../../common/components/table/table";
// import Datetime  from "../../common/components/datetimepicker/datetimepick";
import { useState } from "react";
import Table from "react-bootstrap/Table";


const Create = () => {
  // const [value, onChange] = useState(new Date());
  const [data, setData] = useState([]);
  useEffect(() => {
    allusers();
  }, []);
  const allusers = async () => {
    try {
      await fetch("/allusers")
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);


  return (
    <>
      <div className="container my-5">
        <h1 className={"text-success"}>Applicants</h1>

        <Table responsive="sm" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Candidate Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Resume</th>
              <th>Action</th>
              <th>Scheduled</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, ind) => {
              // return <Product key={data.id} img={data.img} name={data.name} about={data.about} id={data.id}/>
              return (
                <Tabledark
                  key={data._id}
                  ind={ind+1}
                  name={data.name}
                  email={data.email}
                  mobile={data.mobile}
                  status={data.status}
                  id={data._id}
                />
              );
            })}
            ;
          </tbody>
        </Table>
        {/* <Datetime/> */}
      </div>
    </>
  );
};
export default Create;
