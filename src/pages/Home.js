import React from "react";
import { logout } from "../services/auth";

export default function Home() {
  return (
    <div>
      Home
      <hr />
      <span></span>
      <hr />
      <button onClick={() => logout()}>LOGOUT</button>
    </div>
  );
}
