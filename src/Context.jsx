import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [lekhajokha, setLekhajokha] = useState([]);
  const [query, setQuery] = useState([]);
  const [contact, setContact] = useState([]);

  //get blogs

  const getViewBlog = async (category) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_APP_API_URL
        }api/blog/getBlogByCategory?category=${category}`
      );

      setBlogs(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  //get view lekhajokha

  const getAllLekhajokha = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/lekhajokha/getAllData`
      );

      setLekhajokha(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  // get query form

  const getQueryForm = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/queryForm/getQueryis`
      );
      setQuery(response?.data?.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // get contact

  const getContactList = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}api/contact/getAllContact`
      );
      setContact(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getViewBlog();
    getAllLekhajokha();
    getQueryForm();
    getContactList();
  }, []);

  return (
    <UserContext.Provider
      value={{ blogs, lekhajokha, query, contact, getViewBlog, getContactList }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
