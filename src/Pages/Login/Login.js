import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Slices/userSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../Validation/Schemas/login-schema";

export default function Login() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    // Dispatch as action to redux
    dispatch(login(data));
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
        <button onSubmit={onSubmit}>Enviar</button>
      </form>
    </div>
  );
}
