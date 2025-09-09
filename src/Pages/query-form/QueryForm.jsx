import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const QueryForm = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    village: "",
    taluka: "",
    district: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}api/queryForm/add`,
        data
      );

      toast.success("Query form data submitted successfully!");
      navigate("/view-query-form");

      setData({
        name: "",
        phone: "",
        address: "",
        village: "",
        taluka: "",
        district: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Error submitting blog:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div>
      <div className="add-lekhajokha-parent parent">
        <div className="add-lekhajokha-container container">
          <h3>Add Lekhajokha Data</h3>
          <div className="blog-temp">
            {/* Left side form */}
            <div className="left-side">
              <form onSubmit={handleSubmit}>
                <div class="main-group">
                  <div className="input-group">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      value={data.name}
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="input-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      placeholder="Phone"
                      value={data.phone}
                      onChange={(e) =>
                        setData({ ...data, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-group">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Address"
                      value={data.address}
                      onChange={(e) =>
                        setData({ ...data, address: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div class="main-group">
                  <div className="input-group">
                    <label>Village</label>
                    <input
                      type="text"
                      placeholder="Village"
                      value={data.village}
                      onChange={(e) =>
                        setData({ ...data, village: e.target.value })
                      }
                    />
                  </div>

                  <div className="input-group">
                    <label>Taluka</label>
                    <input
                      type="text"
                      placeholder="Taluka"
                      value={data.taluka}
                      onChange={(e) =>
                        setData({ ...data, taluka: e.target.value })
                      }
                    />
                  </div>

                  <div className="input-group">
                    <label>District</label>
                    <input
                      type="text"
                      placeholder="district"
                      value={data.district}
                      onChange={(e) =>
                        setData({ ...data, district: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Message</label>
                  <input
                    type="text"
                    placeholder="Message"
                    value={data.message}
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                  />
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
                {data.name && <h4>{data.name}</h4>}
                {data.phone && <h4>{data.phone}</h4>}
                {data.address && <h4>{data.address}</h4>}
                {data.village && <h4>{data.village}</h4>}
                {data.taluka && <h4>{data.taluka}</h4>}
                {data.district && <h4>{data.district}</h4>}
                {data.message && (
                  <div
                    dangerouslySetInnerHTML={{ __html: data.message }}
                    style={{ margin: "10px 0" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryForm;
