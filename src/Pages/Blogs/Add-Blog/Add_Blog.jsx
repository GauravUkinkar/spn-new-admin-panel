import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Add-blog.scss";
import MyEditor from "../../../Componant/MyEditor";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const Add_Blog = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    description: "",
    date: "",
    category: "",
    image: "",
  });

  const [image, setImage] = useState(null);

  const getBlogsById = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/blog/getBlogById?id=${id}`
      );

      if (response?.status === 200) {
        const blog = response?.data?.response[0];

        setData((prev) => ({
          ...prev,
          title: blog?.title,
          description: blog?.description,
          date: blog?.date,
          category: blog?.category,
          image: blog?.image,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getBlogsById(id);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("blog", JSON.stringify(data));

    if (image) {
      formData.append("image", image);
    }

    try {
      let response;

      if (id) {
        // Update blog
        response = await axios.put(
          `${import.meta.env.VITE_APP_API_URL}api/blog/update?blogId=${id}`,
          formData
        );
        if (response.status === 200) {
          toast.success("Blog updated successfully!");
          navigate("/view-blog");
        }
      } else {
        // Add blog
        response = await axios.post(
          `${import.meta.env.VITE_APP_API_URL}/api/blog/add`,
          formData
        );
        if (response.status === 200) {
          toast.success("Blog added successfully!");
          navigate("/view-blog");
        }
      }

      setData({
        title: "",
        description: "",
        date: "",
        category: "",
      });
    } catch (error) {
      console.error(
        "Error submitting blog:",
        error.response?.data || error.message
      );
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
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
                  value={data.title || ""}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                />
              </div>

              <MyEditor
                value={data.description || ""}
                onChange={(value) => setData({ ...data, description: value })}
              />

              <div className="main-group">
                <div className="input-group">
                  <label>Select Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <div className="input-group">
                  <label>Select Date</label>
                  <input
                    type="date"
                    value={data.date}
                    onChange={(e) => setData({ ...data, date: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="language">Select Language</label>
                  <select
                    id="category"
                    name="category"
                    value={data.category}
                    onChange={(e) =>
                      setData({ ...data, category: e.target.value })
                    }
                  >
                    <option value="">Select Category</option>
                    <option value="English">English</option>
                    <option value="Marathi">Marathi</option>
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
              {(image || data.image) && (
                <img
                  src={
                    image
                      ? URL.createObjectURL(image)
                      : `https://diwise.cloud/spn_images/${data.image}`
                  }
                  alt="Preview"
                  style={{ width: "20%", borderRadius: "8px" }}
                />
              )}

              {(data.date || data.category) && (
                <p>
                  {data.date && (
                    <span>
                      <strong>Date:</strong> {data.date}
                    </span>
                  )}
                  {data.category && (
                    <>
                      {" | "}
                      <span>
                        <strong>Language:</strong> {data.category}
                      </span>
                    </>
                  )}
                </p>
              )}
              {data.title && <h3>{data.title}</h3>}
              {data.description && (
                <div
                  dangerouslySetInnerHTML={{ __html: data.description }}
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
