import React from "react";
import { useAuth } from "./context/store";
import { BrowserRouter } from "react-router-dom";

import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>{user ? <PrivateRoutes /> : <PublicRoutes />}</BrowserRouter>
  );
};

export default App;
