import React from "react";
import styles from "./styles";

import { Container, Grid, Typography, Box, Button } from "@mui/material";
import FirstSectionSvg from "./svg/FirstSectionSvg";
import SecondSectionSvg from "./svg/SecondSectionSvg";
import smilingDog from "../../Assets/Images/smiling-dog.png";
import layingDog from "../../Assets/Images/laying-dog.png";

const Home = () => {
  return (
    <>
      <Container sx={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} sx={styles.heroInfo}>
            <Box sx={styles.heroInfoBox}>
              <Typography variant="h3" component="h1" sx={styles.title}>
                FindPet te ajuda a encontrar seu amigo perdido!
              </Typography>
              <Button variant="contained" sx={styles.button}>
                Registrar
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7} sx={styles.heroBackground}>
            <Box sx={styles.backgroundWrapper}>
              <Box sx={{ ...styles.animalBubble, ...styles.cat }}></Box>
              <Box sx={{ ...styles.animalBubble, ...styles.dog }}></Box>
              <Box sx={{ ...styles.animalBubble, ...styles.iguana }}></Box>
              <Box sx={{ ...styles.animalBubble, ...styles.bird }}></Box>

              <img src={smilingDog} alt="Cão de óculos sorrindo" />
              <FirstSectionSvg />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container sx={styles.container}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ ...styles.heroInfo, ...styles.heroInfoAlt }}
          >
            <Box sx={styles.heroInfoBox}>
              <Typography variant="h3" component="h1" sx={styles.title}>
                Encontrou algum animal perdido? Publique na FindPet!
              </Typography>
              <Typography variant="p" component="p" sx={styles.paragraph}>
                Milhares de animais são perdidos todos os anos. Ajude donos de
                pet a reencontrarem seus animais.
              </Typography>
              <Button variant="contained" sx={styles.button}>
                Entrar
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ ...styles.heroBackground, ...styles.heroBackgroundAlt }}
          >
            <Box sx={styles.secondBackgroundWrapper}>
              <img src={layingDog} alt="Cão deitado" />
              <SecondSectionSvg />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
