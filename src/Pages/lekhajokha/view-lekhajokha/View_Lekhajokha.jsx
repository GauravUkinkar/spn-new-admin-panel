import React, { useContext} from "react";
import "./View_Lekhajokha.scss";
import TableView from "../../../Componant/table/TableView";
import { UserContext } from "../../../Context";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const View_Lekhajokha = () => {

  const { lekhajokha } = useContext(UserContext) ;

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/add-blog/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_APP_API_URL}api/blog/deleteBlog?id=${id}`
      );
      if (response.status === 200) {
        toast.success("Blog deleted successfully!");
        // getViewBlog(selectedCategory);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete blog.");
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
      title: "Work Name",
      dataIndex: "work_name",
      key: "work_name",
    },
    {
      title: "Work Description",
      dataIndex: "work_desc",
      key: "work_desc",
    },
    {
      title: "Work Status",
      dataIndex: "work_status",
      key: "work_status",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
    },
    {
      title: "Sector Name",
      dataIndex: "sector_name",
      key: "sector_name",
    },
    {
      title: "Work Budget",
      dataIndex: "work_budget",
      key: "work_budget",
    },
    {
      title: "Village Name",
      dataIndex: "village_name",
      key: "village_name",
    },
    {
      title: "Taluka Name",
      dataIndex: "taluka_name",
      key: "taluka_name",
    },
    {
      title: "Extra Field",
      dataIndex: "extra_feild",
      key: "extra_feild",
    },
    {
      title: "Description",
      dataIndex: "work_desc",
      key: "work_desc",
      render: (text) => (
        <div
          dangerouslySetInnerHTML={{
            __html: text?.slice(0, 100) + "...",
          }}
        />
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) =>
        image ? (
          <img
            src={`${import.meta.env.VITE_APP_API_URL}${image}`}
            alt="Blog"
            style={{
              width: "80px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
        ) : (
          "No Image"
        ),
    },
    {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <>
              <div class="action-btn-wrap">
                <CiEdit
                  onClick={() => handleEdit(record.id)}
                  className="edit-icon"
                />
    
                <MdOutlineDelete
                  onClick={() => handleDelete(record.id)}
                  className="delete-icon"
                />
              </div>
            </>
          ),
        },
  ];

  return (
    <div>
      <div className=" parent-table-component">
        {/* <Dropdown
          menu={{ items, onClick: handleMenuClick }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              
              <DownOutlined />
            </Space>
          </a>
        </Dropdown> */}
        <TableView
          data={lekhajokha}
          columns={columns}
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default View_Lekhajokha;
