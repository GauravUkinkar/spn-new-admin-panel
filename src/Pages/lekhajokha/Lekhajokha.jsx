import React, { useState } from "react";
import "./Lekhajokha.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Lekhajokha = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    work_name: "",
    work_desc: "",
    work_status: "",
    start_date: "",
    end_date: "",
    sector_name: "",
    work_budget: "",
    village_name: "",
    taluka_name: "",
    extra_feild: "",
  });

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("lekhaJokha", JSON.stringify(data));

    if (image) {
      formData.append("lekhajokhaimage", image);
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}api/lekhajokha/add`,
        formData
      );

      toast.success("Lekhajokha data submitted successfully!");
      navigate("/view-lekhajokha");

      setData({
        work_name: "",
        work_desc: "",
        work_status: "",
        start_date: "",
        end_date: "",
        sector_name: "",
        work_budget: "",
        village_name: "",
        taluka_name: "",
        extra_feild: "",
      });
    } catch (error) {
      console.error(
        "Error submitting blog:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="add-lekhajokha-parent parent">
      <div className="add-lekhajokha-container container">
        <h3>Add Lekhajokha Data</h3>
        <div className="blog-temp">
          {/* Left side form */}
          <div className="left-side">
            <form onSubmit={handleSubmit}>
              <div class="main-group">
                <div className="input-group">
                  <label>Work Name</label>
                  <input
                    type="text"
                    placeholder="Enter Work Name"
                    required
                    value={data.work_name}
                    onChange={(e) =>
                      setData({ ...data, work_name: e.target.value })
                    }
                  />
                </div>

                <div className="input-group">
                  <label>Work Status</label>
                  <input
                    type="text"
                    placeholder="Enter Work Status"
                    value={data.work_status}
                    onChange={(e) =>
                      setData({ ...data, work_status: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Work Description</label>
                  <textarea
                    placeholder="Enter Work Description"
                    value={data.work_desc}
                    onChange={(e) =>
                      setData({ ...data, work_desc: e.target.value })
                    }
                  />
                </div>
              </div>

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
                  <label>Start Date</label>
                  <input
                    type="date"
                    value={data.start_date}
                    onChange={(e) =>
                      setData({ ...data, start_date: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>End Date</label>
                  <input
                    type="date"
                    value={data.end_date}
                    onChange={(e) =>
                      setData({ ...data, end_date: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="main-group">
                <div className="input-group">
                  <label>Sector Name</label>
                  <input
                    type="text"
                    placeholder="Enter Sector Name"
                    value={data.sector_name}
                    onChange={(e) =>
                      setData({ ...data, sector_name: e.target.value })
                    }
                  />
                </div>

                <div className="input-group">
                  <label>Village name</label>
                  <input
                    type="text"
                    placeholder="Enter Village Name"
                    value={data.village_name}
                    onChange={(e) =>
                      setData({ ...data, village_name: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="main-group">
                <div className="input-group">
                  <label>Taluka Name</label>
                  <input
                    type="text"
                    placeholder="Enter Taluka Name"
                    value={data.taluka_name}
                    onChange={(e) =>
                      setData({ ...data, sector_name: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Work Budget</label>
                  <input
                    type="text"
                    placeholder="Enter Work Budget"
                    value={data.work_budget}
                    onChange={(e) =>
                      setData({ ...data, work_budget: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Extra Field</label>
                  <input
                    type="text"
                    placeholder="Enter Extra Field"
                    value={data.extra_feild}
                    onChange={(e) =>
                      setData({ ...data, extra_feild: e.target.value })
                    }
                  />
                </div>
              </div>

              <button className="btn" type="submit">
                Submit Blog
              </button>
            </form>
          </div>

          {/* Right side preview */}
          <div className="right-side">
            <h4>Preview Your Work</h4>
            <div className="preview-card">
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  style={{
                    width: "40%",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
              )}

              {/* Show dates */}
              {(data.start_date || data.end_date) && (
                <p>
                  {data.start_date && (
                    <span>
                      <strong>Start Date:</strong> {data.start_date}
                    </span>
                  )}
                  {data.end_date && (
                    <>
                      {" | "}
                      <span>
                        <strong>End Date:</strong> {data.end_date}
                      </span>
                    </>
                  )}
                </p>
              )}

              {/* Work Name */}
              {data.work_name && <h3>{data.work_name}</h3>}

              {/* Work Description */}
              {data.work_desc && (
                <p style={{ margin: "10px 0" }}>{data.work_desc}</p>
              )}

              {/* Extra Info */}
              <p>
                {data.village_name && <span>{data.village_name} </span>}
                {data.taluka_name && (
                  <>
                    {" | "}
                    <span>
                      <strong>Taluka:</strong> {data.taluka_name}
                    </span>
                  </>
                )}
              </p>

              {/* Budget & Sector */}
              {(data.work_budget || data.sector_name) && (
                <p>
                  {data.work_budget && (
                    <span>
                      <strong>Budget:</strong> ₹{data.work_budget}
                    </span>
                  )}
                  {data.sector_name && (
                    <>
                      {" | "}
                      <span>
                        <strong>Sector:</strong> {data.sector_name}
                      </span>
                    </>
                  )}
                </p>
              )}

              {/* Extra Field */}
              {data.extra_feild && (
                <p>
                  <strong>Extra:</strong> {data.extra_feild}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lekhajokha;
