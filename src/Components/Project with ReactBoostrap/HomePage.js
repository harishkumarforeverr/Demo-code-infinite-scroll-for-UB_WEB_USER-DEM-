import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.scss";
import { Button, Form, Table } from "react-bootstrap";

const myArray = [];
for (let i = 0; i <= 100; i++) {
  myArray.push({
    key: i,
    C1: `${i + 1}  apple`,
    C2: `${i + 1}  realme`,
    C3: `${i + 1}  macbook`,
    C4: `${i + 1}  samsung`,
    C5: `${i + 1}  oppo`,
  });
}

const HomePage = () => {
  return (
    <div className="rootdiv">
      <div className="calender">
        {" "}
        <label for="bdaymonth"> Select Moth :</label>
        <input type="month" name="bdaymonth" /> (NOTE: in REACT-Bosstrap we dont
        have Date Picker so i added html date(month) picker)
      </div>
      <div className="table">
        <div className="table-container">
          <Table
            style={{
              position: "relative",
            }}
            striped
            bordered
            hover
          >
            <thead
            className="table-header"
              style={{
                position: "sticky",
                top: "0",
              
              }}
            >
              <tr>
                <th>#</th>
                <th>C1</th>
                <th>C2</th>
                <th>C3</th>
                <th>C4</th>
                <th>C5</th>
              </tr>
            </thead>
            <tbody>
              {myArray?.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{val.C1}</td>
                    <td>{val.C2}</td>
                    <td>{val.C3}</td>
                    <td>{val.C4}</td>
                    <td>{val.C5}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
