import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminHome from "../Components/Admin/Home";
import EditUser from "../Components/Admin/EditUser";
import Login from "../Components/Admin/Login";
import AddUser from "../Components/Admin/AddUser";
import AdminProtect from "./AdminProtect";
import AdminPublic from "./AdminPublic";


function AdminRoutes() {
  return (
    <Routes>
      <Route exact path="/login" element={ <AdminPublic> <Login/> </AdminPublic> } />
      <Route exact path="/home" element={ <AdminProtect> <AdminHome /> </AdminProtect> } />
      <Route exact path="/edituser/:id" element={ <AdminProtect> <EditUser/> </AdminProtect> } />
      <Route exact path="/addUser" element={ <AdminProtect> <AddUser/> </AdminProtect>}/>

    </Routes>
  );
}

export default AdminRoutes