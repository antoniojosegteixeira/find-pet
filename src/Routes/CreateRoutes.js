import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const CreateRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export default CreateRoutes;
