import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/Slices/User/requests.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registrationSchema from "../../Validation/Schemas/registration-schema";

import { Container, Form, Grid, Typography, Box } from "@mui/material";
import Layout from "../../Components/Layout";
import Svg from "../../Components/Svg/RegistroSvg";
import boxDog from "../../Assets/Images/box-dog.png";
import styles from "./styles";

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
    <Layout>
      <Container sx={styles.container} maxWidth="false">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" sx={styles.title}>
              Registre-se
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={styles.boxWrapper}>
              <Svg />
              <img src={boxDog} alt="Cão em uma caixa de papelão" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
