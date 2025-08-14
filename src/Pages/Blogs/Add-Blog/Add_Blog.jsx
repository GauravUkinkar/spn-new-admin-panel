import React, { useState } from "react";
import "./Add-blog.scss";
import MyEditor from "../../../Componant/MyEditor";

const Add_Blog = () => {
  const [title, setTitle] = useState("");
  const [editorData, setEditorData] = useState("");
  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      editorData,
      image,
      date,
      language,
    });
    // Send data to API
  };

  return (
    <div className="add-blog-parent parent">
      <div className="add-blog-container container">
        <h3>Add Your Blog</h3>
        <div className="blog-temp">
          {/* Left side form */}
          <div className="left-side">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Enter Blog Title</label>
                <input
                  type="text"
                  placeholder="Enter Blog Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <MyEditor value={editorData} onChange={setEditorData} />

              <div className="main-group">
                <div className="input-group">
                  <label>Select Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setImage(
                        e.target.files[0]
                          ? URL.createObjectURL(e.target.files[0])
                          : null
                      )
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Select Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="language">Select Language</label>
                  <select
                    id="language"
                    name="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="english">English</option>
                    <option value="marathi">Marathi</option>
                  </select>
                </div>
              </div>

              <button className="btn" type="submit">
                Submit Blog
              </button>
            </form>
          </div>

          {/* Right side preview */}
          <div className="right-side">
            <h4>Preview Your Blog</h4>
            <div className="preview-card">
              {image && (
                <img
                  src={image}
                  alt="Preview"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              )}
              {(date || language) && (
                <p>
                  {date && (
                    <span>
                      <strong>Date:</strong> {date}
                    </span>
                  )}
                  {language && (
                    <>
                      {" | "}
                      <span>
                        <strong>Category:</strong> {language}
                      </span>
                    </>
                  )}
                </p>
              )}
              {title && <h3>{title}</h3>}
              {editorData && (
                <div
                  dangerouslySetInnerHTML={{ __html: editorData }}
                  style={{ margin: "10px 0" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Blog;
