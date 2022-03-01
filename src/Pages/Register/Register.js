import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/Slices/User/requests.js";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registrationSchema from "../../Validation/Schemas/registration-schema";

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
import Layout from "../../Components/Layout";
import Svg from "../../Components/Svg/RegistroSvg";
import boxDog from "../../Assets/Images/box-dog.png";
import styles from "./styles";

export default function Register() {
  const dispatch = useDispatch();
  const [userState, setUserState] = useState("AC");

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
    //dispatch(registerUser(data));
  };

  return (
    <Layout>
      <Container sx={styles.container} maxWidth="false">
        <Grid container>
          <Grid item xs={12} md={6}>
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
              <Button type="submit">Enviar</Button>
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
