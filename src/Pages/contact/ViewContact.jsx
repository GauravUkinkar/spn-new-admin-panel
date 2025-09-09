import React, { useContext } from "react";
import TableView from "../../Componant/table/TableView";
import axios from "axios";
import "./ViewContact.scss";
import { UserContext } from "../../Context";

const ViewContact = () => {
  const { getContactList, contact } = useContext(UserContext);

  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_APP_API_URL}api/contact/deleteContact/${id}`
      );
      getContactList();
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
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
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
        <div>
          <button
            className="delete"
            onClick={() => handleDeleteContact(record.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h3>contact form</h3>

      <div className="parent-table-component">
        <TableView
          data={contact}
          columns={columns}
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default ViewContact;
