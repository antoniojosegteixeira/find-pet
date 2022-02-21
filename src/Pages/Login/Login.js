import React from "react";

export default function Login() {
  return (
    <div data-testid="login-wrapper">
      Login
      <input data-testid="login-email-input" label="email"></input>
      <input data-testid="login-password-input" label="password"></input>
    </div>
  );
}
