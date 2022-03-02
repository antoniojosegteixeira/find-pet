import React from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../Validation/Schemas/login-schema";
import { loginUser } from "../../Redux/Slices/User/requests";
import { selectLoginStatus } from "../../Redux/Slices/User/userSlice";
import { useSelector } from "react-redux";
import styles from "./styles";

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
import Layout from "../../Components/Layout";
import LoginSvg from "../../Components/Svg/LoginSvg";
import loginCat from "../../Assets/Images/login-cat.png";

export default function Login() {
  const dispatch = useDispatch();
  const loginStatus = useSelector(selectLoginStatus);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (formData) => {
    // Dispatch as action to redux
    //dispatch(loginUser(formData));
  };

  return (
    <Layout>
      <Container sx={styles.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box sx={styles.formWrapper}>
              <Typography variant="h3" component="h1" sx={styles.title}>
                Acesse sua conta
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

          <Grid item xs={12} md={6} sx={styles.imageGrid}>
            <Box sx={styles.svgWrapperBox}>
              <LoginSvg />
              <img src={loginCat} alt="Gato cinza" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
