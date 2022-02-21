import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/Slices/userSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registrationSchema from "../../Validation/Schemas/registration-schema";

export default function Register() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = (data) => {
    // Dispatch as action to redux
    dispatch(registerUser(data));
  };

  return (
    <div data-testid="register-wrapper">
      register
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          data-testid="register-name-input"
          name="name"
          {...register("name")}
        ></input>
        <br />
        <span data-testid="register-name-error">{errors.name?.message}</span>
        <input
          data-testid="register-email-input"
          name="email"
          {...register("email")}
        ></input>
        <br />
        <span data-testid="register-email-error">{errors.email?.message}</span>
        <input
          data-testid="register-password-input"
          name="password"
          type="password"
          {...register("password")}
        ></input>
        <span data-testid="register-password-error">
          {errors.password?.message}
        </span>
        <input
          data-testid="register-confpassword-input"
          name="confPassword"
          {...register("confPassword")}
        ></input>
        <br />
        <span data-testid="register-confpassword-error">
          {errors.confPassword?.message}
        </span>
        <button onSubmit={onSubmit}>Enviar</button>
      </form>
    </div>
  );
}
