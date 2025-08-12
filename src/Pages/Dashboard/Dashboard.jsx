import React, { useState } from "react";
import "./Dashboard.scss";
import { Table } from "antd";

const Dashboard = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const toggleMessage = (key) => {
    if (expandedRowKeys.includes(key)) {
      setExpandedRowKeys(expandedRowKeys.filter((k) => k !== key));
    } else {
      setExpandedRowKeys([...expandedRowKeys, key]);
    }
  };

  const columns = [
    {
      title: "Sr No",
      key: "srno",
      render: (_, __, index) => index + 1,
      width: 80,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Mobile Number",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      render: (text, record) => {
        const words = text.split(" ");
        const isExpanded = expandedRowKeys.includes(record.key);

        return (
          <>
            {isExpanded
              ? text
              : words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "")}
            {words.length > 10 && (
              <span
                onClick={() => toggleMessage(record.key)}
                style={{
                  color: "#580b0b",
                  cursor: "pointer",
                  marginLeft: 15,
                  textDecoration: "underline",
                }}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </span>
            )}
          </>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "John",
      surname: "Brown",
      contact: "9090909090",
      email: "info@spn.com",
      message:
        "dflkjfdslkj sdflkjdfskljfdslk lksdfjkldsfjkl klsdfjklsdfj lksdfjkljdfs lkjsdfkljdf ls kjlj lkj klj klj klkj kljklj klj kjljkl jkl jkl jkl jkl kjliu iou  jk iuyui bkj hkj yiu kjj hkj ui hbkj h",
    },
    {
      key: "2",
      name: "Jim",
      surname: "Green",
      contact: "9090909090",
      email: "info@spn.com",
      message:
        "dflkjfdslkj sdflkjdfskljfdslk lksdfjkldsfjkl klsdfjklsdfj lksdfjkljdfs lkjsdfkljdf ls",
    },
    {
      key: "3",
      name: "Joe",
      surname: "Black",
      contact: "9090909090",
      email: "info@spn.com",
      message:
        "dflkjfdslkj sdflkjdfskljfdslk lksdfjkldsfjkl klsdfjklsdfj lksdfjkljdfs lkjsdfkljdf ls",
    },
  ];

  return (
    <div className="dashboard-parent parent">
      <div className="dashboard-container container">
        <div className="top-bar">
          <div className="card-box">
            <div className="card">
              <div className="headings">Blogs</div>
              <div className="counter">20</div>
            </div>
            <div className="card">
              <div className="headings">Lekhajokha</div>
              <div className="counter">20</div>
            </div>
            <div className="card">
              <div className="headings">Query</div>
              <div className="counter">20</div>
            </div>
            <div className="card">
              <div className="headings">Contact</div>
              <div className="counter">20</div>
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <h3>Contact Form Entries</h3>
          <Table
            dataSource={data}
            columns={columns}
            pagination={{ pageSize: 5 }}
            scroll={{ x: 1000 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
