import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Slices/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: "João",
        email: "joaodasdas@gmail.com",
        password: "648dsad323",
      })
    );
  };

  return (
    <div data-testid="login-wrapper">
      Login
      <input data-testid="login-email-input" label="email"></input>
      <input data-testid="login-password-input" label="password"></input>
      <button onSubmit={onSubmit}>Enviar</button>
    </div>
  );
}
