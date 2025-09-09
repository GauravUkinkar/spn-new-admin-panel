import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.scss";
import Login from "./Pages/login/Login";
import Sidebar from "./Componant/sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Add_Blog from "./Pages/Blogs/Add-Blog/Add_Blog";
import "react-toastify/dist/ReactToastify.css";
import View_blog from "./Pages/Blogs/View-Blog/View_blog";
import Lekhajokha from "./Pages/lekhajokha/Lekhajokha";
import View_Lekhajokha from "./Pages/lekhajokha/view-lekhajokha/View_Lekhajokha";
import QueryForm from "./Pages/query-form/QueryForm";
import ViewQueryForm from "./Pages/query-form/ViewQueryForm";
import ViewContact from "./Pages/contact/ViewContact";
import { useState } from "react";

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/login" />;
}



function App() {
  const location = useLocation();
  const hideSidebar = location.pathname === "/login";

  const [dashboardCount, setDahboardCount] = useState({
    blogs:"",
    lekhajokha:"",
    query:"",
    contact:""
  });  

  return (
    <div className="app">
      {!hideSidebar && <Sidebar />}

      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Private routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard dashboardCount={dashboardCount}  />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-blog/:id?"
          element={
            <PrivateRoute>
              <Add_Blog />
            </PrivateRoute>
          }
        />
        <Route
          path="/view-blog"
          element={
            <PrivateRoute>
              <View_blog setDahboardCount={setDahboardCount} />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-lekhajokha"
          element={
            <PrivateRoute>
              <Lekhajokha />
            </PrivateRoute>
          }
        />
        <Route
          path="/view-lekhajokha"
          element={
            <PrivateRoute>
              <View_Lekhajokha />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-query"
          element={
            <PrivateRoute>
              <QueryForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/view-query"
          element={
            <PrivateRoute>
              <ViewQueryForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/view-contact"
          element={
            <PrivateRoute>
              <ViewContact />
            </PrivateRoute>
          }
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
