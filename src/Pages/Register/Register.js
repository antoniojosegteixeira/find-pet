import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/Slices/User/requests.js";
import { selectUser } from "../../Redux/Slices/User/userSlice";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registrationSchema from "../../Validation/Schemas/registration-schema";
import { useSnackbar } from "notistack";
import styles from "./styles";

import {
  Container,
  Form,
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
import Loading from "../../Components/Loading";
import Layout from "../../Components/Layout";
import Svg from "../../Components/Svg/RegistroSvg";
import boxDog from "../../Assets/Images/box-dog.png";

export default function Register() {
  const dispatch = useDispatch();
  const { user, loginStatus, error } = useSelector(selectUser);
  const [userState, setUserState] = useState("AC");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      city: "",
      password: "",
      confPassword: "",
    },
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = (data) => {
    // Dispatch as action to redux
    dispatch(
      registerUser({
        name: data.fullName,
        email: data.email,
        password: data.password,
        city: data.city,
        state: userState,
      })
    );
  };

  useEffect(() => {
    if (loginStatus === "failed") {
      enqueueSnackbar(error ? error : "Erro de rede", { variant: "error" });
    }

    if (loginStatus === "success") {
      enqueueSnackbar("Usuário registrado!", {
        variant: "success",
      });
    }
  }, [enqueueSnackbar, loginStatus, error]);

  return (
    <Layout>
      {loginStatus === "loading" && <Loading />}
      <Container sx={styles.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={styles.formWrapper}>
              <Typography variant="h3" component="h1" sx={styles.title}>
                Registre-se
              </Typography>
              <Box
                component="form"
                sx={styles.form}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <Controller
                    name="fullName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        error={errors.fullName ? true : false}
                        id="fullname-field"
                        label="Nome completo"
                        helperText={errors.fullName?.message}
                      />
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        error={errors.email ? true : false}
                        id="email-field"
                        label="Email"
                        helperText={errors.email?.message}
                      />
                    )}
                  />
                </div>
                <Box sx={styles.addressBox}>
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

                  <FormControl fullWidth sx={styles.stateInput}>
                    <InputLabel id="state-field-label">Estado</InputLabel>
                    <Select
                      labelId="state-field"
                      id="state-field"
                      value={userState}
                      label="Estado"
                      onChange={(e) => setUserState(e.target.value)}
                    >
                      <MenuItem value="AC">AC</MenuItem>
                      <MenuItem value="AM">AM</MenuItem>
                      <MenuItem value="AP">AP</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <div>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        error={errors.password ? true : false}
                        id="password-field"
                        label="Senha"
                        type="password"
                        helperText={errors.password?.message}
                      />
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="confPassword"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        error={errors.confPassword ? true : false}
                        id="conf-password-field"
                        label="Confirme a senha"
                        type="password"
                        helperText={errors.confPassword?.message}
                      />
                    )}
                  />
                </div>
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
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={styles.svgWrapper}>
              <Svg />
              <img src={boxDog} alt="Cão em uma caixa de papelão" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
