import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreatePost from "../Pages/CreatePost/CreatePost";

const CreateRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Register />} />
      <Route path="/criar-post" element={<CreatePost />} />
    </Routes>
  </BrowserRouter>
);

export default CreateRoutes;
