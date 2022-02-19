import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/perfil" element={<Profile />}></Route>
    </Routes>
  );
}
