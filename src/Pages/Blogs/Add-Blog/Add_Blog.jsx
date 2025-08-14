import React from "react";

import "./Add-blog.scss";
import MyEditor from "../../../Componant/MyEditor";

const Add_Blog = () => {
  return (
    <div className="add-blog-parent parent">
      <div className="add-blog-container container">
        <h3>Add Your Blog</h3>
        <div className="blog-temp">
          <div className="left-side">
            <form>
              <div className="input-group">
                <label>Enter Blog Title</label>
                <input type="text" placeholder="Enter Blog Title" />
              </div>

              <MyEditor />
              <div className="main-group">
                <div className="input-group">
                  <label>Select Image</label>
                  <input type="file"></input>
                </div>
                <div className="input-group">
                  <label>Select Date</label>
                  <input type="date"></input>
                </div>
                <div className="input-group">
                  <label for="language">Select Language</label>
                  <select id="language" name="language">
                    <option value="">Select</option>
                    <option value="english">English</option>
                    <option value="marathi">Marathi</option>
                  </select>
                </div>
              </div>

              <button className="btn" type="submit">Submit Blog</button>
            </form>
          </div>
          <div className="right-side">
            <h4>Preview Your Blog</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Blog;
