import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./Pages/login/Login";
import Sidebar from "./Componant/sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Add_Blog from "./Pages/Blogs/Add-Blog/Add_Blog";

function App() {
  return (
    <>
      <BrowserRouter>
      <Sidebar />
      {/* <Dashboard /> */}
      
      
      
     
        <Routes>
          {/* <Route path="/" element={<Login />}/> */}
          <Route path="/add-blog" element={<Add_Blog /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
