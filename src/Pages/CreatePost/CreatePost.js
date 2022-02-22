import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    // Dispatch as action to redux
  };

  return (
    <div data-testid="create-post-wrapper">
      Criar Post
      <form>
        <input
          name="images"
          type="file"
          multiple
          accept="image/png, image/jpeg, image/jpg"
          alt="image upload"
        />
        <br />

        <button onSubmit={onSubmit} data-testid="create-post-submit-button">
          Enviar
        </button>
      </form>
    </div>
  );
}
