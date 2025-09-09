import React, { useState } from "react";
import "./Sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { LuLogOut } from "react-icons/lu";

const Sidebar = () => {

  const navigate = useNavigate();

  const [activeDropdown, setActiveDropdown] = useState(null);
  const pageurl = [
    { id: 1, pageurl: "add-blog", pagetext: "Add Blog" },
    { id: 2, pageurl: "view-blog", pagetext: "View Blog" },
  ];

  const pageurl1 = [
    { id: 1, pageurl: "add-lekhajokha", pagetext: "Add Lekhajokha Data" },
    {
      id: 2,
      pageurl: "view-lekhajokha",
      pagetext: "View Lekhajokha Data",
    },
  ];

  const pageurl2 = [
    { id: 1, pageurl: "add-query", pagetext: "Add New Query" },
    { id: 2, pageurl: "view-query", pagetext: "View New Data" },
  ];
  const handleDropdownToggle = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="sidebar-parent">
        <div className="main-box">
          <div className="logo">
            <Link to="/"> SPN </Link>
          </div>
          <div className="menu-box">
            <Dropdown
              title="Blog Details"
              pagelinks={pageurl}
              index={0}
              isOpen={activeDropdown === 0}
              onToggle={handleDropdownToggle}
            />
            <Dropdown
              title="Lekhajokha Details"
              pagelinks={pageurl1}
              index={1}
              isOpen={activeDropdown === 1}
              onToggle={handleDropdownToggle}
            />
            <Dropdown
              title="Query Form Details"
              pagelinks={pageurl2}
              index={2}
              isOpen={activeDropdown === 2}
              onToggle={handleDropdownToggle}
            />
            <Link to="/view-contact" className="contact">
              Contact Form Data
            </Link>
          </div>
        </div>

        <div className="logout" onClick={handleLogout}>
          LogOut
          <div className="icon">
            <LuLogOut />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
