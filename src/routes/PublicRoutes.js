import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

export default function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registrar" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
