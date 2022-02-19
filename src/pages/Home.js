import React from "react";
import { logout } from "../services/auth";
import useAuthListener from "../hooks/useAuthListener";

export default function Home() {
  const authUser = useAuthListener();

  console.log(authUser);
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
