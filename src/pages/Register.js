import React from "react";
import { register } from "../services/auth";

export default function Login() {
  return (
    <div>
      REGISTER
      <button onClick={() => register("email2@email.com", "1234567890")}>
        REGISTER
      </button>
    </div>
  );
}
