import React from "react";

import "./Add-blog.scss";
import MyEditor from "../../../Componant/MyEditor";

const Add_Blog = () => {
  return (
    <div className="add-blog-parent parent">
      <div className="add-blog-container container">
        <h3>Add Your Blog</h3>
        <div className="left-side">
          <form>
            <input type="text" placeholder="Enter Blog Title" />
            <MyEditor />
            <input type="file"></input>
            <button type="submit">Submit Blog</button>
          </form>
        </div>
        <div className="right-side">
          <h3>Preview Your Blog</h3>
        </div>
      </div>
    </div>
  );
};

export default Add_Blog;
