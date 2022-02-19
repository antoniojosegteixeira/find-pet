import React from "react";
import { login } from "../services/auth";

export default function Login() {
  return (
    <div>
      Login
      <button onClick={() => login("email2@email.com", "1234567890")}>
        LOGIN
      </button>
    </div>
  );
}
