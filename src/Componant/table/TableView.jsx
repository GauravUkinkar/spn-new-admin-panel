import React from "react";
import { Table } from "antd";
import "./TableView.scss";

const TableView = ({ data, columns, pagination }) => {
  return (
    <>
      <Table
        scroll={{ x: 1000 }}
        dataSource={data}
        columns={columns}
        pagination={pagination}
    
      />
    </>
  );
};

export default TableView;
