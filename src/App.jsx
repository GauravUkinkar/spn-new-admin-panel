import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./Pages/login/Login";
import Sidebar from "./Componant/sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
      <Sidebar />
      <Dashboard />
      
      
      
     
        <Routes>
          {/* <Route path="/" element={<Login />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
