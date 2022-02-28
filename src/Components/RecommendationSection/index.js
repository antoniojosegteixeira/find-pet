import React from "react";
import styles from "./styles";

import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import client1 from "../../Assets/Images/client1.png";
import client2 from "../../Assets/Images/client2.png";
import client3 from "../../Assets/Images/client3.png";

export default function RecommendationSection() {
  return (
    <Container sx={styles.container} maxWidth="false">
      <Grid container spacing={4} sx={styles.gridContainer}>
        <Grid item sm={4} sx={styles.gridItem}>
          <Box sx={styles.card}>
            <Box sx={styles.imgWrapper}>
              <Box sx={styles.imgBackground}></Box>
              <img src={client1} alt="Mulher abraçada com gato" />
            </Box>
            <CardContent sx={styles.cardInfo}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                color="#DDCA69"
              >
                Ana & Toby
              </Typography>
              <Typography variant="body2" color="white" align="center">
                "Reencontrei o Toby em pouco tempo com a ajuda da comunidade!"
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid item sm={4} sx={styles.gridItem}>
          <Box sx={styles.card}>
            <Box sx={styles.imgWrapper}>
              <Box sx={styles.imgBackground}></Box>
              <img src={client2} alt="Mulher abraçada com cachorro" />
            </Box>
            <CardContent sx={styles.cardInfo}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                color="#DDCA69"
              >
                Jéssica & Laika
              </Typography>
              <Typography variant="body2" color="white" align="center">
                "Encontramos a Laika com a ajuda do FindPet!"
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid item sm={4} sx={styles.gridItem}>
          <Box sx={styles.card}>
            <Box sx={styles.imgWrapper}>
              <Box sx={styles.imgBackground}></Box>
              <img src={client3} alt="Homem abraçado com cachorro" />
            </Box>
            <CardContent sx={styles.cardInfo}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                color="#DDCA69"
              >
                Matheus & Fred
              </Typography>
              <Typography variant="body2" color="white" align="center">
                "Em apenas três horas recebemos uma ligação. Alguém tinha achado
                o Fred!"
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
