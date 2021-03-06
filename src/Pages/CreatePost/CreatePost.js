import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createPostSchema from "../../Validation/Schemas/create-post-schema";
import { useSelector } from "react-redux";
import styles from "./styles";
import { states } from "../../Utils/stateList";
import { useSnackbar } from "notistack";

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
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

export default function CreatePost() {
  const dispatch = useDispatch();
  const [species, setSpecies] = useState("dog");
  const [userState, setUserState] = useState("AC");
  const [postType, setPostType] = useState("lost");
  const [files, setFiles] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (formData) => {
    // Dispatch as action to redux
    if (files.length === 0) {
      enqueueSnackbar("Insira uma imagem", { variant: "error" });
      return;
    }
    console.log({ ...formData, species, files });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      animalName: "",
      breed: "",
      city: "",
      description: "",
    },
    resolver: yupResolver(createPostSchema),
  });

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
          <FileDrop files={files} setFiles={setFiles} />
          <Box sx={styles.formWrapper}>
            <Box sx={styles.toggleButtonWrapper}>
              <ToggleButtonGroup
                color="primary"
                value={postType}
                exclusive
                onChange={(e) => {
                  setPostType(e.target.value);
                }}
                sx={styles.toggleButton}
              >
                <ToggleButton value="lost">Perdi meu pet</ToggleButton>
                <ToggleButton value="found">Encontrei um pet</ToggleButton>
              </ToggleButtonGroup>
            </Box>

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
            <Box sx={styles.inlineForm}>
              <Controller
                name="breed"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={errors.breed ? true : false}
                    id="breed-field"
                    label="Ra??a"
                    helperText={errors.breed?.message}
                  />
                )}
              />
              <FormControl fullWidth sx={styles.smallInput}>
                <InputLabel id="species--field-label">Esp??cie</InputLabel>
                <Select
                  labelId="species-field"
                  id="species-field"
                  value={species}
                  label="Estado"
                  onChange={(e) => setSpecies(e.target.value)}
                >
                  <MenuItem value="dog">C??o</MenuItem>
                  <MenuItem value="cat">Gato</MenuItem>
                  <MenuItem value="rodent">Roedor</MenuItem>
                  <MenuItem value="equine">Equino</MenuItem>
                  <MenuItem value="bird">Ave</MenuItem>
                  <MenuItem value="reptile">R??ptil</MenuItem>
                  <MenuItem value="other">Outro</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={styles.inlineForm}>
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
              <FormControl fullWidth sx={styles.smallInput}>
                <InputLabel id="state-field-label">Estado</InputLabel>
                <Select
                  labelId="state-field"
                  id="state-field"
                  value={userState}
                  label="Estado"
                  onChange={(e) => setUserState(e.target.value)}
                >
                  {states.map((item) => {
                    return (
                      <MenuItem
                        value={Object.keys(item)[0]}
                        key={Object.keys(item)[0]}
                      >
                        {Object.values(item)[0]}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={errors.description ? true : false}
                  id="description-field"
                  label="Descri????o"
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
