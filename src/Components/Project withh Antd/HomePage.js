import { DatePicker, Table, Form } from "antd";
import React from "react";
import 'antd/dist/antd.css'; 
import "./HomePage.scss";
const columns = [
  {
    title: "C1",
    dataIndex: "C1",
    key: "C1",
  },
  {
    title: "C2",
    dataIndex: "C2",
    key: "C2",
  },
  {
    title: "C3",
    dataIndex: "C3",
    key: "C3",
  },
  {
    title: "C4",
    dataIndex: "C4",
    key: "C4",
  },
  {
    title: "C5",
    dataIndex: "C5",
    key: "C5",
  },
];
const myArray = [];
for (let i = 0; i <= 100; i++) {
  myArray.push({
    key: i,
    C1: `${i + 1}`,
    C2: `${i + 1}`,
    C3: `${i + 1}`,
    C4: `${i + 1}`,
    C5: `${i + 1}`,
  });
}

const data = myArray;
const HomePage = () => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div>
      <div className="calender">
        <Form
          labelCol={{
            span: 2,
          }}
        >
          <Form.Item label="select month" name="select month">
            <DatePicker onChange={onChange} picker="month" />
          </Form.Item>
          {/* <Form.Item label="select year" name="select year">
            <DatePicker onChange={onChange} picker="year" />
          </Form.Item> */}
        </Form>
      </div>
      <div className="table">
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ y: "80vh" }}
          pagination={false}
        />
      </div>
    </div>
  );
};
export default HomePage;
