import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminHome from "../Components/Admin/Home";
import EditUser from "../Components/Admin/EditUser";

function AdminRoutes() {
  return (
    <Routes>
        <Route exact path="/home" element={<AdminHome/>} />
        <Route exact path="/edituser/:id" element={<EditUser/>} />
    </Routes>
  )
}

export default AdminRoutes