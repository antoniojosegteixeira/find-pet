import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createPostSchema from "../../Validation/Schemas/create-post-schema";
import { useSelector } from "react-redux";
import styles from "./styles";

import Layout from "../../Components/Layout";
import FileDrop from "../../Components/FileDrop";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

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
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Layout>
      <Container sx={styles.container} maxWidth="false">
        <Typography variant="h3" component="h1" sx={styles.title}>
          Criar novo post
        </Typography>

        <Box
          component="form"
          sx={styles.form}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FileDrop />
          <Box sx={styles.formWrapper}>
            <Controller
              name="animalName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={errors.animalName ? true : false}
                  id="animal-name-field"
                  label="Nome do animal"
                  helperText={errors.animalName?.message}
                />
              )}
            />
            <Controller
              name="breed"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={errors.breed ? true : false}
                  id="breed-field"
                  label="Raça"
                  helperText={errors.breed?.message}
                />
              )}
            />
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={errors.age ? true : false}
                  id="age-field"
                  label="Idade"
                  helperText={errors.age?.message}
                />
              )}
            />
            <Box>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={errors.city ? true : false}
                    id="city-field"
                    label="Cidade"
                    helperText={errors.city?.message}
                  />
                )}
              />
            </Box>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={errors.description ? true : false}
                  id="description-field"
                  label="Descrição"
                  helperText={errors.description?.message}
                  multiline
                  rows={4}
                />
              )}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={styles.submitButton}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
