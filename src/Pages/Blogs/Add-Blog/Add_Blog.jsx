import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./Add-blog.scss";

const Add_Blog = () => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Description Markdown:", description);
  };

  return (
    <div className="add-blog-parent parent">
      <div className="add-blog-container container">
        <h3>Add Your Blog</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Blog Title" />

          <SimpleMDE
            value={description}
            onChange={setDescription}
            options={{
              spellChecker: false,
              placeholder: "Write your blog description here...",
              toolbar: [
                "bold",
                "italic",
                "heading",
                "|",
                "quote",
                "unordered-list",
                "ordered-list",
                "|",
                "link",
                "image",
                "|",
                "preview",
                "side-by-side",
                "fullscreen",
                "|",
                "guide",
              ],
              renderingConfig: {
                singleLineBreaks: false,
                codeSyntaxHighlighting: true,
              },
            }}
          />

          <button type="submit">Submit Blog</button>
        </form>
      </div>
    </div>
  );
};

export default Add_Blog;
