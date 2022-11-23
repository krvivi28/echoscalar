import React, { useEffect } from "react";
// import Tabledark from "../../common/components/table/table";
// import Datetime  from "../../common/components/datetimepicker/datetimepick";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Tabledark2 from "../../common/components/table2";


const Upcoming = () => {
  // const [value, onChange] = useState(new Date());
  const [data, setData] = useState([]);
  useEffect(() => {
    allusers();
  }, []);
  const allusers = async () => {
    try {
      await fetch("/alluserss")
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
        <h1 className={"text-success"}>Scheduled Interviews</h1>

        <Table responsive="sm" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Candidate Name</th>
              <th>Email</th>
              <th>Start Time and Date</th>
              <th>End Time and Date</th>
              <th>Resume</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((data, ind) => {
              // return <Product key={data.id} img={data.img} name={data.name} about={data.about} id={data.id}/>
              return (
                <Tabledark2
                  key={data._id}
                  ind={ind+1}
                  name={data.name}
                  email={data.email}
                  sd={data.startdate}
                  st={data.stime}
                  ed={data.enddate}
                  et={data.endtime}
                  resume={data.resume}
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
export default Upcoming;
