import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import styles from "./styles";

const Home = () => {
  return (
    <Container sx={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={6}>
          <Typography variant="h3" component="h1" sx={styles.title}>
            FindPet te ajuda a encontrar seu animal perdido!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
