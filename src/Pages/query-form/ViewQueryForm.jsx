import React, { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import TableView from "../../Componant/table/TableView";
import { UserContext } from "../../Context";
import { Select } from "antd";
import axios from "axios";

const ViewQueryForm = () => {
  const { query } = useContext(UserContext);

  const handleStatusChange = (value, record) => {
    console.log("New status:", value, "For record:", record);
  };

  const userRole = localStorage.getItem("role");

  const handleRoleCheck = async (track_id) => {
    try {
      const response = await axios.put(
        `${
          import.meta.env.VITE_APP_API_URL
        }api/queryForm/statusChanged?trackId=${track_id}`,
        { role: userRole }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
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
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Village",
      dataIndex: "village",
      key: "village",
    },
    {
      title: "Taluka",
      dataIndex: "taluka",
      key: "taluka",
    },
    {
      title: "District",
      dataIndex: "district",
      key: "district",
    },
    {
      title: "Track id",
      dataIndex: "track_id",
      key: "track_id",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => {
        const role = userRole?.toUpperCase();

        // Allowed statuses based on role
        const statusOptions =
          role === "ADMIN"
            ? ["Pending", "In Progress", "Resolved", "Rejected"]
            : ["Pending", "In Progress"];

        return (
          <Select
            defaultValue={text}
            style={{ width: 150 }}
            onChange={(value) => handleStatusChange(value, record)}
          >
            {statusOptions.map((status) => (
              <Select.Option key={status} value={status}>
                {status}
              </Select.Option>
            ))}
          </Select>
        );
      },
    },
    {
      title: "Feedback",
      dataIndex: "feedback",
      key: "feedback",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      render: (text) => (
        <div
          dangerouslySetInnerHTML={{
            __html: text?.slice(0, 100) + "...",
          }}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <div class="action-btn-wrap">
            <CiEdit className="edit-icon" />

            <MdOutlineDelete className="delete-icon" />
          </div>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className=" parent-table-component">
        <TableView
          data={query}
          columns={columns}
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default ViewQueryForm;
