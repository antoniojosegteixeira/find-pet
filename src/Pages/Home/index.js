import React from "react";
import styles from "./styles";

import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { BgSvg } from "./svgs";
import smilingDog from "../../Assets/Images/smiling-dog.png";

const Home = () => {
  return (
    <Container sx={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={6} sx={styles.heroInfo}>
          <Box sx={styles.heroInfoBox}>
            <Typography variant="h3" component="h1" sx={styles.title}>
              FindPet te ajuda a encontrar seu amigo perdido!
            </Typography>
            <Button variant="contained" sx={styles.button}>
              Registrar
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={styles.heroBackground}>
          <Box sx={styles.backgroundWrapper}>
            <Box sx={{ ...styles.animalBubble, ...styles.cat }}></Box>
            <Box sx={{ ...styles.animalBubble, ...styles.dog }}></Box>
            <Box sx={{ ...styles.animalBubble, ...styles.iguana }}></Box>
            <Box sx={{ ...styles.animalBubble, ...styles.bird }}></Box>

            <img src={smilingDog} alt="Cão de óculos sorrindo" />
            <BgSvg />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
