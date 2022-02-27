import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createPostSchema from "../../Validation/Schemas/create-post-schema";
import { useSelector } from "react-redux";

export default function CreatePost() {
  const dispatch = useDispatch();
  const [species, setSpecies] = useState("cão");
  const [images, setImages] = useState(null);

  const handleFileSelected = (e) => {
    const files = e.target.files;
    for (let i = 0; i < Object.keys(files).length; i++) {
      if (files[i].size / 1024 / 1024 > 5) {
        window.alert("Tamanho máximo de arquivo: 5mb");
        break;
      }
    }
    setImages(files);
  };

  const onSubmit = (formData) => {
    // Dispatch as action to redux
    console.log({ ...formData, species, images });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div data-testid="create-post-wrapper">
      Criar Post
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <input
          name="images"
          type="file"
          multiple
          required
          accept="image/png, image/jpeg, image/jpg"
          alt="image upload"
          onChange={handleFileSelected}
        />
        <br />
        <input
          data-testid="create-post-animal-name-input"
          name="animalName"
          {...register("animalName")}
        ></input>
        <br />
        <span data-testid="create-post-animal-name-error">
          {errors.animalName?.message}
        </span>

        <select
          name="species"
          data-testid="create-post-select-species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        >
          <option defaultChecked value="cão">
            Cão
          </option>
          <option value="gato">Gato</option>
          <option value="ave">Ave</option>
          <option value="equino">Equino</option>
          <option value="roedor">Roedor</option>
          <option value="réptil">Réptil</option>
          <option value="anfíbio">Anfíbio</option>
          <option value="outro">Outro</option>
        </select>
        <br />
        <span data-testid="create-post-species-error">
          {errors.species?.message}
        </span>

        <input
          data-testid="create-post-color-input"
          name="color"
          {...register("color")}
        ></input>
        <br />
        <span data-testid="create-post-color-error">
          {errors.color?.message}
        </span>

        <input
          data-testid="create-post-description-input"
          name="description"
          {...register("description")}
        ></input>
        <br />
        <span data-testid="create-post-description-error">
          {errors.description?.message}
        </span>

        <input
          data-testid="create-post-city-input"
          name="city"
          {...register("city")}
        ></input>
        <br />
        <span data-testid="create-post-city-error">{errors.city?.message}</span>

        <input
          data-testid="create-post-city-input"
          name="state"
          {...register("state")}
        ></input>
        <br />
        <span data-testid="create-post-state-error">
          {errors.state?.message}
        </span>

        <input
          data-testid="create-post-city-input"
          name="state"
          {...register("state")}
        ></input>
        <br />
        <span data-testid="create-post-state-error">
          {errors.date?.message}
        </span>

        <input
          data-testid="create-post-city-input"
          name="date"
          type="date"
          {...register("date")}
        ></input>
        <br />
        <span data-testid="create-post-date-error">{errors.date?.message}</span>

        <button type="submit" data-testid="create-post-submit-button">
          Enviar
        </button>
      </form>
    </div>
  );
}
