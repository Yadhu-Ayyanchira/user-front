import React from "react";
import { Route,Routes } from "react-router-dom"; 

import Home from "../Components/User/Home";
import Login from "../Components/User/Login";
import Signup from "../Components/User/Signup";

function UserRoutes() {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default UserRoutes