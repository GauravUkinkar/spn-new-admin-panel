import React, { useContext } from "react";
import "./Dashboard.scss";
import { UserContext } from "../../Context";

const Dashboard = () => {
  const { blogs, lekhajokha, query, contact } = useContext(UserContext); 

  return (
    <div className="dashboard-parent parent">
      <div className="dashboard-container container">
        <div className="top-bar">
          <div className="card-box">
            <div className="card">
              <div className="headings">Blogs</div>
              <div className="counter">{blogs?.allLength?.count}</div>
            </div>
            <div className="card">
              <div className="headings">Lekhajokha</div>
              <div className="counter">{lekhajokha.length}</div>
            </div>
            <div className="card">
              <div className="headings">Query</div>
              <div className="counter">{query.length}</div>
            </div>
            <div className="card">
              <div className="headings">Contact</div>
              <div className="counter">{contact.length}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
