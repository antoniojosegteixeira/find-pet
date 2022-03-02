import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreatePost from "../Pages/CreatePost/CreatePost";
import Home from "../Pages/Home";
import Feed from "../Pages/Feed";

const CreateRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Register />} />
      <Route path="/criar-post" element={<CreatePost />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  </BrowserRouter>
);

export default CreateRoutes;
