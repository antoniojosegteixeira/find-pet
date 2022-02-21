import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../Validation/Schemas/login-schema";
import { loginUser } from "../../Redux/Slices/User/requests";
import { selectLoginStatus } from "../../Redux/Slices/User/userSlice";
import { useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const loginStatus = useSelector(selectLoginStatus);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    // Dispatch as action to redux
    dispatch(loginUser());
  };

  return (
    <div data-testid="login-wrapper">
      Login
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          data-testid="login-email-input"
          name="email"
          {...register("email")}
        ></input>
        <br />
        <span data-testid="login-email-error">{errors.email?.message}</span>
        <input
          data-testid="login-password-input"
          name="password"
          type="password"
          {...register("password")}
        ></input>
        <span data-testid="login-password-error">
          {errors.password?.message}
        </span>
        <button onSubmit={onSubmit} data-testid="login-submit-button">
          Enviar
        </button>
      </form>
      <span>{loginStatus}</span>
    </div>
  );
}
