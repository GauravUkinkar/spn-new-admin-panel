import React from "react";
import "./dropdown.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Dropdown = ({ title, pagelinks, isOpen, onToggle, index }) => {
  return (
    <>
      <div className="main-menu" onClick={() => onToggle(index)}>
        {title}
        <div className="icon">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      {isOpen && (
        <div className="menu-list">
          {pagelinks.map((pagelink, index) => (
            <Link to={pagelink.pageurl} className="menu-one" key={index}>
              {pagelink.pagetext}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;
